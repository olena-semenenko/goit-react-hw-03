import css from './Contact.module.css';
import { ImUser, ImMobile } from "react-icons/im";

const Contact = ({ name, phone, id, deleteContact }) => {
  return (
    <div className={css.contactBox}>
      <span>
        <p className={css.name}><ImUser className={css.icon} />{name}</p>
        <p className={css.number}><ImMobile className={css.icon}/> {phone}</p>
      </span>

      <button className={css.button} type="button" onClick={()=> deleteContact(id)}>Delete</button>
    </div>
  );
};

export default Contact;
