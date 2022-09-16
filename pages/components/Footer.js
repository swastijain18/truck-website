import Image from "next/Image";

const Footer = () => {

  return (
    <div className="px-5 pt-5 mt-4 footer-box">
      <div className="row">
        <div className="col-md-5 col-sm-12 col-lg-5">
          <Image
            src="/img.jpg"
            width={120}
            height={80}
            alt="Picture of the author"
          />
          <div className="my-3 d-none d-md-block">
            On the other hand, we denounce with righteous indignation and
            dislike Some quick example text to build on the card titleSome quick
            example text to build on the card title
          </div>
        </div>
        
        <div className="col-md-6 col-sm-12 col-lg-6">
            <ul style={{listStyleType:"none"}}>
                <li><a href="#" className="styled-list">Home</a></li>
                <li><a href="#" className="styled-list">About</a></li>
                <li><a href="#" className="styled-list">Our Services</a></li>
                <li><a href="#" className="styled-list">Contact Us</a></li>
                
            </ul>
        </div>
      </div>
      <hr />

      <div className="text-center pb-2" style={{fontSize:"13px", color:"grey"}}>
        &copy; Copyright 2022 - Truck All rights reserved.
      </div>
   
    </div>
  );
};

export default Footer;
