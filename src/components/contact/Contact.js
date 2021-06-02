import { useState, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  formRoot: {
    display: "flex",
    height: theme.typography.fontSize * 2,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  container: {
    [theme.breakpoints.up("lg")]: {
      marginTop: "80px",
    },
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
      },
    },

    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  },
}));

const Contact = () => {
  const [inputvalue, setInputvalue] = useState([
    { name: "윤수빈", num: "010-1234-5678", mail: "abc@naver.com" },
  ]);

  const u_name = useRef();
  const u_num = useRef();
  const u_mail = useRef();

  const t_body = useRef();

  const add = () => {
    setInputvalue([
      {
        name: u_name.current.value,
        num: u_num.current.value,
        mail: u_mail.current.value,
      },
      ...inputvalue,
    ]);

    u_name.current.value = "";
    u_num.current.value = "";
    u_mail.current.value = "";
  };

  const remove = (index) => {
    setInputvalue(inputvalue.filter((_, idx) => idx !== index));
  };

  const edit = (index) => {
    setInputvalue(
      inputvalue.map((value, idx) => {
        if (idx === index) {
          value.isEdit = true;
          //console.log(value);
        }
        return value;
      })
    );
  };

  const cancel = (index) => {
    setInputvalue(
      inputvalue.map((value, idx) => {
        if (idx === index) {
          delete value.isEdit;
        }
        return value;
      })
    );
  };

  const save = (index) => {
    setInputvalue(
      inputvalue.map((value, idx) => {
        if (idx === index) {
          //tbody>tr>td>input
          const trValue = t_body.current.children[index];

          const tdValue1 = trValue.children[1];
          const tdValue2 = trValue.children[2];
          const tdValue3 = trValue.children[3];

          const td2Value1 = tdValue1.querySelector("input");
          const td2Value2 = tdValue2.querySelector("input");
          const td2Value3 = tdValue3.querySelector("input");

          value.name = td2Value1.value;
          value.num = td2Value2.value;
          value.mail = td2Value3.value;

          delete value.isEdit;
        }
        return value;
      })
    );
  };

  const classes = useStyles();

  return (
    <>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Name" inputRef={u_name} />
          <TextField label="Number" inputRef={u_num} />
          <TextField label="Mail" inputRef={u_mail} />

          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button onClick={add}>입력</Button>
          </ButtonGroup>
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>이름</th>
            <th>전화번호</th>
            <th>이메일</th>
            <th></th>
          </tr>
        </thead>
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
                      remove(index);
                    }}
                  >
                    DELETE
                  </Button>
                </ButtonGroup>
              </td>

              <td>
                {!value.isEdit && <span>{value.name}</span>}
                {value.isEdit && (
                  <input type="text" defaultValue={value.name}></input>
                )}
              </td>
              <td>
                {!value.isEdit && <span>{value.num}</span>}
                {value.isEdit && (
                  <input type="text" defaultValue={value.num}></input>
                )}
              </td>
              <td>
                {!value.isEdit && <span>{value.mail}</span>}
                {value.isEdit && (
                  <input type="text" defaultValue={value.mail}></input>
                )}
              </td>
              <td>
                <ButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                >
                  {!value.isEdit && (
                    <Button
                      onClick={() => {
                        edit(index);
                      }}
                    >
                      edit
                    </Button>
                  )}
                  {value.isEdit && (
                    <Button
                      onClick={() => {
                        save(index);
                      }}
                    >
                      save
                    </Button>
                  )}
                  {value.isEdit && (
                    <Button
                      onClick={() => {
                        cancel(index);
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
      </table>
    </>
  );
};
export default Contact;
