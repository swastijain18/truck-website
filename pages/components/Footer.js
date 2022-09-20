import Image from "next/Image";

const Footer = () => {

  return (
    <div className="px-5 pt-3 footer-box">
      <div className="row">
        <div className="col-md-5 col-sm-12 col-lg-6">
          <Image
            src="/img.jpg"
            width={120}
            height={80}
            alt="Picture of the author"
          />
          <div className="my-3 d-none d-md-block">
            On the other hand, we denounce with righteous indignation and
            dislike Some quick example text
          </div>
        </div>

        <div className="col row">
          <ul className="col-md-6 col-sm-12 col-lg-4" style={{ listStyleType: "none" }}>
            <li><a href="/" className="styled-list">Home</a></li>
            <li><a href="/component/AboutPage" className="styled-list">About</a></li>
            <li><a href="/components/Service" className="styled-list">Services</a></li>
            <li><a href="/components/ContactPage" className="styled-list">Contact</a></li>

          </ul>
          <ul className="col-md-6 col-sm-12 col-lg-4" style={{ listStyleType: "none" }}>
            <li><a href="/components/Blog" className="styled-list">Blogs</a></li>
            <li><a href="#" className="styled-list">Privacy policy</a></li>
            <li><a href="#" className="styled-list">Term and Conditions</a></li>
          </ul>

        </div>
      </div>
      
      <hr />

      <div className="text-center pb-2" style={{ fontSize: "13px", color: "#5e5959" }}>
        &copy; Copyright 2022 - Truck All rights reserved.
      </div>

    </div>
  );
};

export default Footer;
