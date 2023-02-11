import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import axios from "axios";
const SubmitLc = () => {
    const[src,setSrc]=useState("")
    const handleLc=()=>{
        axios.get("http://localhost:9109/i/").then((res) => {
          console.log(res);
          console.log("id matched");
          if(res.data.users[0].Img) {
            setSrc(res.data.users[0].Img);
          } else {
            setSrc('')
          }
        //   for (let index = 0; index < res.data.users.length; index++) {
        //     if (id == res.data.users[index].user._id) {
             
        //     }
        //   }
          
          // console.log(res.data.users[0].user._id);
    
          // console.log(res.data.users);
        });
    }
    useEffect(()=>{
       handleLc() 
    },[])
  return (
    <div>
    {
        src && (<img src={src}/>)
    }
    </div>
  )
}

export default SubmitLc
