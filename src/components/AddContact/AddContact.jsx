import userImage from "../../assets/userImage.jfif";
import "./AddContact.css";

const AddContact = () => {
  return (
    <div className="addContact">
      <form>
        <div className="addContactForm">
          <div className="title">
            <h2>Add new Contact</h2>
          </div>
          <div className="box">
            <img src={userImage} alt="user" />
            <input type="file" name="file" />
          </div>
          <div className="box">
            <label htmlFor="contact-name">Name:</label>
            <input type="text" name="name" placeholder="Name..." />
          </div>
          <div className="box">
            <label htmlFor="contact-phone">Phone Number:</label>
            <input type="number" name="phone" placeholder="Phone number..." />
          </div>
          <div className="box">
            <label htmlFor="contact-description">description:</label>
            <textarea
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
