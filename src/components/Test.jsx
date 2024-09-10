import React from "react";
import "./Test.css";

const Test = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">ACREE DESIGN</div>
        <div className="menu">☰</div>
      </header>
      <main className="main-content">
        <div className="overlay">
          <img
            src="your-image-url-here" // Replace with your own image link
            alt="Creative Person"
            className="main-image"
          />
          <div className="text">
            <h1>Hello</h1>
            <p>This is me being creative.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Test;
