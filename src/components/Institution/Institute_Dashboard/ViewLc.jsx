import React, { useEffect, useState } from 'react'
import axios from "axios";

const ViewLc = () => {
    const [users1,setUser]=useState([])
    const[Img,setImg]=useState("")
    
    // let loginId  = localStorage.getItem('login_id'); 
    // console.log(loginId);
    const getLCdata = async() =>{
        let result = await fetch("http://localhost:9109/leaveUser",{
            method:'get',
            headers:{
              'Content-Type':'application/json'
            }
          });
          const data = await result.json();
          const array=data.data
          console.log(array);
          setUser(array)
    }
    const getdata = async() =>{
        let result = await fetch("http://localhost:9109/getallusers",{
            method:'get',
            headers:{
              'Content-Type':'application/json'
            }
          });
          const data = await result.json();
          const array=data.data
          console.log(array);
        //   setUser(array)
    }
    useEffect(()=>{
        getdata();
        getLCdata()
    },[])
    const onFileChange = (e) => {
        setImg(e.target.files[0]);
        // console.log(e.target.files[0].name);
      };
    // const handleApprove=async()=>{
    //     //send link of pdf to user
    // }
      const handleApprove = async(e) => {

    e.preventDefault();
    const formData = new FormData();
    formData.append("Img", Img);
    formData.append("user","63e6898eb973c48e2029120c");
    axios
      .post("http://localhost:9109/i/user-p", formData, {})
      .then((res) => {
        console.log(res);
      });
      if(formData.Img){
        alert("LC Approved")
      }
  };
  return (
    <div>
       <table border="2" className='m-5 table-bordered'>
       <tr>
          <td className='p-5'>FirstName</td>
          <td className='p-5'>LastName</td>
          <td className='p-5'>Email</td>  
          <td className='p-5'>Current Institute</td>
          <td className="p-5">Phone Number</td>
          <td className="p-5">Reason of Leaving</td>
          <td className="p-5">Approved</td>
          <td className='p-5'>Rejected</td>
      </tr>
        {/* {
          users1.map((item,index)=>(
            <div>
              {item.firstName}
            </div>
          ))
        } */}
        {
          users1.map((item, index)=>(
           <tr key={index}>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email} </td>
          <td>{item.currentInstitute}</td>
          <td>{item.mobileNo}</td>
          <td>{item.reasonLeaving} </td>
          <td><form onSubmit={handleApprove}>
      <input type="file" onChange={onFileChange}/>
      <button className='btn btn-success'>Approve</button>
      </form></td>
      <td><button className='btn btn-danger'>Reject</button></td>
          {/* <td>{userType}</td> */}
          </tr>
          ))
        }
      </table>
      
    </div>
  )
}

export default ViewLc
