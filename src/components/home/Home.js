import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";

import BarChartSample from "./BarChartSample";
import LineChartSample from "./LineChartSample";
import ResponsiveTable from "./ResponsiveTableSample";

import sidoKorName from "./data/sidoKorName";
import hour from "./data/hour";

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

const transformSidoData = (source) => {
  if (source.length === 0) return [];

  // 가장 최근 데이터 (PM10, PM2.5)
  const sourceData = source.slice(0, 2);
  //console.log(source);
  const transData = [];
  for (let name in sidoKorName) {
    const item = {
      sido: sidoKorName[name],
      pm10: parseInt(sourceData[0][name]),
      pm25: parseInt(sourceData[1][name]),
    };
    transData.push(item);
  }
  //console.log(transData);
  return transData;
};

const UV = (uv) => {
  if (uv.length === 0) return [];
  console.log(uv);

  let seoul = uv.filter((it) => new RegExp("1100000000").test(it.areaNo));
  let busan = uv.filter((it) => new RegExp("2600000000").test(it.areaNo));
  let incheon = uv.filter((it) => new RegExp("2800000000").test(it.areaNo));
  let gyeonggi = uv.filter((it) => new RegExp("4100000000").test(it.areaNo));
  let gangwon = uv.filter((it) => new RegExp("4200000000").test(it.areaNo));
  let chungcheong = uv.filter((it) => new RegExp("4300000000").test(it.areaNo));
  let jeolla = uv.filter((it) => new RegExp("4500000000").test(it.areaNo));
  let gyeongsang = uv.filter((it) => new RegExp("4700000000").test(it.areaNo));
  let jeju = uv.filter((it) => new RegExp("5000000000").test(it.areaNo));

  let seoulTodayUV = seoul[0].today;
  let busanTodayUV = busan[0].today;
  let gangwonTodayUV = gangwon[0].today;
  let jejuTodayUV = jeju[0].today;

  let seoulTomorrowUV = seoul[0].tomorrow;
  let busanTomorrowUV = busan[0].tomorrow;
  let gangwonTomorrowUV = gangwon[0].tomorrow;
  let jejuTomorrowUV = jeju[0].tomorrow;

  let seoulAfterTomorrowUV = seoul[0].theDayAfterTomorrow;
  let busanAfterTomorrowUV = busan[0].theDayAfterTomorrow;
  let gangwonAfterTomorrowUV = gangwon[0].theDayAfterTomorrow;
  let jejuAfterTomorrowUV = jeju[0].theDayAfterTomorrow;

  let uvdata = [
    {
      name: "오늘",
      Seoul: seoulTodayUV,
      Busan: busanTodayUV,
      Jeju: jejuTodayUV,
    },
    {
      name: "내일",
      Seoul: seoulTomorrowUV,
      Busan: busanTomorrowUV,
      Jeju: jejuTomorrowUV,
    },
    {
      name: "모레",
      Seoul: seoulAfterTomorrowUV,
      Busan: busanAfterTomorrowUV,
      Jeju: jejuAfterTomorrowUV,
    },
  ];
  return uvdata;
};

const transAreaName = (summer) => {
  if (summer.length === 0) return [];
  summer.forEach((e) => {
    if (e.areaNo == "1100000000") {
      e.areaNo = "서울";
    } else if (e.areaNo == "2600000000") {
      e.areaNo = "부산";
    } else if (e.areaNo == "2800000000") {
      e.areaNo = "인천";
    } else if (e.areaNo == "4100000000") {
      e.areaNo = "경기";
    } else if (e.areaNo == "4200000000") {
      e.areaNo = "강원";
    } else if (e.areaNo == "4300000000") {
      e.areaNo = "충북";
    } else if (e.areaNo == "4500000000") {
      e.areaNo = "전북";
    } else if (e.areaNo == "4700000000") {
      e.areaNo = "경북";
    } else if (e.areaNo == "5000000000") {
      e.areaNo = "제주";
    }
  });
  return summer;
};

const summerTemp = (summer) => {
  transAreaName(summer);
  return summer.map((item) => {
    let summerTable = { 지역: item.areaNo };
    for (let num in hour) {
      let val = item[num];
      summerTable[hour[num]] = parseInt(val);
    }
    console.log(summerTable);
    return summerTable;
  });
};

const Home = () => {
  const classes = useStyles();

  //const [sido, setSido] = useState("seoul");
  const [source, setSource] = useState([]);
  const [uv, setUV] = useState([]);
  const [summer, setSummer] = useState([]);

  // 백엔드에서 받아온 데이터를 세팅함

  // useEffect(()=>{}, [])
  // [변수명] -> 변수의 값이 바뀔 때 마다 함수가 호출됨
  // [] -> 컴포넌트가 처음 마운트될 때만 호출됨
  useEffect(() => {
    // async-await, ES8, ES2017
    const getData = async () => {
      // await 키워드: promise 처리가 완료될 때까지 대기
      // async 함수 안에서만 쓸 수가 있음.
      // -> 네트워크 호출이 끝날때까지 대기하고 결과값을 반환함
      const result = await api.fetchDustHourly();
      //console.log(result.data);
      setSource(result.data);
    };
    getData();
    // Promise chain, ES6, ES2015
    // api.fetchDustHourly().then(result => {
    //   setSource(result.data);
    // });
  }, []);

  useEffect(() => {
    // async-await, ES8, ES2017
    const getUV = async () => {
      // await 키워드: promise 처리가 완료될 때까지 대기
      // async 함수 안에서만 쓸 수가 있음.
      // -> 네트워크 호출이 끝날때까지 대기하고 결과값을 반환함
      const resultWeather = await api.fetchWeatherUV();
      //console.log(resultWeather.data);

      setUV(resultWeather.data);
    };
    getUV();
  }, []);

  useEffect(() => {
    // async-await, ES8, ES2017
    let getSummer = async () => {
      // await 키워드: promise 처리가 완료될 때까지 대기
      // async 함수 안에서만 쓸 수가 있음.
      // -> 네트워크 호출이 끝날때까지 대기하고 결과값을 반환함
      let resultSummer = await api.fetchSummer();

      //console.log(resultSummer.data);
      setSummer(resultSummer.data);
    };
    getSummer();
  }, []);

  summerTemp(summer);

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
        <Paper className={classes.paper} style={{ height: "25vh" }}>
          <h3>🌎🌎미세먼지 현재 현황🌎🌎</h3>
          <BarChartSample data={transformSidoData(source)} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={5} lg={4}>
        <Paper className={classes.paper} style={{ height: "25vh" }}>
          <h3>🌞🌞자외선 지수🌞🌞</h3>
          <LineChartSample data={UV(uv)} />
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
          <h3>🥵🥵오늘의 체감온도🥵🥵</h3>
          <ResponsiveTable data={summerTemp(summer)} />
        </Paper>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
    </Grid>
  );
};
export default Home;
