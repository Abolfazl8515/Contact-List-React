import { useContactsActions, useContacts } from "../../AppProvider";
import userImage from "../../assets/userImage.jfif";
import "./ContactDetail.css";
import { Link } from "react-router-dom";

const ContactDetail = ({ match, history }) => {
  const id = match.params.id;
  const allContacts = useContacts();
  const dispatch = useContactsActions();
  const selectedContact = allContacts.find((c) => c.id == id);
  const deleteContactHandler = () => {
    dispatch({ type: "delete", id: Number(id) });
    history.push("/");
  };
  return (
    <div className="contactDetail">
      <div className="title">
        <h2>Contact detail</h2>
      </div>
      <div className="box">
        <img src={userImage} alt="user" />
      </div>
      <div className="box">
        <p>Contact name : {selectedContact.name}</p>
      </div>
      <div className="box">
        <p>Contact Phone: {selectedContact.phone}</p>
      </div>
      <div className="box">
        <p>Contact description : {selectedContact.desc}</p>
      </div>
      <div className="box">
        <Link to={`/edit/${id}`}>
          <button type="button" className="btn editBtn">
            Edit this Contact
          </button>
        </Link>
        <button
          type="button"
          className="btn deleteBtn"
          onClick={deleteContactHandler}
        >
          Delete this Contact
        </button>
      </div>
    </div>
  );
};

export default ContactDetail;
