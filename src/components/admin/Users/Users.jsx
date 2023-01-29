import React from 'react'
import { useEffect,useState } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom';

const Users =() => {
  const [users1,setUser]=useState([])
  const[userType,setUserType]=useState([])
  // const stu = "63b1d1332ff131c0ff65b0f9"
  // const parent="63b1d1492ff131c0ff65b0fd"
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
          // for(let i=0;i<array.length;i++)
          // {
          //   arr=array[i].userType._id;
          //   console.log(arr);
          // }
          //   if (arr===stu) {
          //     setUserType("Student")
          //   }
          //   else if(arr===parent)
          //   {
          //     setUserType([userType],"Parent")
          //   }
          setUser(array)

          
    }
    console.log(users1);
    useEffect(() => {
      getdata()
    },[])
  //  function display_usertype() {
  //   users1.map((item, index)=>(
  
  //         (()=>{
  //           if(item.userType==stu)
  //           {
  //             return "Student"
  //           }
  //           else if(item.userType==parent)
  //           {
  //             return "Parent"
  //           }
  //         })
  //   ))
  //  }
  return (
    <div>
      <Sidebar/>
      <table border="2" className='m-5'>
      <Link to="/admin/adduser"> <a href="" style={{textDecoration:"none"}}>Add a User</a></Link>
       <tr>
          <td className='p-5'>FirstName</td>
          <td className='p-5'>LastName</td>
          <td className='p-5'>Email</td>  
          {/* <td className='p-5'>UserType</td>       */}
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
          {/* <td>{userType}</td> */}
          </tr>
          ))
        }
      </table>
    </div>
  )
}

export default Users;
