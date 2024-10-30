import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Chart = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2800 },
    { name: "Page B", uv: 300, pv: 2000, amt: 2300 },
    { name: "Page C", uv: 200, pv: 1500, amt: 2100 },
    { name: "Page D", uv: 100, pv: 1800, amt: 2800 },
    { name: "Page E", uv: 500, pv: 2200, amt: 2400 },
  ];

  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
};

export default Chart;
