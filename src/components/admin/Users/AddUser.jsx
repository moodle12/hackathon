import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
const AddUser = () => {
    const navigate=useNavigate();
    const [firstName,setFirstName]= useState("");
    const [userType,setUserType] =useState("");
    const [options,setOptions] =useState([]);
    const [lastName,setLastName] = useState("");
    const[email,setEmail] = useState('');
    const[phoneNum,setPhoneNum] = useState("");
    const[password,setPassword]= useState('');
    const[confirmPassword,setConfirmPassword]=useState("");
    const collectData=async(event) =>{
        
        event.preventDefault();
        console.warn(firstName,email,password);
        let result = await fetch("http://localhost:9109/user",{
          method:'post',
          body: JSON.stringify({firstName,lastName,email,phoneNum,password,confirmPassword,userType}),
          headers:{
            'Content-Type':'application/json'
          }
      });
      result= await result.json();
      console.warn(result);
      navigate("/admin/manageusers")
    }
    const getdata = async() =>{
      let result = await fetch('http://localhost:9109/userType',{
          method:'get',
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data = await result.json();
        const array=data.data
        console.log(array);
        setOptions(array)
  }
  useEffect(() => {
    getdata()
  },[])
  return (
    <div>
      <h1>Adding User Component</h1>
      <label htmlFor="firstName">First Name</label>
          <input type="text"  onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="First Name" id="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text"   onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Last Name" id="lastName" />

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

       <select name="UserType" id="UserType" onChange={(e) => setUserType(e.target.value)}>
       {
          options.map((item, index)=>(
          <option key={item._id} value={item._id}>{item.userTypeName}</option>
          ))
        }
       </select>

          <button class="sg1" onClick={collectData}>Add The User</button>
    </div>
  )
}

export default AddUser
