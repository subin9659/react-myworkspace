import { useParams } from "react-router-dom";

const TodoDetail = () => {
  // const {매개변수명1, 매개변수명2,...} = useParams();
  // /todo/:id -> /todo/1
  // id = 1

  const { id } = useParams();

  return <h1>To-Do Detail</h1>;
};

export default TodoDetail;
