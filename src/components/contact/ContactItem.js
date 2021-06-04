import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { useState } from "react";

const ContactItem = ({ index, value, onRemove, onSave }) => {
  const [isEdit, setIsEdit] = useState(value.isEdit);

  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button
        onClick={() => {
          onRemove(index);
        }}
      >
        DELETE
      </Button>

      {!isEdit && <span>{value.name}</span>}
      {isEdit && <input type="text" defaultValue={value.name}></input>}

      {isEdit && <span>{value.num}</span>}
      {isEdit && <input type="text" defaultValue={value.num}></input>}

      {isEdit && <span>{value.mail}</span>}
      {isEdit && <input type="text" defaultValue={value.mail}></input>}
      {isEdit && (
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
            onSave(index);
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
    </ButtonGroup>
  );
};
export default ContactItem;
