import Image from "next/Image";
import Advantages from "./Advantages";
import Footer from "./Footer";
import HowWork from "./HowWork";
import Navbar from "./Navbar";

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <div className="mb-5">
                <div className="py-5 ab row">
                    <div className="col-md-6 col-sm-12">
                        <Image src="/9.png" width={550} height={400} alt="Picture of the author" />
                    </div>
                    <div className="col-md-5 col-sm-12 mx-4 text-center ab-right">
                        <h1 style={{color:"white"}}>About Us</h1>
                        <h4 style={{color:"#F76545"}} className="my-3">Get to Know More about Us</h4>
                        <div style={{color:"white"}}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</div>
                    </div>
                </div>
            </div>

            <HowWork />
            <Advantages />
            <Footer />
        </div>
    );
}

export default AboutPage;