import React, { useEffect, useState } from 'react'

const LeaveInstitute = () => {
    let loginId  = localStorage.getItem('login_id'); 
    const[firstName,setFirstName]=useState("")
    const [lastName,setLastName] = useState("");
  const[email,setEmail] = useState('');
  const[mobileNo,setMobileNo] = useState("");
  const[currentInstitute,setInstituteName]=useState("")
  const[reasonLeaving,setReason]=useState("")
  
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
          setFirstName(array.firstName)
          setLastName(array.lastName)
          setEmail(array.email)
          setInstituteName(array.InstituteName)
          setMobileNo(array.phoneNum)
    }
    const collectData=async(event) =>{
        event.preventDefault();
        // console.warn(firstName,email,password);
        let result = await fetch("http://localhost:9109/leaveUser",{
          method:'post',
          body: JSON.stringify({firstName,lastName,email,mobileNo,currentInstitute,reasonLeaving}),
          headers:{
            'Content-Type':'application/json'
          }
      });
      result= await result.json();
      console.warn(result);
      alert("Application for LC added")
    }
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div>
      <h1>Application Form</h1>
      <label htmlFor="firstName">First Name</label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} disabled="true" value={firstName} placeholder="First Name" id="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text"  onChange={(e) => setLastName(e.target.value)} disabled="true" value={lastName}  placeholder="Last Name" id="lastName" />

          <label htmlFor="email">Email</label>
          <input type="email"  onChange={(e) => setEmail(e.target.value)} disabled="true" value={email}  placeholder="Email" required={true} id="email" />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="number" onChange={(e) => setMobileNo(e.target.value)} disabled="true" value={mobileNo}  placeholder="Phone Number" id="phoneNumber" />

          <label htmlFor="inst">Current Institute</label>
          <input type="text" onChange={(e) => setInstituteName(e.target.value)} disabled="true" value={currentInstitute}   placeholder="Current Institute" id="inst" />

          <label>Reason for Leaving the Institute</label>
          <textarea onChange={(e) => setReason(e.target.value)}  value={reasonLeaving}  style={{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"5%"}} name="" id="" cols="70" rows="10"></textarea>
        <button onClick={collectData} style={{marginLeft:"50%"}} className='btn btn-primary'>Submit</button>
    </div>
  )
}

export default LeaveInstitute
