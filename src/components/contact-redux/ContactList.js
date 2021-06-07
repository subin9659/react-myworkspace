import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const contactList = useSelector((state) => state.contact);

  return (
    <>
      <tbody style={{ height: "40vh", overflowY: "auto" }}>
        {contactList &&
          contactList.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
      </tbody>
    </>
  );
};

export default ContactList;
