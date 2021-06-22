import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";

import { Divider, Typography } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { useEffect, useState } from "react";
import BarChartSample from "./BarChartSample";

import api from "../../api/opendata";
import BMI from "./BMI";

const useStyles = makeStyles((theme) => ({
  // 내부 페이퍼에 스타일을 지정
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  // 화면이 1280px 이상이면 그리드 컨테이너 위쪽에 마진을 줌.
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
      const result = await api.fetchFitness();
      setSource(result.data);
      console.log(result);
    };
    getData();
  }, []);

  return (
    // Grid 컨테이너 선언
    // spacing: Grid Item(내부요소) 들의 띄어쓰기
    <Grid container spacing={3} className={classes.container}>
      {/* Grid 아이템 선언 lg사이즈 이상일 때 2칸 */}
      {/* item 공간 합이 12개가되면 다음행으로 넘어감 */}
      {/* 1행 */}
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Grid item xs={12} sm={7} lg={6}>
        <Paper className={classes.paper} style={{ height: "85vh" }}>
          <h3> 신체등급 측정 </h3>
          <Divider style={{ marginTop: "1rem", marginBottom: "2rem" }} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={5} lg={4}>
        <Paper className={classes.paper} style={{ height: "40vh" }}>
          <h3> 연도별 등급추세 </h3>
          <BarChartSample data={numOfPeople(source)} />
        </Paper>
        <Paper className={classes.paper} style={{ height: "40vh" }}>
          <h3> BMI 측정하기 </h3>
          <BMI />
        </Paper>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
    </Grid>
  );
};
export default Fitness;
