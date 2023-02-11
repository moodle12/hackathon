import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./signUp.styles.css";

const SignUp = () => {
  const [name,setName]= useState("");
  const[email,setEmail] = useState('');
  const[phoneNum,setPhoneNum] = useState("");
  const[password,setPassword]= useState('');
  const [userType,setUserType] =useState("");
  const [options,setOptions] =useState([]);
  const[confirmPassword,setConfirmPassword]=useState("");
  let navigate=useNavigate();
  const collectData=async(event) =>{
    event.preventDefault();
    let result = await fetch("http://localhost:9109/registerAll",{
      method:'post',
      body: JSON.stringify({name,email,phoneNum,password,confirmPassword,userType}),
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
    navigate("/")
    // alert("Invalid Credentials");
  }
}
const getdata = async() =>{
  let result = await fetch('http://localhost:9109/userType',{
      method:'get',
      headers:{
        'Content-Type':'application/json'
      }
    });
    const data = await result.json();
    let array = data.data
    let newArray = array.filter((e,i) => (
      e.userTypeName !== 'Student'
    ))
    
    // let revArray = newArray.map((e,i) => e.userTypeName)
    // console.log(revArray.reverse())
    // let revArray2=revArray.reverse()
    // for (let index = 0; index < data.data.length; index++) {
    //   var array=data.data[index].userTypeName
    //   if(array=="Student")
    //   {

    //   }
    // }
    // console.log(array);
    
  setOptions(newArray)
}
useEffect(()=>{
  getdata()
},[])
  return (
    <>
    <div className="container__login">
      <div className="login__content">
        <img
          src="https://img.freepik.com/vector-premium/objetos-relacionados-escuela-educacion-patron-costuras-ilustracion-vectorial_529344-1707.jpg?w=2000"
          alt="login image"
          className="login__img"
        />

        <form action="" className="login__form">
          <div>
            <h1 className="login__title"></h1>
            <p className="login__description">
              Welcome! Please register to continue.
            </p>
          </div>

          <div>
            <div className="login__inputs">
              <div>
                <label for="" className="login__label">
                  Email
                </label>
                <input onChange={(e) => setEmail(e.target.value)} value={email}
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="login__input"
                />
              </div>
              <div>
                <label for="" className="login__label">
                  Name/Institute Name
                </label>
                <input onChange={(e) => setName(e.target.value)} value={name}
                  type="text"
                  placeholder="Enter your name or institute name"
                  required
                  className="login__input"
                />
              </div>
              <div>
              <select name="UserType" id="UserType" onChange={(e) => setUserType(e.target.value)}>
                {
                    options.map((item, index)=>(
                    <option key={item._id} value={item._id}>{item.userTypeName}</option>
                    ))
                  }
                </select>
              </div>
              {/* <div className="dropdown">
                <label className="form-label" htmlFor="form2Example2">
                  Select Option
                </label>
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Any One
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      BCA
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      MCA
                    </a>
                  </li>
                </ul>
              </div> */}

              <div>
                <label for="" className="login__label">
                  Password
                </label>

                <div className="login__box">
                  <input onChange={(e) => setPassword(e.target.value)} value={password}
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="login__input"
                    id="input-pass"
                  />
                  <i className="ri-eye-off-line login__eye" id="input-icon"></i>
                </div>
                <br/>
                <label for="" className="login__label">
                  Confirm Password
                </label>

                <div className="login__box">
                  <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}
                    type="password"
                    placeholder="Enter your confirm password"
                    required
                    className="login__input"
                    id="input-pass"
                  />
                  <i className="ri-eye-off-line login__eye" id="input-icon"></i>
                </div>
              </div>
            </div>

           
          </div>

          <div>
            <div className="login__buttons">
              <button onClick={collectData} className="login__button login__button-ghost">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  

      {/* <div className="signUpBody">
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
      </div> */}
    </>
  );
};

export default SignUp;
