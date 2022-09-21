import Image from "next/Image";


const About = () => {
    return (
        <div className="my-5">
            <div className="row container py-3">
                <div className="col-md-5 col-sm-12">
                    <Image src="/8.png" width={550} height={400} alt="Picture of the author" />
                </div>
                <div className="col-md-6 col-10 text-center mx-4">
                    <h1>About Us</h1>
                    <h4 style={{ color: "#F76545" }} className="my-4">Get to More about the services</h4>
                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best,
                </div>
            </div>
        </div>
    );
}

export default About;