import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";

import { useState } from "react";

const ContactItem = ({
  inputvalue,
  t_body,
  onRemove,
  onEdit,
  onSave,
  onCancel,
}) => {
  const [isEdit, setisEdit] = useState(value.isEdit);

  return (
    <tbody ref={t_body}>
      {" "}
      {inputvalue.map((value, index) => (
        <tr key={index}>
          <td>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                onClick={() => {
                  onRemove(index);
                }}
              >
                DELETE
              </Button>
            </ButtonGroup>
          </td>

          <td>
            {!isEdit && <span>{value.name}</span>}
            {isEdit && <input type="text" defaultValue={value.name}></input>}
          </td>
          <td>
            {!isEdit && <span>{value.num}</span>}
            {isEdit && <input type="text" defaultValue={value.num}></input>}
          </td>
          <td>
            {!isEdit && <span>{value.mail}</span>}
            {isEdit && <input type="text" defaultValue={value.mail}></input>}
          </td>
          <td>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              {!isEdit && (
                <Button
                  onClick={() => {
                    onEdit(index);
                    setisEdit(true);
                  }}
                >
                  edit
                </Button>
              )}
              {isEdit && (
                <Button
                  onClick={() => {
                    onSave(index);
                    setisEdit(false);
                  }}
                >
                  save
                </Button>
              )}
              {isEdit && (
                <Button
                  onClick={() => {
                    onCancel(index);
                    setisEdit(false);
                  }}
                >
                  cancel
                </Button>
              )}
            </ButtonGroup>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ContactItem;
