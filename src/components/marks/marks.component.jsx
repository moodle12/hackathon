import React, { useState } from "react";

const Marks = () => {
  
//   const[user,setUser] = React.useState('');
//   const[password,setPassword]= React.useState('');
const[firstStd,setFirstStd] = useState('');
const[secondStd,setSecondStd]= useState('');
  const handleMarks = async (event) => {
    event.preventDefault();
   // console.warn("firstStd",firstStd);
    let result = await fetch('http://localhost:9109/marks',{
      method:'post',
      body:JSON.stringify({firstStd}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result=await result.json();
    alert(result.data.firstStd + "%")
    console.warn(result);
  }
  const hm2 = async (event) => {
    event.preventDefault();
   // console.warn("firstStd",firstStd);
    let result = await fetch('http://localhost:9109/marks',{
      method:'post',
      body:JSON.stringify({secondStd}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result=await result.json();
    alert(result.data.secondStd + "%")
    console.warn(result);
  }
  function sheet() {
    return(
        <div>
              <table border="2">
				<tr align="left">
					<th>Name : </th>
					<td>BRAHMKSHATRIYA SHIVAM ATULBHAI</td>
				</tr>

				<tr align="left">
					<th>Institute : </th>
					<td>Faculty of Computer Applications & Information Technology</td>
				</tr>

				<tr align="left">
					<th>Program : </th>
					<td>Bachelor of Computer Application</td>
				</tr>

				<tr align="left">
					<th>Semester : </th>
					<td>VI</td>
				</tr>

				<tr align="left">
					<th>Seat No. : </th>
					<td>202000319010009</td>
				</tr>

				<tr align="left">
					<th>Enrollment No. : </th>
					<td>202000319010009</td>
				</tr>
			</table>
			<br />
			<table border="2">
				<tr align="center">
					<th>Subject Name </th>
					<th>Credit</th>
					<th>Min / Max Marks </th>
					<th>Obtained Marks</th>
					<th>Grade</th>
				</tr>

				<tr>
					<td align="left">Advanced Object Oriented Programming</td>
					<td align="center">3</td>
					<td align="center">40/100</td>
					<td align="center">96</td>
					<td align="center">O+</td>
				</tr>

				<tr>
					<td align="left">Data Structures</td>
					<td align="center">3</td>
					<td align="center">40/100</td>
					<td align="center">88</td>
					<td align="center">O+</td>
				</tr>

				<tr>
					<td align="left">Database Management System-II</td>
					<td align="center">3</td>
					<td align="center">40/100</td>
					<td align="center">85</td>
					<td align="center">O+</td>
				</tr>

				<tr>
					<td align="left">Fundamentals of Operating System </td>
					<td align="center">3</td>
					<td align="center">40/100</td>
					<td align="center">92</td>
					<td align="center">O+</td>
				</tr>

				<tr>
					<td align="left">Practical on AOOP </td>
					<td align="center">3</td>
					<td align="center">40/100</td>
					<td align="center">96</td>
					<td align="center">O+</td>
				</tr>

				<tr>
					<td align="left">Practical on DS</td>
					<td align="center">3</td>
					<td align="center">40/100</td>
					<td align="center">99</td>
					<td align="center">O+</td>
				</tr>

				<tr>
					<td align="left">Practical on DBMS-II</td>
					<td align="center">3</td>
					<td align="center">40/100</td>
					<td align="center">97</td>
					<td align="center">O+</td>
				</tr>
			</table>
			<table border="2">
				<tr align="center">
					<th>Semester</th>
					<th>Max Marks</th>
					<th>Obtained Marks</th>					
				</tr>
				<tr align="center">
					<td>Sem- VI</td>
					<td>700</td>
					<td>653</td>
				</tr>			
			</table>
				<h3>CGPA Equivalent Class will be as follows</h3>
			<table border="2">
				<tr align="center">
					<th>Percetage</th>
					<th>Grade Point </th>
					<th>Grade</th>
					<th>Description</th>
					<th>Classification of Final Result</th>
				</tr>

				<tr align="center">
					<td>85 an above</td>
					<td>8.5 - 10.0</td>
					<td>O+</td>
					<td>Outstanding</td>
					<td>First Class with Distinction</td>
				</tr>
			</table>

			<table border="2">
				<tr align="center">
					<th>Percetage</th>
					<th>Grade Point </th>
					<th>Grade</th>
					<th>Description</th>
					<th>Classification of Final Result</th>
				</tr>
				
				<tr align="center">
					<td>85 an above</td>
					<td>7.0 - 8.49</td>
					<td>O</td>
					<td>Excellent</td>
					<td>First Class with Distinction</td>
				</tr>
			</table>

			<table border="2">
				<tr align="center">
					<th>Percetage</th>
					<th>Grade Point </th>
					<th>Grade</th>
					<th>Description</th>
					<th>Classification of Final Result</th>
				</tr>
				
				<tr align="center">
					<td>85 an above</td>
					<td>6.0 - 6.99 </td>
					<td>A</td>
					<td>Very Good</td>
					<td>First Class</td>
				</tr>
			</table>

			<table border="2">
				<tr align="center">
					<th>Percetage</th>
					<th>Grade Point </th>
					<th>Grade</th>
					<th>Description</th>
					<th>Classification of Final Result</th>
				</tr>
				
				<tr align="center">
					<td>85 an above</td>
					<td>5.5 - 5.99 </td>
					<td>B+</td>
					<td>Good</td>
					<td>Higher Second Class</td>
				</tr>
			</table>

			<table border="2">
				<tr align="center">
					<th>Percetage</th>
					<th>Grade Point </th>
					<th>Grade</th>
					<th>Description</th>
					<th>Classification of Final Result</th>
				</tr>
				
				<tr align="center">
					<td>85 an above</td>
					<td>4.8 - 5.49 </td>
					<td>B</td>
					<td>Fair</td>
					<td>Second Class</td>
				</tr>
			</table>

			<table border="2">
				<tr align="center">
					<th>Percetage</th>
					<th>Grade Point </th>
					<th>Grade</th>
					<th>Description</th>
					<th>Classification of Final Result</th>
				</tr>
				
				<tr align="center">
					<td>85 an above</td>
					<td>4.0 - 4.79 </td>
					<td>C</td>
					<td>Average</td>
					<td>Pass Class</td>
				</tr>
			</table>

			<table border="2">
				<tr align="center">
					<th>Percetage</th>
					<th>Grade Point </th>
					<th>Grade</th>
					<th>Description</th>
					<th>Classification of Final Result</th>
				</tr>
				
				<tr align="center">
					<td>85 an above</td>
					<td> 0.0 </td>
					<td>F</td>
					<td>Fail or Dropped </td>
					<td>Dropped</td>
				</tr>
			</table>
        </div>
    )
  }
  return (
    <>
    <div className="resultBody">
    
        <form>

          <h3>Result Sheet:</h3>
        
          <label htmlFor="first"> First Standard </label>
          <button onClick={handleMarks}>View Result: </button>

          <label htmlFor="enroll_password">Second Standard</label>
            <button onClick={hm2}>View Result:</button>

            <label htmlFor="enroll_password">Third Standard</label>
            <button onClick={hm2}>View Result:</button>

            <label htmlFor="enroll_password">Fourth Standard</label>
            <button onClick={hm2}>View Result:</button>

            <label htmlFor="enroll_password">Fifth Standard</label>
            <button onClick={hm2}>View Result:</button>
            
            <label htmlFor="enroll_password">Sixth Standard</label>
          {/* <input type="text" onChange={(e) => setSecondStd(e.target.value)} value={secondStd} placeholder="Password" id="enroll_password" /> */}
            <button onClick={hm2}>View Result:</button>
            <label htmlFor="enroll_password">Seventh Standard</label>
          {/* <input type="text" onChange={(e) => setSecondStd(e.target.value)} value={secondStd} placeholder="Password" id="enroll_password" /> */}
            <button onClick={hm2}>View Result:</button>
            <label htmlFor="enroll_password">Eight Standard</label>
          {/* <input type="text" onChange={(e) => setSecondStd(e.target.value)} value={secondStd} placeholder="Password" id="enroll_password" /> */}
            <button onClick={hm2}>View Result:</button>
            <label htmlFor="enroll_password">Ninth Standard</label>
          {/* <input type="text" onChange={(e) => setSecondStd(e.target.value)} value={secondStd} placeholder="Password" id="enroll_password" /> */}
            <button onClick={hm2}>View Result:</button>
            <label htmlFor="enroll_password">Tenth Standard</label>
          {/* <input type="text" onChange={(e) => setSecondStd(e.target.value)} value={secondStd} placeholder="Password" id="enroll_password" /> */}
            <button onClick={hm2}>View Result:</button>
            <label htmlFor="enroll_password">Eleventh Standard</label>
          {/* <input type="text" onChange={(e) => setSecondStd(e.target.value)} value={secondStd} placeholder="Password" id="enroll_password" /> */}
            <button onClick={hm2}>View Result:</button>
          <label htmlFor="12th">Twelfth Standard</label>
          <button onClick={sheet}>View Result:</button>
          
        </form>
      </div>
      </>
  );

};

export default Marks;
