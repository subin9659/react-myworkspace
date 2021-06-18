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

const Fitness = () => {
  const classes = useStyles();
  const [source, setSource] = useState([]);
  const [fitnessValue, setFitnessValue] = useState([]);
  const [val, setVal] = useState([]);

  // 백엔드에서 받아온 데이터를 세팅함

  useEffect(() => {
    const getData = async () => {
      const result = await api.fetchFitness();
      setSource(result.data);

      if (source.length === 0) return [];
      return source.map((item) => {
        let fitnessValue = {
          상장구분: item.certGbn,
          측정기록: item.testYm,
        };
        for (let name in itemName) {
          let val = item[name];
          // fitnessValue[itemName[name]] = parseInt(val);
          // -> 1,2,3, NaN값이 나왔음

          // 2. if (isNaN(val)) {
          //   fitnessValue[itemName[name]] = 0;
          // } else {
          //   fitnessValue[itemName[name]] = parseInt(val);
          // }
          // -> 모두 0값이 나왔음

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
        console.log(fitnessValue); // FitnessTableData최종본
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
      {/* <Grid item xs={12} sm={5} lg={4}>
        <Paper className={classes.paper} style={{ height: "25vh" }}>
          <h3>
            <Select
              value={sido}
              onChange={(event) => {
                setSido(event.target.value);
              }}
            >
              {Object.keys(sidoKorName).map((sido) => (
                <MenuItem key={`menu-${sido}`} value={sido}>
                  {sidoKorName[sido]}
                </MenuItem>
              ))}
            </Select>
            {"\u00A0"} 미세먼지 현황
          </h3>
          <LineChartSample data={transformLocationData(source, sido)} />
        </Paper>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Grid item xs={12} sm={12} lg={10}>
        <Paper className={classes.paper}>
          <h3>시도별 미세먼지 이력</h3>
          <ResponsiveTable data={transformSidoTableData(source.slice(0, 8))} />
        </Paper>
      </Grid> */}
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
    </Grid>
  );
};
export default Fitness;
