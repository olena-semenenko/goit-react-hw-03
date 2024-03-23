import css from './Contact.module.css';

const Contact = ({ name, phone }) => {
  return (
    <div className={css.contactBox}>
      <span>
        <p className={css.name}>{name}</p>
        <p className={css.number}>{phone}</p>
      </span>

      <button className={css.button} type="button">Delete</button>
    </div>
  );
};

export default Contact;
