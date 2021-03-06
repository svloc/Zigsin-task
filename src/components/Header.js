import React from "react";
import '../styles/Header.css'

export default function Header() {
  return (
    <>
    <div className="header" style={{backgroundImage:'url(../header-image.png)'}}>
      <div className="header-box">
        <h1 className="header-h">The gift of happiness</h1>
        <p className="header-p">Show your gratitude with one of our gift sets, large and small, <br/>specially designed to spread joy to someone you love. </p>
      <button className="btn-header">shop now</button>
      </div>
      
  </div>
      
    </>
  );
}
