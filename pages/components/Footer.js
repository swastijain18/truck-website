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
                <li><a href="#" className="styled-list">About Us</a></li>
                <li><a href="#" className="styled-list">Our Services</a></li>
                <li><a href="#" className="styled-list">Contact</a></li>
                
            </ul>
        </div>
      </div>
      <hr />

      <p class="text-center">
        &copy; Copyright 2022 - Truck All rights reserved.
      </p>
   
    </div>
  );
};

export default Footer;
