import React,{useState} from "react";
import "./signUp.styles.css";

const SignUp = () => {
  const [firstName,setFirstName]= useState("");
  const [lastName,setLastName] = useState("");
  const[email,setEmail] = useState('');
  const[phoneNum,setPhoneNum] = useState("");
  const[password,setPassword]= useState('');
  const[confirmPassword,setConfirmPassword]=useState("");
  const collectData=async(event) =>{
    event.preventDefault();
    console.warn(firstName,email,password);
    let result = await fetch("http://localhost:9109/register",{
      method:'post',
      body: JSON.stringify({firstName,lastName,email,phoneNum,password,confirmPassword}),
      headers:{
        'Content-Type':'application/json'
      }
  });
  result= await result.json();
  console.warn(result);
  if (result.status === 200) {
    alert("signup done");
  }
  else{
    alert("Invalid Credentials");
  }
}
  return (
    <>
      <div className="signUpBody">
        <form>
          <h3>SignUp Here</h3>

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

          <button class="sg1" onClick={collectData}>Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
