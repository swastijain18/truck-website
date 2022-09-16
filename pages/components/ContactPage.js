import ContactCard from "./ContactCard";
import Download from "./Download";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ContactPage = () => {

    const allCard = [
        {
            icon: "/call.svg",
            title: "Call",
            content: "Get Personalized Help, Contact Us By Filling The Form!",
        },
        {
            icon: "/mail.svg",
            title: "Mail",
            content: "Get Personalized Help, Contact Us By Filling The Form!",
        },
        {
            icon: "/address.svg",
            title: "Location",
            content: "Get Personalized Help, Contact Us By Filling The Form!",
        },


    ]


    let onSubmit = () => {
        alert("Submitted")
    }

    return (
        <div>
            <Navbar />
            <div>
                <h1 className="contact-head">Get Personalized Help, Contact Us By Filling The Form!</h1>
            </div>

            <div class="container">
                <div class="card">
                    <div class="form">
                        <div class="left-side">
                            <div class="top">

                                <b class="col-lg-12">
                                    We are invested in our client's success and our consultants career
                                    so we keep looking for the opportunities where your skills and
                                    passion shoot up!!
                                </b>
                                <h3>Download Our App</h3>
                                <button class="button1" type="submit">

                                    <a type="button" href="#">
                                        Download
                                    </a>
                                </button>


                            </div>


                            <div class="last">
                                <span>
                                    <i class="fa fa-facebook-f"></i>
                                </span>
                                <span>
                                    {" "}
                                    <i class="fa fa-twitter"></i>
                                </span>
                                <span>
                                    <i class="fa fa-instagram"></i>
                                </span>
                                <span>
                                    <i class="fa fa-linkedin"></i>
                                </span>
                            </div>
                        </div>
                        <div class="right-side">
                            <div class="card-details">
                                <div class="input-group">
                                    <div class="input">
                                        <input type="text" required="required" />
                                        <span>Name</span>
                                    </div>

                                    <div class="input">
                                        <input type="text" required="required" />
                                        <span>E-mail</span>
                                    </div>
                                    <div class="input">
                                        <input type="text" required="required" />
                                        <span>Phone no.</span>
                                    </div>
                                    <div class="input">
                                        <input type="text" required="required" />
                                        <span>Message</span>
                                    </div>

                                </div>
                            </div>


                            <button className="btn btn-cus my-2 my-sm-0 px-4 py-2 btnl"> <a
                                type="button" style={{ "color": "white", "textdecoration": "none" }} onClick={onSubmit}
                            >Submit</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mx-5">

                {allCard.map((e) => {
                    return (
                        <ContactCard text={e.content} head={e.title} img={e.icon} />
                    );
                })}

            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14022.992226681426!2d77.1981701!3d28.5172269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x60863f370d4750c4!2sPantheon%20digital!5e0!3m2!1sen!2sin!4v1662980430786!5m2!1sen!2sin" width="100%" height="300" allowfullscreen="" loading="lazy" style={{ marginTop: "1rem" }} referrerpolicy="no-referrer-when-downgrade"></iframe>
            <Footer />
        </div>
    );
};

export default ContactPage;