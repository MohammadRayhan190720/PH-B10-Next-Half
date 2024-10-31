import { useState,useEffect } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";



import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";



const Phones = () => {

  const [phones,setPhones] = useState([]);

  const [loading,setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then(data => {
      const allPhones = data.data.data;
      const phonesData = allPhones.map((phone)=>{
        const obj = {
          name: phone.phone_name,
          price: parseInt(phone.slug.split("-")[1]),
        };
        return obj;
      })
      console.log(phonesData);
      setPhones(phonesData)
      setLoading(false);
      
    })
    
  },[])


  return (
    <div>
      <p>phones: {phones.length}</p>

      {loading && (
        <div className="flex justify-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
      <BarChart width={1000} height={100} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name" />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default Phones;