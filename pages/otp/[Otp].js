import Head from "next/Head";
import React from "react";
import Script from "next/script";
import Router from "next/router";
import { useState ,useEffect } from "react";
var FormData = require('form-data');
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import Modal from "../User/Modal";

export const Otp = () => {
const router = useRouter();
  const q = router.query;

  const verifyotp = () => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var formdata = new FormData();
    formdata.append("user_id", q.Otp);
    var val = formdata.append("otp", `${otp.otp1}`+`${otp.otp2}`+`${otp.otp3}`+`${otp.otp4}`);
   

  
    // console.log(`${otp.otp1}`+`${otp.otp2}`+`${otp.otp3}`+`${otp.otp4}`);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://truck.pantheondigitals.com/api/verifyotp", requestOptions)
      .then((response) => response.json())
      .then((result) => {console.log(result)
        if(result.message == "Login successfull"){
          
      setCookie('user',result.data.user[0].id, {
        path: "/",
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      })
          let url = "http://localhost:3000/User/Profile"
          Router.push(url)
      }else{
        alert("Invalid credentails");
      }

      })
      .catch((error) => console.log("error", error));
};

const Redirect = (e) => {
  e.preventDefault();
  router.push(`/${data}`);
};
  const [otp, setotp] = useState({
    value: "",
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    disable: true,
  });
  const handleChange = (value1, event) => {
    setotp({...otp, [value1]: event.target.value });
  };
  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
        
      }
    } else {
      // console.log("next");
      const next = elmnt.target.tabIndex;
      if (next < 4) {
        elmnt.target.form.elements[next].focus();
        
      }
    }
  };
  return (
    <>
      <Head>
        <title>OTP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="row">
        <div className="col-md-6 mt-5">
          <div className="my-5 mx-5 photod"></div>
        </div>
        <div className="col-md-6">
          <div className="my-5 mx-5 divs">
            <h1 className="text-center">Verify the OTP</h1>
            <h5 className="text-muted text-center my-3">
              Enter the OTP you have recieved on your phone number
            </h5>

            <form>
              <div className="my-5 d-flex justify-content-center">
                <input
                  name="otp1"
                  type="text"
                  autoComplete="off"
                  className="otpInput inpsotp"
                  value={otp.otp1}
                  onChange={(e) => handleChange("otp1", e)}
                  tabIndex="1"
                  maxLength="1"
                  onKeyUp={(e) => inputfocus(e)}
                />
                <input
                  name="otp2"
                  type="text"
                  autoComplete="off"
                  className="otpInput inpsotp"
                  value={otp.otp2}
                  onChange={(e) => handleChange("otp2", e)}
                  tabIndex="2"
                  maxLength="1"
                  onKeyUp={(e) => inputfocus(e)}
                />
                <input
                  name="otp3"
                  type="text"
                  autoComplete="off"
                  className="otpInput inpsotp"
                  value={otp.otp3}
                  onChange={(e) => handleChange("otp3", e)}
                  tabIndex="3"
                  maxLength="1"
                  onKeyUp={(e) => inputfocus(e)}
                />
                <input
                  name="otp4"
                  type="text"
                  autoComplete="off"
                  className="otpInput inpsotp"
                  value={otp.otp4}
                  onChange={(e) => handleChange("otp4", e)}
                  tabIndex="4"
                  maxLength="1"
                  onKeyUp={(e) => inputfocus(e)}
                />
              </div>
            </form>
            <div className="text-center my-3">
              <p>
                Didn't recieve Otp code{" "}
                <a
                  style={{
                    color: " #F76545",
                    textDecorationLine: "underline  ",
                  }}
                >
                  Resend Code in{" "}
                </a>
              </p>
            </div>
            <div className="text-center">
              
                <a type="button" style={{ textdecoration: "none" }} onClick={verifyotp}>
                <button
                type="button"
                className="btn btn-cus my-5 my-sm-0 px-4 py-2 bt btnlogin primary"
              >
                  Verify</button>
                </a>
              
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
  );
};
export default Otp;
