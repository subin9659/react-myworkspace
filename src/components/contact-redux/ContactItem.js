import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { useState, useRef } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const ContactItem = ({ contact }) => {
  const [isEdit, setIsEdit] = useState(contact.isEdit);
  const history = useHistory();
  const dispatch = useDispatch();
  const u_name = useRef();
  const u_num = useRef();
  const u_mail = useRef();

  const remove = (id) => {
    dispatch({ type: "REMOVE_CONTACT", payload: id });
  };

  const save = (id) => {
    const name = u_name.current.value;
    const num = u_num.current.value;
    const mail = u_mail.current.value;
    dispatch({ type: "SAVE_CONTACT", payload: { id, name, num, mail } });
  };

  return (
    <tr>
      <td>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            onClick={() => {
              remove(contact.id);
            }}
          >
            DELETE
          </Button>
        </ButtonGroup>
      </td>

      <td>
        {!isEdit && (
          <span
            style={{ cursor: "pointer" }}
            // history.push('경로'), history 스택(stack)에 경로 추가
            onClick={() => {
              history.push(`/contact/${contact.id}`);
            }}
          >
            {contact.name}
          </span>
        )}
        {isEdit && (
          <TextField
            type="text"
            inputRef={u_name}
            defaultValue={contact.name}
            style={{ width: "100%" }}
          ></TextField>
        )}
      </td>

      <td>
        {!isEdit && (
          <span
            style={{ cursor: "pointer" }}
            // history.push('경로'), history 스택(stack)에 경로 추가
            onClick={() => {
              history.push(`/contact/${contact.id}`);
            }}
          >
            {contact.num}
          </span>
        )}
        {isEdit && (
          <TextField
            type="text"
            inputRef={u_num}
            defaultValue={contact.num}
            style={{ width: "100%" }}
          ></TextField>
        )}
      </td>

      <td>
        {!isEdit && (
          <span
            style={{ cursor: "pointer" }}
            // history.push('경로'), history 스택(stack)에 경로 추가
            onClick={() => {
              history.push(`/contact/${contact.id}`);
            }}
          >
            {contact.mail}
          </span>
        )}
        {isEdit && (
          <TextField
            type="text"
            inputRef={u_mail}
            defaultValue={contact.mail}
            style={{ width: "100%" }}
          ></TextField>
        )}
      </td>

      <td>
        {!isEdit && (
          <Button
            onClick={() => {
              setIsEdit(true);
            }}
          >
            edit
          </Button>
        )}

        {isEdit && (
          <Button
            onClick={() => {
              save(contact.id);
              setIsEdit(false);
            }}
          >
            save
          </Button>
        )}

        {isEdit && (
          <Button
            onClick={() => {
              setIsEdit(false);
            }}
          >
            cancel
          </Button>
        )}
      </td>
    </tr>
  );
};
export default ContactItem;
