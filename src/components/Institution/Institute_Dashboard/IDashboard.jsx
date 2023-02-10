import React, {useEffect,useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import Pdf from '../../pdf/pdf.component';
import { useNavigate } from "react-router-dom";
const IDashboard = () => {
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
const viewpdf=()=>{
  
  navigate("/pdf")
}
 return (
   <div className="App">
   <p>View Documents of the Student for Identity Proof</p>
   <button onClick={viewpdf}>View</button>
   <table className='table-bordered' border="2">
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
     ))}
   </div>
 )
}
export default IDashboard