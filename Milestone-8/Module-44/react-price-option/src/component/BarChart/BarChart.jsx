import { BarChart as BChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const BarChart = () => {
    const data = [
      { name: "Page A", uv: 400, pv: 2400, amt: 2800 },
      { name: "Page B", uv: 300, pv: 2000, amt: 2300 },
      { name: "Page C", uv: 200, pv: 1500, amt: 2100 },
      { name: "Page D", uv: 100, pv: 1800, amt: 2800 },
      { name: "Page E", uv: 500, pv: 2200, amt: 2400 },
    ];
  return(
  <BChart width={600} height={300} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
  </BChart>
);

};

export default BarChart;
