import React from 'react';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="container">
      <div className="overlay-container">
        <div className="overlay">
          <h1>GOT MARKETING? ADVANCE YOUR BUSINESS INSIGHT.</h1>
          <p>Fill out the form and receive our award winning newsletter.</p>
        </div>
      </div>
      <div className="form-container">
        <form>
          <div className="form-wrapper">
            <label>Name</label><br />
            <input type="text" /><br />
          </div>
          <div className="form-wrapper">
            <label>Email</label><br />
            <input type="email" /><br />
          </div>
          <button>Sign me up</button>
        </form>
      </div>
    </div>
  )
}
