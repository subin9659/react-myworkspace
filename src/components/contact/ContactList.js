import ContactItem from "./ContactItem";

const ContactList = ({
  inputvalue,
  t_body,
  onRemove,
  onEdit,
  onSave,
  onCancel,
}) => {
  return (
    <div>
      <ContactList
        inputvalue={inputvalue}
        t_body={t_body}
        onRemove={remove}
        onEdit={edit}
        onSave={save}
        onCancel={cancel}
      />
    </div>
  );
};

export default ContactItem;
