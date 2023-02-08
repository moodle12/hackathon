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
 import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [users1,setUser]=useState([])
    const {id}=useParams()
  const [profileImg, setProfileImg] = useState('');

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
    axios
      .post('http://localhost:9109/api/user-profile', formData, {})
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="container">
     <h1>Your Profile</h1>
     <img style={{height:"20%",width:"20%",borderRadius:"50%"}} src="http://localhost:9109/public/09a9307b-24f8-4a65-a9f7-09f46001033d-screenshot-(405).png" alt="" />
        <h2>Name: {users1.firstName} {users1.lastName} </h2>
         <h2>Email:{users1.email} </h2>
         <h3>Phone Number:{users1.phoneNum} </h3>
      <div className="row mt-2">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="file" onChange={onFileChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

