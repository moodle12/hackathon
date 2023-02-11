// import React from 'react'
// import { useEffect,useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from "axios";

// const Profile = () => {
//     const [users1,setUser]=useState([])
//     const {id}=useParams()
//     const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:9109/userprofile").then(
//         (res) =>{ 
//           console.log(res.data.data);
//           setData(res.data.data)
//         })
//       .catch((err) => console.log(err, "it has an error"));
//   });
//     console.log(id)
    // const getdata = async() =>{
    //     let result = await fetch(`http://localhost:9109/getuserbyid/${id}`,{
    //         method:'get',
    //         headers:{
    //           'Content-Type':'application/json'
    //         }
    //       });
    //       const data = await result.json();
    //       const array=data.data
    //       console.log(array);
    //       setUser(array)
    // }
    // console.log(users1);
    // useEffect(() => {
    //   getdata()
    // },[])
//   return (
//     <div>
//       <h1>Your Profile</h1>
//         <h2>Name: {users1.firstName} {users1.lastName} </h2>
//         <h2>Email:{users1.email} </h2>
//         <h3>Phone Number:{users1.phoneNum} </h3>
//          <div className="container">
//                 <div className="row">
//                     <form>
//                         <h3>React File Upload</h3>
//                         <div className="form-group">
//                             <input type="file" />
//                         </div>
//                         <div className="form-group">
//                             <button className="btn btn-primary" type="submit">Upload</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         {/* <h2>User's Profile</h2>
//         {data.map((singleData,index) => {
//         const base64String = btoa(
//           String.fromCharCode(...new Uint8Array(singleData.image.data.data.data))
//         );
//         return <img style={{borderradius
//         :"50%"}} key={index} src={`data:image/png;base64,${base64String}`} width="500" alt='nothing to display'/>
//       })} */}
//     </div>
//   )
// }

// export default Profile

import { useEffect,useState } from 'react';
 import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import NotFound from '../NotFound';
import './profile.css'

const Profile = () => {
  const [users1,setUser]=useState([])
  const[src,setSrc]=useState([])
    const {id}=useParams()
  const [profileImg, setProfileImg] = useState('');
  let navigate=useNavigate()
  const onFileChange = (e) => {
    setProfileImg(e.target.files[0]);
  };
  const getdata = async() =>{
    let result = await fetch(`http://localhost:9109/getuserbyid/${id}`,{
        method:'get',
        headers:{
          'Content-Type':'application/json'
        }
      });
      const data = await result.json();
      const array=data.data
      console.log(array);
      setUser(array)
}
console.log(users1);
useEffect(() => {
  getdata()
},[])

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('profileImg', profileImg);
    formData.append('user',id)
    axios
      .post('http://localhost:9109/api/user-profile', formData, {})
      .then((res) => {
        console.log(res);
      });
  };
  const getData= () => {
    axios
      .get('http://localhost:9109/api/')
      .then((res) => {
        console.log(res);
        for (let index = 0; index < res.data.users.length; index++) {
          if(id==res.data.users[index].user._id)
        {
          console.log("id matched");
          setSrc(res.data.users[index].profileImg)
        } 
        }
        // console.log(res.data.users[0].user._id);
        
        // console.log(res.data.users);
      });
  };
  useEffect(()=>{
    getData()
  },[])
  let token  = localStorage.getItem('token');
  const leave=()=>{
    navigate("/leave/institute")
  }
  return (
    <>
   {token ?(
    <> 
    <div class="wrapper">
  <div class="profile-card js-profile-card">
    <div class="profile-card__img">
      <img src={src} alt="profile card"/>
    </div>

    <div class="profile-card__cnt js-profile-cnt">
      <div class="profile-card__name">{users1.firstName} {users1.lastName}</div>
      <div class="profile-card__txt"><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg> {users1.email}</div>
      <div class="profile-card-loc">
        <span class="profile-card-loc__icon">
          <svg class="icon"></svg>
        </span>

        <span class="profile-card-loc__txt">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
          <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
        </svg>Paldi, Ahmedabad
        </span>
        
      </div>

      <div class="profile-card-inf">
        <div class="profile-card-inf__item">
          <div class="profile-card-inf__title">{users1.phoneNum}</div>
          <div class="profile-card-inf__txt"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> Phone Number</div>
        </div>

        <div class="profile-card-inf__item">
          <div class="profile-card-inf__title">{users1.InstituteName}</div>
          <div class="profile-card-inf__txt"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"/>
</svg> Institute Name</div>
        </div>
      </div>

      <div class="profile-card-social">
      </div>

      <div class="profile-card-ctr">
        <button class="profile-card__button button--blue js-message-btn">Message</button>
      <button class="profile-card__button button--orange " onClick={leave}>Leave Institute</button>
      </div>
    </div>

    <div class="profile-card-message js-message">
      <form class="profile-card-form">
        <div class="profile-card-form__container">
          <textarea placeholder="Say something..."></textarea>
        </div>

        <div class="profile-card-form__bottom">
          <button class="profile-card__button button--blue js-message-close">
            Send
          </button>

          <button class="profile-card__button button--gray js-message-close">
            Cancel
          </button>
        </div>
      </form>

      <div class="profile-card__overlay js-message-close"></div>
    </div>

  </div>
</div>
<form style={{height:"10%",display:"flex",alignItems:"start",justifyContent:"start",backgroundColor:"white"}} onSubmit={onSubmit}>
          <div className="form-group">
            {/* <p className='text-dark' style={{fontWeight:"700"}}>Upload your profile picture</p> */}
            <input type="file" onChange={onFileChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Upload
            </button>
          </div>
        </form>
    {/* <div className="container">
   
     <h1>Your Profile</h1>
     <img style={{height:"20%",width:"20%",borderRadius:"50%"}} src={src} alt="" />
        <h2>Name: {users1.firstName} {users1.lastName} </h2>
         <h2>Email:{users1.email} </h2>
         <h2>Institute Name: {users1.InstituteName}</h2>
         <h3>Phone Number:{users1.phoneNum} </h3>
      <div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <p className='text-dark' style={{fontWeight:"700"}}>Upload your profile picture</p>
            <input type="file" onChange={onFileChange} />
          </div>
          <div className="form-group">
            <p className='text-dark' style={{fontWeight:"700"}}>Upload your Aadhar Card</p>
            <input type="file" />
          </div>
          <div className="form-group">
            <p className='text-dark' style={{fontWeight:"700"}}>Upload your Birth Certificate</p>
            <input type="file" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div> */}
    </>):(
      <div><NotFound></NotFound></div>
      )}
    </>
  );
};

export default Profile;

