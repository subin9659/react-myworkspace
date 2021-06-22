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

const BMI = () => {
  const [inputvalue, setInputvalue] = useState([]);

  const u_height = useRef();
  const u_weight = useRef();

  const calculation = () => {
    setInputvalue([
      {
        height: u_height.current.value,
        weight: u_weight.current.value,
      },
      ...inputvalue,
    ]);

    const us_height = u_height.current.value;
    const us_weight = u_weight.current.value;

    const bmi = us_weight / (us_height * 0.01 * (us_height * 0.01));

    console.log(bmi);

    if (bmi <= 18.5) {
      console.log("저체중입니다.");
    } else if (18.5 < bmi && bmi <= 23) {
      console.log("정상입니다.");
    } else if (23 < bmi && bmi <= 25) {
      console.log("과체중입니다.");
    } else if (bmi > 25) {
      console.log("비만입니다.");
    } else {
      console.log("숫자만 입력해주세요.");
    }
  };

  const classes = useStyles();

  return (
    <>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="height" inputRef={u_height} />
          <TextField label="weight" inputRef={u_weight} />

          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button onClick={calculation}>계산</Button>
          </ButtonGroup>
        </form>
      </div>
      <div></div>
    </>
  );
};
export default BMI;
