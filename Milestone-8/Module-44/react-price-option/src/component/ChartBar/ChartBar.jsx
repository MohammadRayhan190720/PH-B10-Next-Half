import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from "recharts";

const ChartBar = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2800 },
    { name: "Page B", uv: 300, pv: 2000, amt: 2300 },
    { name: "Page C", uv: 200, pv: 1500, amt: 2100 },
    { name: "Page D", uv: 100, pv: 1800, amt: 2800 },
    { name: "Page E", uv: 500, pv: 2200, amt: 2400 },
  ];
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
};

export default ChartBar;
