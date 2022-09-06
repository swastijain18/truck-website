import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Truckcontext from "../context/Truckcontext";
import React, {useContext} from 'react';
import axios  from "axios";
var FormData = require('form-data');

const search = () => {
  const router = useRouter();
  const q = router.query;

  const findload = async () => {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Authorization": "v6ZjakIAGV4tbwIy8Z1FKItPc7zk2aDpymg6T0B1",
      "Accept": "application/json" 
     }
     
     let formdata = new FormData();
     formdata.append("user_id", "5");
     formdata.append("from", q.from);
     formdata.append("to", q.to);
     formdata.append("truck_id", "1");
     
     let bodyContent =  formdata;
     
     let reqOptions = {
       url: "https://truck.pantheondigitals.com/api/find-load",
       method: "POST",
       headers: headersList,
       data: bodyContent,
     }
     
     let response = await axios.request(reqOptions);
     console.log(response.data);
};
  findload();
return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
      </Head>

      <Navbar />
      <section>
        <div className="row">
          <div className="card my-5 mx-5 col-md-5">
            <div className="d-flex  callb">
              <div className=" my-4 mx-2">
                <Image className=" imgsi" src="/3577799.jpg" alt="Picture of the author" width={50} height={50} />
              </div>
              <div className="my-4 mx-4">
                <h6 className="card-subtitles">Sagar Kumar</h6>
                <h6 className="card-subtitles text-muted">Not Verfified</h6>
              </div>
              <div className=" mx-2 my-3 ">
                <div className=" btn my-3 btns">
                  <div class="row">
                    <div class="col-md-3">
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <div class="col-md-9">
                      <p className="calls text-center">Call Us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-1 text-muted my-1">Location</h6>
              <h6 className="card-title">
                {q.from}-{q.to}
              </h6>
              <h6 className="card-subtitle text-muted my-1">Material</h6>
              <h6 className="card-text">lorem jkcbnijd knck</h6>
              <div className="row">
                <div className="col-md-5">
                  <h6 className="card-subtitle  text-muted my-1">Load</h6>
                  <h6 className="card-text">50 ton</h6>
                </div>
                <div className="col-md-7">
                  <h6 className="card-subtitle text-muted my-1">Price</h6>
                  <h6 className="card-text">5000</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="card my-5 mx-5 col-md-5">
            <div className="d-flex  callb">
              <div className=" my-4 mx-2">
                <Image className=" imgsi" src="/3577799.jpg" alt="Picture of the author" width={50} height={50} />
              </div>
              <div className="my-4 mx-4">
                <h6 className="card-subtitles">Sagar Kumar</h6>
                <h6 className="card-subtitles text-muted">Not Verfified</h6>
              </div>
              <div className=" mx-2 my-3 ">
                <div className=" btn my-3 btns">
                  <div class="row">
                    <div class="col-md-3">
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <div class="col-md-9">
                      <p className="calls text-center">Call Us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-1 text-muted my-1">Location</h6>
              <h6 className="card-title">
                {q.from}-{q.to}
              </h6>

              <h6 className="card-subtitle text-muted my-1">Material</h6>
              <h6 className="card-text">lorem jkcbnijd knck</h6>
              <div className="row">
                <div className="col-md-5">
                  <h6 className="card-subtitle  text-muted my-1">Load</h6>
                  <h6 className="card-text">50 ton</h6>
                </div>
                <div className="col-md-7">
                  <h6 className="card-subtitle text-muted my-1">Price</h6>
                  <h6 className="card-text">5000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Script src="https://kit.fontawesome.com/c378079259.js" crossorigin="anonymous" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />
    </>
  );
};
export default search;