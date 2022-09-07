import React from 'react'
import Script from 'next/script'
import { useEffect, useRef } from 'react';
var ReactDOM = require('react-dom');

const sidebar = () => {
  
  function openNav() {
    document.getElementById('mySidenav').style.width = "250px"
  }

  function closeNav() {
    document.getElementById('mySidenav').style.width = "0";
  }


  return (
    <>
      <div id="mySidenav" className="sidenav">
        <a href="" onClick={closeNav} className="closebtn">&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      {/* <!-- Use any element to open the sidenav --> */}
      <span onClick={openNav}>&#9776; open</span>

      {/* this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page --> */}
      <div id="main">
        ...
      </div>
    </>
  )
}

export default sidebar