
import React from "react";
import "./admission.css";

const Admission = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1566791126309-cdd970e7ad80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1592252032050-34897f779223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1635070040809-d434392ae756?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="admission_body">
        <form className="admission_Form">
          <h3>Admission Form</h3>

          <label htmlFor="birth">Birth Date</label>
          <input type="date" placeholder="Enter Birth Date" id="birth" />

          <label htmlFor="cardnum">Address</label>
          <input type="text" placeholder="Enter Address" id="addr" />

          <label htmlFor="pincode">Pincode</label>
          <input type="text" placeholder="Enter Pincode" id="code" />
<label htmlFor="course">Course</label>
          <select className="admission_select">
            <option value="1">Select Your Course</option>
            <option value="2">11th</option>
            <option value="3">BCA</option>
            <option value="4">MCA</option>
            <option value="5">Msc(IT)</option>
            <option value="6">BTECH</option>
            <option value="7">MTECH</option>
          </select>
          <br />
          <div className="admission_gen">
            <label htmlFor="Gender">Gender</label>
            <input
              type="radio"
              name="gender"
              value="male"
              style={{ height: "20px", width: "35px" }}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              style={{ height: "20px", width: "35px", paddingLeft: "20px" }}
            />
            Female
          </div>
          <button className="admission_btn1">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Admission;
