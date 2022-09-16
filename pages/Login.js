import React from "react";
import Navbar from "./components/Navbar";
import Script from "next/script";
import { useState, useEffect } from "react";
var FormData = require('form-data');
import Link from 'next/link'
import Router from 'next/router'

export const Login = () => {
  const [concodes, setcodes] = useState([]);

  const handleChange = (e) => {
    setnum(e.target.value)
  }
  const [num, setnum] = useState("");


  const login = () => {
    if ((num.length > 9) && (concodes != "")) {

      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      var formdata = new FormData();
      formdata.append("mobile", num);
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch("https://truck.pantheondigitals.com/api/login", requestOptions)
        .then((response) => response.json())
        .then((result) => Router.push("/otp/" + result.user_id)
        )
        .catch((error) => console.log("error", error));
    }
    else {
      alert("Enter Valid Number with country code")
    }
  };


  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://truck.pantheondigitals.com/api/country-code", requestOptions)
      .then((response) => response.json())
      .then((result) => setcodes(result.data))
      .catch((error) => console.log("error", error));

  }, [])

  // console.log(concodes);
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-6 mt-5">
          <div className="my-5 mx-5 photod"></div>
        </div>
        <div className="col-md-6">
          <div className="my-5 mx-5 divs">
            <h1 className="text-center">WElCOME TO TRUCK</h1>
            <h5 className="text-muted text-center my-3">
              Enter mobile number to continue and signup to truck
            </h5>
            <div className="d-flex justify-content-center">
              <input type="text" className="inpn my-5" name="code" list="country" required />
              <datalist id="country">
                {concodes.map((e) => {
                  return (
                    <option>{e}</option>
                  )
                })}

              </datalist>
              <div className="my-5 px-2">
                <input
                  type="number"
                  name="number"
                  maxLength={10}
                  className=" inps"
                  id="number"
                  aria-describedby="numberhelp"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-cus my-5 my-sm-0 px-4 py-2 btnlogin" id="btlogin" onClick={login}>
                <a type="button" style={{ textdecoration: "none" }}>
                  Send OTP
                </a>
              </button>
            </div>
            <div className="text-center my-3">
              <p>
                By providing my phone number,I hereby agree the{" "}
                <a style={{ color: " #F76545" }}>terms of services</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossOrigin="anonymous"
      />
    </>
  )
}
export default Login;
