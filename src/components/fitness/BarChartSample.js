import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const colorPatition = (val) => {
  let color = "#329fff";

  if (val > 0 && val <= 15) {
    color = "#B22222	";
  } else if (val > 15 && val <= 25) {
    color = "#CD5C5C	";
  } else if (val > 25 && val <= 50) {
    color = "	#FFA07A	";
  } else if (val > 60) {
    color = "#FFDAB9	";
  }
  return color;
};

const BarChartSample = ({ data }) => {
  //console.log("--barchart data--");
  //console.log(data);

  return (
    <ResponsiveContainer width="100%" height="70%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis dataKey="name" /> 데이터 객체의 name속성을 x축에 */}
        <XAxis dataKey="year" fontSize={"12px"} />
        <YAxis /> {/* Y축의 값 범위 표시 */}
        <Tooltip /> {/* 마우스 오버했을 때 나오는 영역 */}
        <Legend
          payload={["2018", "2019", "2020"].map((item, index) => ({
            id: item,
            type: "square",
            value: item,
            color:
              index === 0 ? "#8884d8" : index === 1 ? "#82ca9d" : "#FFB6C1",
          }))}
        />
        {/* 범례, 데이터의 계열을 표시 */}
        <Bar dataKey="lv4">
          {/* 데이터 조건에 따라서 막대의 색상을 바꿈 */}
          {data.map((entry, index) => (
            <Cell key={`lv4-${index}`} fill={colorPatition(entry.lv4)}></Cell>
          ))}
        </Bar>
        {/* fill="채우는색상16진수" */}
        <Bar dataKey="lv3">
          {data.map((entry, index) => (
            <Cell key={`lv3-${index}`} fill={colorPatition(entry.lv3)}></Cell>
          ))}
        </Bar>
        <Bar dataKey="lv2">
          {data.map((entry, index) => (
            <Cell key={`lv2-${index}`} fill={colorPatition(entry.lv2)}></Cell>
          ))}
        </Bar>
        <Bar dataKey="lv1">
          {data.map((entry, index) => (
            <Cell key={`lv1-${index}`} fill={colorPatition(entry.lv1)}></Cell>
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartSample;
