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

const FitnessDetail = () => {
  const classes = useStyles();
  const history = useHistory();

  const { id } = useParams();
  const fitness = useSelector(
    (state) => state.fitness.filter((fitness) => fitness.id === parseInt(id))[0]
  );
  console.log(fitness);

  return (
    <>
      <Grid container spacing={3} className={classes.container}>
        <Hidden xsDown>
          <Grid item sm={1} md={2} lg={3} />
        </Hidden>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper className={classes.paper}>
            <Typography variant="h3">Fitness</Typography>
            <Divider style={{ marginTop: "1rem", marginBottom: "2rem" }} />
            <Box style={{ padding: "1rem" }}>{fitness.height}</Box>
            <Box style={{ padding: "1rem" }}>{fitness.weight}</Box>
            <Box style={{ display: "flex", direction: "rtl" }}>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={() => {
                  history.push("/fitness");
                }}
              >
                목록
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={1} md={2} lg={3} />
        </Hidden>
      </Grid>
    </>
  );
};

export default FitnessDetail;
