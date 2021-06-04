import ContactItem from "./ContactItem";

const ContactList = ({ inputvalue, t_body, onRemove, onSave }) => {
  return (
    <tbody ref={t_body}>
      {inputvalue.map((value, index) => (
        <tr>
          <ContactItem
            key={index}
            index={index}
            value={value}
            onRemove={onRemove}
            onSave={onSave}
          />
        </tr>
      ))}
    </tbody>
  );
};

export default ContactList;
