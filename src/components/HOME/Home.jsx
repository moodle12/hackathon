import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div>
      <div class="mainPage__new__banner">
        <div class="mainPage__new__navebar">
          <a href="#"><div class='mainPage__new__logo'>The Gap</div></a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Raise Donation</a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#">Register</a></li>
            </ul>
        </div>
        <div class="mainPage__new__content">
            <h1>Explore and Learn</h1>
            <div>
                <button type="button"><span></span>Guidance</button>
                <button type="button"> <span></span>Library</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home
