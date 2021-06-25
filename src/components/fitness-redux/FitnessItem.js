import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { useState, useRef } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const FitnessItem = ({ fitness }) => {
  const [isEdit, setIsEdit] = useState(fitness.isEdit);
  const history = useHistory();
  const dispatch = useDispatch();
  const u_height = useRef();
  const u_weight = useRef();
  const u_smm = useRef();
  const u_fat = useRef();

  const remove = (id) => {
    dispatch({ type: "REMOVE_FITNESS", payload: id });
  };

  const save = (id) => {
    const height = u_height.current.value;
    const weight = u_weight.current.value;
    const smm = u_smm.current.value;
    const fat = u_fat.current.value;

    dispatch({
      type: "MODIFY_FITNESS",
      payload: { id, height, weight, smm, fat },
    });
  };

  return (
    <tr style={{ display: "table", width: "100%", tableLayout: "fixed" }}>
      <td>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            onClick={() => {
              remove(fitness.id);
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
              history.push(`/fitness/${fitness.id}`);
            }}
          >
            {fitness.height}
          </span>
        )}
        {isEdit && (
          <TextField
            type="text"
            inputRef={u_height}
            defaultValue={fitness.height}
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
              history.push(`/fitness/${fitness.id}`);
            }}
          >
            {fitness.weight}
          </span>
        )}
        {isEdit && (
          <TextField
            type="text"
            inputRef={u_weight}
            defaultValue={fitness.weight}
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
              history.push(`/fitness/${fitness.id}`);
            }}
          >
            {fitness.smm}
          </span>
        )}
        {isEdit && (
          <TextField
            type="text"
            inputRef={u_smm}
            defaultValue={fitness.smm}
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
              history.push(`/fitness/${fitness.id}`);
            }}
          >
            {fitness.fat}
          </span>
        )}
        {isEdit && (
          <TextField
            type="text"
            inputRef={u_fat}
            defaultValue={fitness.fat}
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
              save(fitness.id);
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
export default FitnessItem;
