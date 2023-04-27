import userImage from "../../assets/userImage.jfif";
import "./ContactDetail.css";
import { Link } from "react-router-dom";

const ContactDetail = () => {
  return (
    <div className="contactDetail">
      <div className="title">
        <h2>Contact detail</h2>
      </div>
      <div className="box">
        <img src={userImage} alt="user" />
      </div>
      <div className="box">
        <p>Contact name : Abolfazl</p>
      </div>
      <div className="box">
        <p>Contact Phone: 09108665521</p>
      </div>
      <div className="box">
        <p>Contact description : this is description</p>
      </div>
      <div className="box">
        <Link to="/edit">
          <button type="button" className="btn editBtn">
            Edit this Contact
          </button>
        </Link>
        <button type="button" className="btn deleteBtn">
          Delete this Contact
        </button>
      </div>
    </div>
  );
};

export default ContactDetail;
