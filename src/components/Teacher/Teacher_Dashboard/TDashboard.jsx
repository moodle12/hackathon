import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

const TDashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9109/upload").then(
        (res) =>{ 
          setData(res.data)
        })
      .catch((err) => console.log(err, "it has an error"));
  });
  return (
    <div>
      <h1>Teacher's Dashboard</h1>
      {data.map((singleData,index) => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(singleData.image.data.data))
        );
        return <img key={index} src={`data:image/png;base64,${base64String}`} width="500" alt='nothing to display'/>
      })}
    </div>
  )
}

export default TDashboard
