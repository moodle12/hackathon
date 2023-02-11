import React, {useEffect,useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import Pdf from '../../pdf/pdf.component';
import { useNavigate } from "react-router-dom";
import './IDashboard.css'
const IDashboard = () => {
  const[id,setId]=useState("")
 const [menuItems, setMenuItems] = useState([])
 const [cart, setCart] = useState([])
 let navigate= useNavigate()
useEffect(() => {
  alanBtn({
    key:
      "e0bb6199db6828bf18882f6d4d6ed09a2e956eca572e1d8b807a3e2338fdd0dc/stage",
    onCommand: (commandData) => {
      if (commandData.command === "getMenu") {
        setMenuItems(commandData.data)
        console.log(commandData)
       }
    },
  })
}, [])
const addToCart=(menuItem)=>{
  setCart((oldCart)=>{
    return[...oldCart,menuItem]
  })
}
const addAdmission=()=>{
  navigate("/institute/addstudent")
}
// const viewpdf=()=>{
//   navigate("/pdf")
// }
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
}
 return (
   <div className="App">
    {/* <h1></h1>
    <p>View Learners License for Identity Verification</p>
    <button onClick={viewpdf}>View</button>
    <p>Search Student based on Student UID</p>
    <button onClick={search}>Search</button> */}
    <div class="container">
    <h1>GLS University's Dashboard</h1>
    <div className="row">
      <div className="col-md-4 col-sm-12">
            <div class="card" style={{display:"none"}}>
          <div class="i_icon">
            <img src="http://localhost:9109/public/2852cceb-8b93-4a9a-ad1c-2d579ee05b73-home-gallery-4-1200x800-original.jpg" alt="" />
          </div>
          <h1 className='search'>Search</h1>
          <p>Search a Student based on their respective Student Unique ID.</p>
          <input type="text"/>
          <button class="btn" type='submit' onClick={getdata}>Search</button>
        </div>
      </div>
          <div className="col-md-4 col-sm-12">
          <div class="card">
        <div class="i_icon">
          <img src="http://localhost:9109/public/2852cceb-8b93-4a9a-ad1c-2d579ee05b73-home-gallery-4-1200x800-original.jpg" alt="" />
        </div>
        <h1 className='search'>Admission</h1>
        <p>Add a Admission your Insitute by entering student's data in Admission form.</p>
        <button class="btn" onClick={addAdmission}>Add</button>
      </div>
      </div>
      <div className="col-md-4 col-sm-12">
      <div class="card">
    <div class="i_icon">
      <img src="http://localhost:9109/public/2852cceb-8b93-4a9a-ad1c-2d579ee05b73-home-gallery-4-1200x800-original.jpg" alt="" />
    </div>
    <h1 className='search'>Search</h1>
    <p>Search a Student based on their respective Student Unique ID.</p>
    <input onChange={(e) => setId(e.target.value)} value={id} type="text"/>
    <button class="btn" onClick={getdata}>Search</button>
  </div>
      </div>
    </div>
  <div class="square one"></div>
  <div class="square two"></div>
  <div class="circle one"></div>
  <div class="circle two"></div>
</div>
   {/* <table className='table-bordered' border="2">
   <tr>
    <th>Student's Name</th>
    <th>Student's Percentage</th>
    <th className='p-3'>Student's Class</th>
   </tr>
     {menuItems.map((menuItem) => (
       <tr key={menuItem.name}>
         <td>{menuItem.name}</td>
         <td>{menuItem.percentage}</td>  <td>{menuItem.category}</td>
         <button onClick={()=>addToCart(menuItem) }></button>
       </tr>
     ))}
     </table>
     Students:
     {cart.map((cartItem) => (
       <div key={cartItem.name}>
         {cartItem.name} - {cartItem.price} - {cartItem.category}
       </div>
     ))} */}
   </div>
 )
}
export default IDashboard