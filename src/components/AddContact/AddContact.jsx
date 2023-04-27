import { useState } from "react";
import { useContactsActions } from "../../AppProvider";
import userImage from "../../assets/userImage.jfif";
import "./AddContact.css";

const AddContact = () => {
  const dispatch = useContactsActions();
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    desc: "",
  });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const addContactHandler = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.phone) return;
    dispatch({
      type: "add",
      name: contact.name,
      phone: contact.phone,
      desc: contact.desc,
    });
  };

  return (
    <div className="addContact">
      <form onSubmit={addContactHandler}>
        <div className="addContactForm">
          <div className="title">
            <h2>Add new Contact</h2>
          </div>
          <div className="box">
            <label htmlFor="contact-name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name..."
              onChange={changeHandler}
            />
          </div>
          <div className="box">
            <label htmlFor="contact-phone">Phone Number:</label>
            <input
              type="number"
              name="phone"
              placeholder="Phone number..."
              onChange={changeHandler}
            />
          </div>
          <div className="box">
            <label htmlFor="contact-description">description:</label>
            <textarea
              onChange={changeHandler}
              name="desc"
              cols="35"
              rows="5"
              placeholder="Description..."
            ></textarea>
          </div>
          <div className="box">
            <button type="submit">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
