import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import { memo } from "react";

const ContactForm = ({ inputName, inputNum, inputMail, onAdd }) => {
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField label="Name" inputRef={inputName} />
        <TextField label="Number" inputRef={inputNum} />
        <TextField label="Mail" inputRef={inputMail} />

        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={onAdd}>입력</Button>
        </ButtonGroup>
      </form>
    </div>
  );
};
export default memo(ContactForm);
