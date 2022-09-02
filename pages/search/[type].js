import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { render } from "react-dom";

import Image from "next/image";
import Navbar from "../components/Navbar";

const search = () => {
  const router = useRouter();
  const q = router.query;

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
      </Head>
  <Navbar/>
      <section>
        <div className="card my-5 mx-5" style={{ width: "18rem" }}>
          <div class="row">
            <div class="col-md-3">
              <Image
                className="my-2 mx-1"
                src="/3577799.jpg"
                alt="Picture of the author"
                width={50}
                height={50}
              />
            </div>
            <div class="col-md-5 mt-2">
              <h6 className="card-subtitles">Sagar Kumar</h6>
              <h6 className="card-subtitles text-muted">Not Verfified</h6>
            </div>
            <div class="col-md-4">
              <div class="box my-3">
                <p>Call me</p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h6 className="card-subtitle mb-1 text-muted">Location</h6>
            <h6 className="card-title">
              {q.from}-{q.to}
            </h6>

            <h6 className="card-subtitle text-muted">Material</h6>
            <h6 className="card-text">lorem jkcbnijd knck</h6>
            <div class="row">
              <div class="col-md-5">
                <h6 className="card-subtitle  text-muted">Load</h6>
                <h6 className="card-text">50 ton</h6>
              </div>
              <div class="col-md-7">
                <h6 className="card-subtitle text-muted">Price</h6>
                <h6 className="card-text">5000</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossOrigin="anonymous"
      />
    </>
  );
};
export default search;
