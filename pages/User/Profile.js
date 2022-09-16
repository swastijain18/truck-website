import React from "react";
import Router from "next/router";
import Image from "next/Image";
import Navbarp from "./Navbarp";
import Head from "next/Head";
import Script from "next/script";
import { getCookie } from "cookies-next";
import Modal from "./Modal";
import { useState ,useEffect } from "react";
import nextConfig from "../../next.config";


const Profile = () => {
  useEffect(() => {
    if(getCookie("user") === undefined){
   Router.push("../Login")
   }else{
    profile();
   }
 }, [])
  const [users, setuser] = useState({});
  const profile = () => {
   var myHeaders = new Headers();
   myHeaders.append("Accept", "application/json");
   myHeaders.append(
     "Authorization",
     "Bearer 4|C8aSyCbFEQcnBtZmLGvW3HXWj3LeZoid5kNJR2M5"
   );
   var requestOptions = {
     method: "GET",
     headers: myHeaders,
     redirect: "follow",
   };
 
   fetch("api/profile", requestOptions)
     .then((response) => response.json())
     .then((result) => setuser(result.user))
     .catch((error) => console.log("error", error));
 };
 

  const openNav = () => {
    // if( document.getElementById('sidenav').style.width == "6%"){
    document.getElementById("sidenav").style.width = "20%";
    document.getElementById("mainbox").style.width = "80%";
    document.getElementById("burger").style.display = "none";
    document.getElementById("cross").style.display = "block";
    document.getElementById("cross").style.transitionDelay = "2s";
    // }
  };
  const closeNav = () => {
    document.getElementById("sidenav").style.width = "6%";
    document.getElementById("mainbox").style.width = "94%";
    document.getElementById("burger").style.transition = "1s";
    document.getElementById("burger").style.display = "block";
    document.getElementById("cross").style.display = "none";
  };
  return (
    <>
      <Head>
        <title>Your Dasboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
      </Head>
      <div id="maincontainer">
        <div
          id="sidenav"
          className=""
          style={{ height: "100vh", backgroundColor: "rgb(255,138,41)" }}
        >
          <Navbarp opennav={openNav} closeNav={closeNav} />
        </div>
        <div id="mainbox">
          <div className="my-2">
            <h2 class="h-center text-center">Profile</h2>
          </div>
          <div className="text-center">
            <Image
              src="/profile.jpg"
              height={100}
              width={100}
              className="imgp"
            />
            <i className="fa-solid fa-pen-to-square fonti"></i>
          </div>
          <div>
            <div class="card" style={{ width: "100%" }}>
              <div class="card-body">
                <h5 class="card-title text-center fa-2x">{users.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{users.mobile}</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal/>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossOrigin="anonymous"
      />
      <Script
        src="https://kit.fontawesome.com/c378079259.js"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default Profile;
