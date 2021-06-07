const initialState = [
  {
    id: 1,
    name: "홍길동",
    num: "010-1111-1111",
    mail: "abc@naver.com",
  },
  {
    id: 2,
    name: "강자바",
    num: "010-2222-2222",
    mail: "xyz@naver.com",
  },
];

const contact = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [{ ...action.payload }, ...state];
    case "REMOVE_CONTACT":
      return state.filter((contact) => contact.id != action.payload);
    case "SAVE_CONTACT":
      return state.map((contact) =>
        contact.id === action.payload.id ? { ...action.payload } : contact
      );
    default:
      return state;
  }
};

export default contact;
