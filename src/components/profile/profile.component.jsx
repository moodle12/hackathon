import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const [users1,setUser]=useState([])
    const {id}=useParams()
    console.log(id)
    const getdata = async() =>{
        let result = await fetch(`http://localhost:9109/getuserbyid/${id}`,{
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
    console.log(users1);
    useEffect(() => {
      getdata()
    },[])
    
  return (
    <div>
      <h1>Your Profile</h1>
        <h2>Name: {users1.firstName} {users1.lastName} </h2>
        <h2>Email:{users1.email} </h2>
        <h3>Phone Number:{users1.phoneNum} </h3>
    </div>
  )
}

export default Profile
