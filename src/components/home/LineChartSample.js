import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const LineChartSample = ({ data }) => {
  // console.log("--linechart data--");
  // console.log(data);

  return (
    <ResponsiveContainer width="100%" height="70%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Seoul" stroke="#8884d8" />
        <Line type="monotone" dataKey="Busan" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Jeju" stroke="#FFB6C1" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartSample;
