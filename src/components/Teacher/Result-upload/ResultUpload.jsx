import React from "react";
import "./ResultUpload.css";

const ResultUpload = () => {
  return (
    <>
      <h2 className="resultUpload-h2">Upload Assignments For Students</h2>
      <div className="resultUpload-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7KliPs545zxISO4B0W3BUEQc3XCLjbVtUzBSyRfFh0r5CD0kkd7k4vvG84MTGmiK2__I&usqp=CAU"
          alt="assignment"
          className="resultUpload-image"
        />
        <div className="resultUpload-card">
          <span>Select a standard</span>
          <select name="assignment" id="assignment">
            <option value="one">1st</option>
            <option value="two">2nd</option>
            <option value="three">3rd</option>
            <option value="four">4th</option>
            <option value="five">5th</option>
            <option value="six">6th</option>
            <option value="seven">7th</option>
            <option value="eight">8th</option>
            <option value="nine">9th</option>
            <option value="tem">10th</option>
          </select>
          <input
            type="file"
            id="myFile"
            name="filename"
            className="uploadResult-fileUpload"
          />
          <button className="uploadResult-submit">Submit</button>
        </div>
      </div>
    </>
  );
};

export default ResultUpload;
