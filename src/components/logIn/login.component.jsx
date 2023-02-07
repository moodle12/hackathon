import React from "react";
import "./login.styles.css";
import { 
  useNavigate,Link
} from 'react-router-dom';


const LogIn = () => {
  const[email,setEmail] = React.useState('');
  const[password,setPassword]= React.useState('');
  const navigate=useNavigate();
  const stu = "63b1d1332ff131c0ff65b0f9"
  const parent="63b1d1532ff131c0ff65b0ff"
  const admin="63d57148b3a77b47da996e75"
  const institute="63b1d13d2ff131c0ff65b0fb"
  const teacher="63b1d1492ff131c0ff65b0fd"
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
    var login_id=result.data._id
    localStorage.setItem("login_id",login_id);
    console.log(login_id);
    var arr=result.data.userType
    // console.log(arr);
    if(result.status === 200)
    {
      if (arr===stu) {
        alert("login done");
        navigate('/home') 
      }
      else if(arr===admin)
      {
        alert("login done");
        navigate('/admin/dashboard') 
      }
      else if(arr===parent)
      {
        alert("login done")
        navigate('/parent/dashboard')
      }
      else if(arr===institute)
      {
        alert("login done")
        navigate('/institute/dashboard')
      }
      else if(arr===teacher)
      {
        alert("login done")
        navigate('/teacher/dashboard')
      }
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
          <p>Don't have an Account? <Link to="/signup" className="hover">Create</Link></p>
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
