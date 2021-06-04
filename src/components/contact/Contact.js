import ContactContainer from "./ContactContainer";

import { makeStyles } from "@material-ui/core/styles";

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
  const classes = useStyles();

  return (
    <>
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
        <tbody></tbody>
      </table>
      <ContactContainer />
    </>
  );
};
export default Contact;
