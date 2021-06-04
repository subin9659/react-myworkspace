import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";

const ContactForm = ({ u_name, u_num, u_mail, onAdd }) => {
  return (
    <div>
      <input type="text" placeholder="name" ref={u_name} />
      <input type="text" placeholder="num" ref={u_num} />
      <input type="text" placeholder="mail" ref={u_mail} />

      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={onAdd}>입력</Button>
      </ButtonGroup>
    </div>
  );
};
export default ContactForm;
