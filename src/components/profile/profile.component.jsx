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

import { useEffect, useState } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import axios from "axios";
import NotFound from "../NotFound";
import "./profile.css";

const Profile = () => {
  const [users1, setUser] = useState([]);
  const [img,setImg]= useState([])
  const [src, setSrc] = useState([]);
  const { id } = useParams();
  const [profileImg, setProfileImg] = useState("");
  let navigate = useNavigate();
  const onFileChange = (e) => {
    setProfileImg(e.target.files[0]);
  };
  const getdata = async () => {
    let result = await fetch(`http://localhost:9109/getuserbyid/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    const array = data.data;
    console.log(array);
    setUser(array);
  };
  console.log(users1);

  useEffect(() => {
    getdata();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImg", profileImg);
    formData.append("user", id);
    axios
      .post("http://localhost:9109/api/user-profile", formData, {})
      .then((res) => {
        console.log(res);
      });
  };
  const onSubmit2 = (e) => {
    axios.get("http://localhost:9109/i/").then((res) => {
      console.log(res);
      // for (let index = 0; index < res.data.users.length; index++) {
      //   if(id==res.data.users[index].user._id)
      // {
      //   console.log("id matched");
      //   setSrc(res.data.users[index].profileImg)
      // }
      // }
      // console.log(res.data.users[0].user._id);

      // console.log(res.data.users);
    });
  };
  const getData = () => {
    axios.get("http://localhost:9109/i/").then((res) => {
      console.log(res);
      setImg(res.data.users[0].Img)
      // for (let index = 0; index < res.data.users.length; index++) {
      //   if (id == res.data.users[index].user._id) {
          
      //   }
      // }
      // console.log(res.data.users[0].user._id);

      // console.log(res.data.users);
    });
  };
  useEffect(() => {
    getData();
    onSubmit2();
  }, []);
  // const handleLc=()=>{
  //   axios.get("http://localhost:9109/api/").then((res) => {
  //     console.log(res);
  //     for (let index = 0; index < res.data.users.length; index++) {
  //       if (id == res.data.users[index].user._id) {
  //         console.log("id matched");
  //         setSrc(res.data.users[index].profileImg);
  //       }
  //     }

  //     // console.log(res.data.users[0].user._id);

  //     // console.log(res.data.users);
  //   });
  
  let token = localStorage.getItem("token");
  const leave = () => {
    navigate("/leave/institute");
  };
  const gotoLc=()=>{
   navigate("/student/submitlc") 
  }
  return (
    <>
      {token ? (
        <>
          <div class="wrapper">
            <div class="profile-card js-profile-card">
              <div class="profile-card__img">
                <img src={src} alt="profile card" />
              </div>

              <div class="profile-card__cnt js-profile-cnt">
                <div class="profile-card__name">
                  {users1.firstName} {users1.lastName}
                </div>
                <div class="profile-card__txt">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>{" "}
                  {users1.email}
                </div>
                <div class="profile-card-loc">
                  <span class="profile-card-loc__icon">
                    <svg class="icon"></svg>
                  </span>

                  <span class="profile-card-loc__txt">
                  <svg style={{
                    position:'relative',
                    left:'-10%',
                  }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-pdf" viewBox="0 0 16 16">
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                    <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"/>
                  </svg>
                   <button onClick={gotoLc} to="" style={{marginLeft:"-8%"}}>View Leaving Certificate</button>
                  </span>
                </div>

                <div class="profile-card-inf">
                  <div class="profile-card-inf__item">
                    <div class="profile-card-inf__title">{users1.phoneNum}</div>
                    <div class="profile-card-inf__txt">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-telephone"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>{" "}
                      Phone Number
                    </div>
                  </div>

                  <div class="profile-card-inf__item">
                    <div class="profile-card-inf__title">
                      {users1.InstituteName}
                    </div>
                    <div class="profile-card-inf__txt">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-building"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                      </svg>{" "}
                      Institute Name
                    </div>
                  </div>
                </div>

                <div class="profile-card-social"></div>

                <div class="profile-card-ctr">
                  <button class="profile-card__button button--blue js-message-btn">
                    Message
                  </button>
                  <button
                    class="profile-card__button button--orange "
                    onClick={leave}
                  >
                    Leave Institute
                  </button>
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
          <form
            style={{
              height: "10%",
              width:"22%",
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
              backgroundColor: "white",
              position: "absolute",
              top: "75%",
              left: "29%",
              borderRadius:'10rem'
            }}
            onSubmit={onSubmit}
          >
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
        </>
      ) : (
        <div>
          <NotFound></NotFound>
        </div>
      )}
    </>
  );
};

export default Profile;
