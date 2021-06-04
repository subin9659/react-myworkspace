import { useState, useRef } from "react";

import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const ContactContainer = () => {
  const [inputvalue, setInputvalue] = useState([
    { name: "윤수빈", num: "010-1234-5678", mail: "abc@naver.com" },
  ]);

  const u_name = useRef();
  const u_num = useRef();
  const u_mail = useRef();

  const t_body = useRef();

  const add = () => {
    setInputvalue([
      {
        name: u_name.current.value,
        num: u_num.current.value,
        mail: u_mail.current.value,
      },
      ...inputvalue,
    ]);

    u_name.current.value = "";
    u_num.current.value = "";
    u_mail.current.value = "";
  };

  const remove = (index) => {
    setInputvalue(inputvalue.filter((_, idx) => idx !== index));
  };

  const save = (index) => {
    setInputvalue(
      inputvalue.map((value, idx) => {
        if (idx === index) {
          //tbody>tr>td>input
          const trValue = t_body.current.children[index];

          const tdValue1 = trValue.children[1];
          const tdValue2 = trValue.children[2];
          const tdValue3 = trValue.children[3];

          console.log(tdValue1);
          console.log(tdValue2);
          console.log(tdValue3);

          const td2Value1 = tdValue1.querySelector("input");
          const td2Value2 = tdValue2.querySelector("input");
          const td2Value3 = tdValue3.querySelector("input");

          console.log(td2Value1);
          console.log(td2Value2);
          console.log(td2Value3);

          value.name = td2Value1.value;
          value.num = td2Value2.value;
          value.mail = td2Value3.value;

          delete value.isEdit;
        }
        return value;
      })
    );
  };

  return (
    <>
      <ContactForm u_name={u_name} u_num={u_num} u_mail={u_mail} onAdd={add} />
      <ContactList
        inputvalue={inputvalue}
        t_body={t_body}
        onRemove={remove}
        onSave={save}
      />
    </>
  );
};
export default ContactContainer;
