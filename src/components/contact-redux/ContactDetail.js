import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Box, Button, Divider, Typography } from "@material-ui/core";

import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
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

const ContactDetail = () => {
  const classes = useStyles();
  const history = useHistory();

  const { id } = useParams();
  const contact = useSelector(
    (state) => state.contact.filter((contact) => contact.id === parseInt(id))[0]
  );
  console.log(contact);

  return (
    <>
      <Grid container spacing={3} className={classes.container}>
        <Hidden xsDown>
          <Grid item sm={1} md={2} lg={3} />
        </Hidden>
        <Grid item xs={13} sm={11} md={9} lg={7}>
          <Paper className={classes.paper}>
            <Typography variant="h3">Contact</Typography>
            <Divider style={{ marginTop: "2rem", marginBottom: "2rem" }} />
            <Box style={{ padding: "1rem" }}>{contact.name}</Box>
            <Box style={{ padding: "1rem" }}>{contact.num}</Box>
            <Box style={{ padding: "1rem" }}>{contact.mail}</Box>
            <Box style={{ display: "flex", direction: "rtl" }}>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={() => {
                  history.push("/contact");
                }}
                // onClick={() => {
                //   history.replace("/todo");
                // }}
                // onClick={() => {
                //   history.goBack(-1);
                // }}
              >
                목록
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={2} md={3} lg={4} />
        </Hidden>
      </Grid>
    </>
  );
};

export default ContactDetail;
