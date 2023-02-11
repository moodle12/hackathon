import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
const AddStudent = () => {
    const navigate=useNavigate();
    const [firstName,setFirstName]= useState("");
    const userType="63b1d1332ff131c0ff65b0f9"
    const [InstituteName,setInstituteName]=useState("")
    const [lastName,setLastName] = useState("");
    const[email,setEmail] = useState('');
    const[phoneNum,setPhoneNum] = useState("");
    const[password,setPassword]= useState('');
    const[confirmPassword,setConfirmPassword]=useState("");
    const institute_id="63b1d13d2ff131c0ff65b0fb"
    const collectData=async(event) =>{
        
        event.preventDefault();
        console.warn(firstName,email,password);
        let result = await fetch("http://localhost:9109/register",{
          method:'post',
          body: JSON.stringify({firstName,lastName,email,phoneNum,password,confirmPassword,InstituteName,userType}),
          headers:{
            'Content-Type':'application/json'
          }
      });
      result= await result.json();
      console.warn(result);
      navigate("/institute/dashboard")
    }
    const getdata = async() =>{
      let result = await fetch('http://localhost:9109/getAll',{
          method:'get',
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data = await result.json();
        const array=data.data
        console.log(array);
        for (let index = 0; index < array.length; index++) {
            if(array[index].userType._id===institute_id)
          {
            console.log("id matched");
            setInstituteName(array[index].name)
          } 
          }
        console.log(array[0].userType._id);
  }
  useEffect(() => {
    getdata()
  },[])
  return (
    <div>
      <h1>Adding Student Component</h1>
            <label htmlFor="firstName">First Name</label>
          <input type="text"  onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="First Name" id="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text"   onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Last Name" id="lastName" />

          <label htmlFor="InstituteName">Institute Name</label>
          <input type="text"  value={InstituteName} disabled="true" placeholder="Institute Name" id="InstituteName" />

          <label htmlFor="email">Email</label>
          <input type="email"  onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" required={true} id="email" />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text"  onChange={(e) => setPhoneNum(e.target.value)} value={phoneNum} placeholder="Phone Number" id="phoneNumber" />

          <label htmlFor="password">Password</label>
          <input type="password"  onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" id="password" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
           onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
          />


          <button class="sg1" onClick={collectData}>Add The User</button>
    </div>
  )
}

export default AddStudent
