import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import { Divider, Typography } from "@material-ui/core";

import { useEffect, useState } from "react";
import BarChartSample from "./BarChartSample";

import api from "../../api/opendata";

import FitnessForm from "./FitnessForm";
import FitnessList from "./FitnessList";

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
const numOfPeople = (source) => {
  if (source.length === 0) return [];

  let res18 = source.filter((it) => new RegExp("2018").test(it.testYm));
  let res19 = source.filter((it) => new RegExp("2019").test(it.testYm));
  let res20 = source.filter((it) => new RegExp("2020").test(it.testYm));

  console.log("---------인원수구하기----------");

  let res18gra0 = res18.filter((it) => new RegExp("참가증").test(it.certGbn));
  let res18gra1 = res18.filter((it) => new RegExp("1등급").test(it.certGbn));
  let res18gra2 = res18.filter((it) => new RegExp("2등급").test(it.certGbn));
  let res18gra3 = res18.filter((it) => new RegExp("3등급").test(it.certGbn));

  let res19gra0 = res19.filter((it) => new RegExp("참가증").test(it.certGbn));
  let res19gra1 = res19.filter((it) => new RegExp("1등급").test(it.certGbn));
  let res19gra2 = res19.filter((it) => new RegExp("2등급").test(it.certGbn));
  let res19gra3 = res19.filter((it) => new RegExp("3등급").test(it.certGbn));

  let res20gra0 = res20.filter((it) => new RegExp("참가증").test(it.certGbn));
  let res20gra1 = res20.filter((it) => new RegExp("1등급").test(it.certGbn));
  let res20gra2 = res20.filter((it) => new RegExp("2등급").test(it.certGbn));
  let res20gra3 = res20.filter((it) => new RegExp("3등급").test(it.certGbn));

  const numdata = [
    {
      year: 2018,
      lv1: res18gra1.length,
      lv2: res18gra2.length,
      lv3: res18gra3.length,
      lv4: res18gra0.length,
    },
    {
      year: 2019,
      lv1: res19gra1.length,
      lv2: res19gra2.length,
      lv3: res19gra3.length,
      lv4: res19gra0.length,
    },
    {
      year: 2020,
      lv1: res20gra1.length,
      lv2: res20gra2.length,
      lv3: res20gra3.length,
      lv4: res20gra0.length,
    },
  ];
  return numdata;
};

const Fitness = () => {
  const classes = useStyles();
  const [source, setSource] = useState([]);

  // 백엔드에서 받아온 데이터를 세팅함

  useEffect(() => {
    const getData = async () => {
      const healthratio = await api.fetchHealthdata();
      setSource(healthratio.data);
      //console.log(healthratio);
    };
    getData();
  }, []);

  return (
    <>
      <Grid container spacing={2} className={classes.container}>
        <Hidden mdDown>
          <Grid item lg={1} />
        </Hidden>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper className={classes.paper} style={{ height: "85vh" }}>
            <Typography variant="h3">신체등급측정</Typography>
            <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }} />
            <FitnessForm />
            <table>
              <thead
                style={{
                  display: "table",
                  width: "100%",
                  tableLayout: "fixed",
                }}
              >
                <tr
                  style={{
                    display: "table",
                    width: "100%",
                    tableLayout: "fixed",
                  }}
                >
                  <th>삭제</th>
                  <th>신장</th>
                  <th>체중</th>
                  <th>골격근량</th>
                  <th>체지방량</th>
                  <th>작업</th>
                </tr>
              </thead>

              <FitnessList />
            </table>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5} lg={4}>
          <Paper className={classes.paper} style={{ height: "45vh" }}>
            <h3> 연도별 등급추세 </h3>
            <BarChartSample data={numOfPeople(source)} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default Fitness;
