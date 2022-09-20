import Image from "next/Image";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Service = () => {
    return (
        <div>
            <Navbar />
            <section>
                <div className="ser-top row justify-content-center">
                    <h3 className="col-lg-6 col-sm-12 ser-text1">
                        BOOK TRUCK IN AFFORDABLE PRICE WITH MOST CONVINIENT WAY
                    </h3>
                    <div className="col-lg-5 col-sm-12">
                        <Image src="/5.png" width={750} height={470} alt="Picture of the author" />
                    </div>
                </div>
            </section>
            <section>

                <div className="row justify-content-center ser-low">
                    <div className="col-lg-5 col-sm-12 d-none d-md-block">
                        <Image src="/4.png" width={750} height={470} alt="Picture of the author" />
                    </div>
                    <div className="col-lg-6 col-sm-12 ser-text2">

                        <h2>
                            BOOK TRUCK IN AFFORDABLE PRICE WITH MOST CONVINIENT WAY
                        </h2>
                        <div className="my-3">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-center service1">
                <h2 className="mb-4">BOOK TRUCK IN <span style={{color:"#F76545"}}>AFFORDABLE PRICE</span>  WITH MOST CONVINIENT WAY</h2>
                <div className="mb-4">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will</div>
            </section>
            <Image src="/6.png" width={1750} height={300} alt="Picture of the author" />
<div >

            <Footer />
</div>
        </div>
    );
}

export default Service;