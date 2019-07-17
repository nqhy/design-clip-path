import React from 'react';
import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="profiloTitle">
            <span class="information">i</span>
            <p className="title">
              My
            </p> 
            <p className="subTitle">
              Profilo
            </p>
        </div>
        <div className="profiloContent">
          <div className="content">
              <p className="nameTitle">
                My Name is Ziik
              </p> 
              <p className="role">
                I'm a Sofware Developer
              </p>
          </div>
          <div className="avatar" />
        </div>
        <div className="buttonContact">
          <span className="buttonContactText">
            Contact Me
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
