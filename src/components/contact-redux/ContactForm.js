import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const u_name = useRef();
  const u_num = useRef();
  const u_mail = useRef();
  // store에 dispatch할 함수를 생성
  const dispatch = useDispatch();

  const add = () => {
    const id = new Date().getTime();
    const name = u_name.current.value;
    const num = u_num.current.value;
    const mail = u_mail.current.value;

    // dispatch(action객체)
    // action객체 = {type:"명령어", payload:메시지객체}
    dispatch({ type: "ADD_CONTACT", payload: { id, name, num, mail } });
    u_name.current.value = "";
    u_num.current.value = "";
    u_mail.current.value = "";
  };

  return (
    <div style={{ display: "flex" }}>
      <TextField
        variant="outlined"
        inputRef={u_name}
        label="name"
        size="small"
        style={{
          width: "90%",
          marginRight: "0.5rem",
        }}
      />
      <TextField
        variant="outlined"
        inputRef={u_num}
        label="num"
        size="small"
        style={{
          width: "90%",
          marginRight: "0.5rem",
        }}
      />
      <TextField
        variant="outlined"
        inputRef={u_mail}
        label="mail"
        size="small"
        style={{
          width: "90%",
          marginRight: "0.5rem",
        }}
      />
      <Button
        style={{ width: "10%" }}
        variant="contained"
        color="primary"
        onClick={add}
      >
        입력
      </Button>
    </div>
  );
};
export default ContactForm;
