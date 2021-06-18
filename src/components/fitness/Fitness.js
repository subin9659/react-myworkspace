import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import source from "./data/source";
import itemName from "./data/itemName";
import bardata from "./data/bardata";
import mergeMonth from "./data/mergeMonth";

import { useEffect, useState } from "react";

import api from "../../api/opendata";

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

const grade = (fitnessValue) => {
  //console.log(fitnessValue);
  let fitnessValueKeys = Object.keys(fitnessValue);
  let fitnessValueValues = Object.values(fitnessValue);

  //console.log(fitnessValueKeys); // 체중, 신장
  //console.log(fitnessValueValues); //값

  /// console.log(fitnessValueValues[0]);
};

const Fitness = () => {
  const classes = useStyles();
  const [fitnessValue, setFitnessValue] = useState([]);

  const [source, setSource] = useState([]);

  // 백엔드에서 받아온 데이터를 세팅함

  useEffect(() => {
    const getData = async () => {
      const result = await api.fetchFitness();
      setSource(result.data);

      if (source.length === 0) return [];
      return source.map((item) => {
        const fitnessValue = {
          상장구분: item.certGbn,
        };
        for (let name in itemName) {
          let val = item[name];
          if (!!val) {
            if (!isNaN(val)) {
              fitnessValue[itemName[name]] = val * 1;
            } else {
              if (val == "0") {
                fitnessValue[itemName[name]] = 0;
              }
            }
          }
        }
        setFitnessValue(fitnessValue);
        //console.log(fitnessValue);
        //console.log(result);
        grade(fitnessValue);
      });
    };
    getData();
  }, []);

  return (
    // Grid 컨테이너 선언
    // spacing: Grid Item(내부요소) 들의 띄어쓰기
    <Grid container spacing={3} className={classes.container}>
      {/* Grid 아이템 선언 lg사이즈 이상일 때 2칸 */}
      {/* item 공간 핪이 12개가되면 다음행으로 넘어감 */}
      {/* 1행 */}
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Grid item xs={12} sm={7} lg={6}>
        <Paper className={classes.paper} style={{ height: "65vh" }}>
          <h3> 신체등급 측정 </h3>
        </Paper>
      </Grid>

      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
    </Grid>
  );
};
export default Fitness;
