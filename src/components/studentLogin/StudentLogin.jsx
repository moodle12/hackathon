import React from "react";
import { useContext } from "react";
import { 
  useNavigate,Link
} from 'react-router-dom';
import Context from "../../context/Context";


const StudentLogin = () => {
  const {name}=useContext(Context)
  console.log(name);
  const[Sid,setSid] = React.useState('');
  const[password,setPassword]= React.useState('');
  const navigate=useNavigate();
  const stu = "63b1d1332ff131c0ff65b0f9"
  const parent="63b1d1532ff131c0ff65b0ff"
  const admin="63d57148b3a77b47da996e75"
  const institute="63b1d13d2ff131c0ff65b0fb"
  const teacher="63b1d1492ff131c0ff65b0fd"
  const handleLogin = async (event) => {
    event.preventDefault();
    let result = await fetch('http://localhost:9109/student/login',{
      method:'post',
      body:JSON.stringify({Sid,password}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result=await result.json();
    console.warn(result);
    var token=result.token
    console.log(token);
    localStorage.setItem('token',token)
    var login_id=result._id
    localStorage.setItem("login_id",login_id);
    console.log(login_id);
    var arr=result.userType
    console.log(arr);
    if(result.status === 200)
    {
        alert("login done")
      navigate("/loginUser")
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
          <h3>Student Login</h3>

          <label htmlFor="username">Unique ID</label>
          <input type="text" onChange={(e) => setSid(e.target.value)} value={Sid} placeholder="Unique ID alloted" id="username" />

          <label htmlFor="password">Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" id="password" />

          <button onClick={handleLogin}>Log In</button>
          <p>Are you an Institution or Teacher or Parent? <Link to="/" className="hover">Login Here</Link></p>
          <div className="social">
            <div className="go">Google</div>
            <div className="fb">Facebook</div>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentLogin;
