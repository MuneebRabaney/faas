import React from "react";
import logo from "./images/logo.svg";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="#" className="App-link" rel="noopener noreferrer">
          Welcome to FaaS Islamic Institute
        </a>
        {/* Create user form */}
        <form action="#">
          <label className="group" htmlFor="firstName">
            <input
              id="firstName"
              title="First Name"
              placeholder="Enter your first name"
              type="text"
            />
          </label>
          <label className="group" htmlFor="LastName">
            <input
              id="LastName"
              title="Last Name"
              placeholder="Enter your last name"
              type="text"
            />
          </label>
          <label className="group" htmlFor="gender">
            <input
              id="gender"
              title="First Name"
              placeholder="Enter your first name"
              type="text"
            />
          </label>
          <label className="group" htmlFor="firstName">
            <input
              id="con"
              title="First Name"
              placeholder="Enter your first name"
              type="text"
            />
          </label>
        </form>
      </header>
    </div>
  );
}

export default App;
