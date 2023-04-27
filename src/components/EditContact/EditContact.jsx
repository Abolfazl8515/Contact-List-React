import userImage from "../../assets/userImage.jfif";
import "./EditContact.css";

const EditContact = () => {
  return (
    <div className="editContact">
      <form>
        <div className="editContactForm">
          <div className="title">
            <h2>Edit Contact</h2>
          </div>
          <div className="box">
            <label htmlFor="contact-name">New Name:</label>
            <input type="text" name="name" placeholder="New Name..." />
          </div>
          <div className="box">
            <label htmlFor="contact-phone">New Phone Number:</label>
            <input
              type="number"
              name="phone"
              placeholder="New Phone number..."
            />
          </div>
          <div className="box">
            <label htmlFor="contact-description">New description:</label>
            <textarea
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
