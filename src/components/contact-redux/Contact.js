import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import { Divider, Typography } from "@material-ui/core";

import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

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
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3} className={classes.container}>
        <Hidden xsDown>
          <Grid item sm={1} md={2} lg={3} />
        </Hidden>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper className={classes.paper}>
            <Typography variant="h3">Contact</Typography>
            <Divider style={{ marginTop: "1rem", marginBottom: "2rem" }} />
            <ContactForm />
            <table>
              <thead>
                <tr>
                  <th style={{ width: "70px" }}></th>
                  <th style={{ width: "200px" }}>이름</th>
                  <th style={{ width: "200px" }}>전화번호</th>
                  <th style={{ width: "200px" }}>이메일</th>
                  <th style={{ width: "50px" }}></th>
                </tr>
              </thead>
              <ContactList />
            </table>
          </Paper>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={1} md={2} lg={3} />
        </Hidden>
      </Grid>
    </>
  );
};
export default Contact;
