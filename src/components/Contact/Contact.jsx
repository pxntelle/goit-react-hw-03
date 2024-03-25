import css from "./Contact.module.css";

import { FaUser } from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.card}>
      <div>
        <p>
          <FaUser className={css.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {contact.number}
        </p>
      </div>

      <button className={css.deleteButton} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
