import React, { useEffect, useState } from 'react'

const LeaveInstitute = () => {
    let loginId  = localStorage.getItem('login_id'); 
    const[users,setUsers]=useState("")
    const[firstName,setFirstName]=useState("")
    const [lastName,setLastName] = useState("");
  const[email,setEmail] = useState('');
  const[phoneNum,setPhoneNum] = useState("");
  const[institute,setInstitute]=useState("")
  const[reason,setReason]=useState("")
  
    const getdata = async() =>{
        let result = await fetch(`http://localhost:9109/getuserbyid/${loginId}`,{
            method:'get',
            headers:{
              'Content-Type':'application/json'
            }
          });
          const data = await result.json();
          const array=data.data
          console.log(array);
          setUsers(array)
    }
    const collectData=async(event) =>{
        event.preventDefault();
        // console.warn(firstName,email,password);
        let result = await fetch("http://localhost:9109/leaveUser",{
          method:'post',
          body: JSON.stringify({firstName,lastName,email,phoneNum,institute,reason}),
          headers:{
            'Content-Type':'application/json'
          }
      });
      result= await result.json();
      console.warn(result);
    }
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div>
      <h1>Application Form</h1>
      <label htmlFor="firstName">First Name</label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} disabled="true" value={users.firstName} placeholder="First Name" id="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text"  onChange={(e) => setLastName(e.target.value)} disabled="true" value={users.lastName}  placeholder="Last Name" id="lastName" />

          <label htmlFor="email">Email</label>
          <input type="email"  onChange={(e) => setEmail(e.target.value)} disabled="true" value={users.email}  placeholder="Email" required={true} id="email" />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="number" onChange={(e) => setPhoneNum(e.target.value)} disabled="true" value={users.phoneNum}  placeholder="Phone Number" id="phoneNumber" />

          <label htmlFor="inst">Current Institute</label>
          <input type="text" onChange={(e) => setInstitute(e.target.value)} disabled="true" value={users.InstituteName}   placeholder="Current Institute" id="inst" />

          <label>Reason for Leaving the Institute</label>
          <textarea onChange={(e) => setReason(e.target.value)}  value={reason}  style={{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"5%"}} name="" id="" cols="70" rows="10"></textarea>
        <button onClick={collectData} style={{marginLeft:"50%"}} className='btn btn-primary'>Submit</button>
    </div>
  )
}

export default LeaveInstitute
