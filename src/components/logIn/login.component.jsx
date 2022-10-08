import React from "react";
import "./login.styles.css";

const LogIn = () => {
  const[email,setEmail] = React.useState('');
  const[password,setPassword]= React.useState('');
  const handleLogin = async (event) => {
    event.preventDefault();
    console.warn("email,password",email,password);
    let result = await fetch('http://localhost:9109/login',{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result=await result.json();
    console.warn(result);
    if(result.status === 200)
    {
      alert("login done");
    }
    else{
      alert("Invalid Credentials");
    }
  }
  return (
    <>
      <div className="logInBody">
        {" "}
        <form className="loginForm">
          <h3>Login Here</h3>

          <label htmlFor="username">Username</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email or Phone" id="username" />

          <label htmlFor="password">Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" id="password" />

          <button onClick={handleLogin}>Log In</button>
          <div className="social">
            <div className="go">Google</div>
            <div className="fb">Facebook</div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
