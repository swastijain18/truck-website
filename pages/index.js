import Head from "next/Head";
import Script from "next/Script";
import styles from "../styles/Home.module.css";
import About from "./components/About";
import Faq from "./components/Faq's";
import Footer from "./components/Footer";
import Truckstate from "./context/Truckstate";
import Banner from "./components/Banner";
import HowWork from "./components/HowWork";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import LandingPartners from "./components/LandingPartners";
import Download from "./components/Download";
import Advantages from "./components/Advantages";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Truck</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
      </Head>

      <Truckstate>
        <Navbar />
        <Banner />
        <LandingPartners />
        <HowWork />
        <About />
        <Advantages/>
        <Download/>
        <Testimonials />
        <Faq />
        <Footer />
      </Truckstate>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossOrigin="anonymous"
      />
      <Script
        src="https://kit.fontawesome.com/c378079259.js"
        crossOrigin="anonymous"
      />
      <Script
        src="https://kit.fontawesome.com/c378079259.js"
        crossOrigin="anonymous"
      />
    </div>
  );
}
