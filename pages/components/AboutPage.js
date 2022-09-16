import Image from "next/Image";
import Footer from "./Footer";
import HowWork from "./HowWork";
import Navbar from "./Navbar";

const AboutPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="mb-5">
            <div className="d-flex justify-content-center py-5 ab">
                <div className="col-md-6 d-none d-md-block img">
                    <Image src="/truck.jpg" width={550} height={400} alt="Picture of the author"/>
                </div>
                <div className="col-md-4 mx-4 text-center">
                    <h1>About Us</h1>
                    <h4  className="my-4">Get to More about the services</h4>
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. 
                </div>
            </div>
        </div>

        <HowWork/>
        <Footer/>
        </div>
    );
}

export default AboutPage;