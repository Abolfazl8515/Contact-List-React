import userImage from "../../assets/userImage.jfif";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ContactList.css";

const ContactList = () => {
  return (
    <main className="contactList">
      <div className="title">
        <h2>Contacts</h2>
        <Link to="/add">
          <button type="button">Add</button>
        </Link>
      </div>
      <Link to="/detail">
        <div className="contact">
          <div className="userProfile">
            <img src={userImage} alt="user" width={70} height={70} />
            <Link to="/edit">
              <button type="button">
                <FaEdit />
              </button>
            </Link>
          </div>
          <div className="user-data">
            <h4>Abolfazl</h4>
            <p>09108665521</p>
          </div>
          <div className="actionBtn">
            <button type="button">
              <FaTrashAlt />
            </button>
          </div>
        </div>
      </Link>
    </main>
  );
};

export default ContactList;
