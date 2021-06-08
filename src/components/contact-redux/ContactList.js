import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const contactList = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    // 서버에서 데이터를 받아오는 action을 실행
    dispatch({ type: "FETCH_CONTACTLIST" });
  }, [dispatch]);

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
