import { useContacts, useContactsActions } from "../../AppProvider";
import "./EditContact.css";
import { useState } from "react";

const EditContact = ({ match, history }) => {
  const id = match.params.id;
  const allContacts = useContacts();
  const selectedContact = allContacts.find((c) => c.id == id);
  const [contact, setContact] = useState({
    name: selectedContact.name,
    phone: selectedContact.phone,
    desc: selectedContact.desc,
  });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const dispatch = useContactsActions();
  const editContactHandler = () => {
    const info = {
      name: contact.name,
      phone: contact.phone,
      desc: contact.desc,
    };
    dispatch({ type: "edit", id: Number(id), ...info });
    history.push("/");
  };
  return (
    <div className="editContact">
      <form onSubmit={editContactHandler}>
        <div className="editContactForm">
          <div className="title">
            <h2>Edit Contact</h2>
          </div>
          <div className="box">
            <label htmlFor="contact-name">New Name:</label>
            <input
              type="text"
              name="name"
              value={contact.name}
              placeholder="New Name..."
              onChange={changeHandler}
            />
          </div>
          <div className="box">
            <label htmlFor="contact-phone">New Phone Number:</label>
            <input
              value={contact.phone}
              onChange={changeHandler}
              type="number"
              name="phone"
              placeholder="New Phone number..."
            />
          </div>
          <div className="box">
            <label htmlFor="contact-description">New description:</label>
            <textarea
              value={contact.desc}
              onChange={changeHandler}
              name="desc"
              cols="35"
              rows="5"
              placeholder="New Description..."
            ></textarea>
          </div>
          <div className="box">
            <button type="submit">Update</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
