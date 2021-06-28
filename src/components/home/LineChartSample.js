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
  return (
    <ResponsiveContainer width="100%" height="80%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Seoul" stroke="#8884d8" />
        <Line type="monotone" dataKey="Incheon" stroke="#F08080" />
        <Line type="monotone" dataKey="Gyeonggi" stroke="#FF8C00	" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartSample;
