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

const pm10Color = (val) => {
  let color = "#329fff";

  if (val > 30 && val <= 80) {
    color = "#00c73c";
  } else if (val > 80 && val <= 150) {
    color = "#fd9b5a";
  } else if (val > 150) {
    color = "#ff5959";
  }

  return color;
};

const pm25Color = (val) => {
  let color = "#329fff";

  if (val > 15 && val <= 35) {
    color = "#00c73c";
  } else if (val > 35 && val <= 75) {
    color = "#fd9b5a";
  } else if (val > 75) {
    color = "#ff5959";
  }

  return color;
};

const BarChartSample = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        {/* 격자무늬 */}
        <CartesianGrid strokeDasharray="3 3" />
        {/* dataKey="name" 데이터 객체의 name 속성을 x축에 표시 */}
        <XAxis dataKey="sido" fontSize={"12px"} />
        <YAxis />
        {/* Y축 값 범위 표시 */}
        <Tooltip />
        {/* 마우스 오버시 나오는 표현 */}
        <Legend /> {/* 범례, 데이터 계열 표시 */}
        {/* 데이터 값을 바2개로 표시함 */}
        <Bar dataKey="pm10">
          {/* 데이터 조건에 따라서 막대의 색상을 바꿈 */}
          {data.map((entry, index) => (
            <Cell key={`pm10-${index}`} fill={pm10Color(entry.pm10)}></Cell>
          ))}
        </Bar>
        {/* fill: 채우는 색상 16진수 */}
        <Bar dataKey="pm25">
          {data.map((entry, index) => (
            <Cell key={`pm25-${index}`} fill={pm10Color(entry.pm25)}></Cell>
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartSample;
