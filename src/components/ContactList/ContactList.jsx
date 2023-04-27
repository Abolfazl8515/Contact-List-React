import userImage from "../../assets/userImage.jfif";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ContactList.css";
import { useContacts } from "../../AppProvider";

const ContactList = () => {
  const contacts = useContacts();
  return (
    <main className="contactList">
      <div className="title">
        <h2>Contacts</h2>
        <Link to="/add">
          <button type="button">Add</button>
        </Link>
      </div>
      {contacts.map((c) => {
        return (
          <div className="contact" key={c.id}>
            <div className="userProfile">
              <img
                src={c.imgSrc || userImage}
                alt="user"
                width={70}
                height={70}
              />
              <Link to="/edit">
                <button type="button">
                  <FaEdit />
                </button>
              </Link>
            </div>
            <Link to="/edit">
              <div className="user-data">
                <h4>{c.name}</h4>
                <p>{c.phone}</p>
              </div>
            </Link>
            <div className="actionBtn">
              <button type="button">
                <FaTrashAlt />
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default ContactList;
