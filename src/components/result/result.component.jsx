import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './result.css'
const Result = () => {
  
  const navigate = useNavigate();

  const[user,setUser] = React.useState('');
  const[password,setPassword]= React.useState('');
  const handleResult = async (event) => {
    event.preventDefault();
    console.warn("user,password",user,password);
    let result = await fetch('http://localhost:9109/result',{
      method:'post',
      body:JSON.stringify({user,password}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result=await result.json();
    console.warn(result);
    navigate("/marks");

  }
  return (
    <>
    <div className="resultBody">
        <form className="resultForm">
          <h3>Generate Result</h3>

          <label htmlFor="stud_uid">Student UID </label>
          <input type="text" onChange={(e) => setUser(e.target.value)} value={user} placeholder="Enter UID" id="stud_uid" />

          <label htmlFor="enroll_password">Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" id="enroll_password" />

          <Link to='/marks'>
            <button onClick={handleResult}>Submit</button>
          </Link>
          
        </form>
      </div>
      </>
  );

};

export default Result;
