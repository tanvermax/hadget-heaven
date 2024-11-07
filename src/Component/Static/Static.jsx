import {

  BarChart,

  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { Helmet } from "react-helmet-async";

const Static = () => {
  const data = [
    { product: "iphone", sales_rate: 1080 },
    { product: "mobile", sales_rate: 1450 },
    { product: "watch", sales_rate: 850 },
    { product: "laptop", sales_rate: 2500 },
    { product: "screen paper", sales_rate: 1150 },
    { product: "smart watch", sales_rate: 1900 },
    { product: "accessoris", sales_rate: 1500 },
    { product: "diamond", sales_rate: 1300 },
    { product: "gold", sales_rate: 1250 },
    { product: "charger", sales_rate: 1650 },
    { product: "headphone", sales_rate: 1950 },
    { product: "airbuds", sales_rate: 1100 },
    { product: "macbook", sales_rate: 1000 },
    { product: "apple watch", sales_rate: 1200 },
    { product: "other", sales_rate: 1350 },
  ];
  return (
    <>
  
      <Helmet>
        <title>cart </title>
        </Helmet>
      <div className=" py-5 border-2 my-10 mx-32">
        <BarChart width={1600} height={550} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales_rate" fill="#8884d8" />
          <Bar dataKey="product" fill="#82ca9d" />
        </BarChart>
      </div>
      
     
    </>
  );
};

export default Static;
