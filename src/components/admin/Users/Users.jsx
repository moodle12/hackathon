import React from 'react'
import { useEffect,useState } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom';

const Users =() => {
  const [users1,setUser]=useState([])
  const stu = "63b1d1332ff131c0ff65b0f9"
    const getdata = async() =>{
        let result = await fetch('http://localhost:9109/getallusers',{
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
      <Sidebar/>
      <table border="2" className='m-5'>
      <Link to="/admin/adduser"> <a href="" style={{textDecoration:"none"}}>Add a User</a></Link>
       <tr>
          <td className='p-5'>FirstName</td>
          <td className='p-5'>LastName</td>
          <td className='p-5'>Email</td>  
          <td className='p-5'>UserType</td>      
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
          <td>{item.userType===stu?"Student":null} </td>
          </tr>
          ))
        }
      </table>
    </div>
  )
}

export default Users;
