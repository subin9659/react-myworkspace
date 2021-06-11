import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactItem from "./ContactItem";
import ContactPagination from "./ContactPagination";

const ContactList = () => {
  const data = useSelector((state) => state.contact);
  console.log("-- contact state in ContactList Component --");
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    // 서버에서 데이터를 받아오는 action을 실행
    dispatch({ type: "FETCH_CONTACTLIST_PAGING" });
  }, [dispatch]);

  return (
    <>
      <tbody
        style={{
          height: "400px",
          width: "600px",
          overflow: "scroll",
          display: "block",
        }}
      >
        {data.content.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </tbody>
      <div>
        <ContactPagination
          totalElements={data.totalElements}
          page={data.page}
          size={data.size}
        />
      </div>
    </>
  );
};

export default ContactList;
