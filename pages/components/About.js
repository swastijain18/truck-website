import Image from "next/Image";


const About = () => {
    return (
        <div className="my-5">
            <div className="d-flex py-3">
                <div className="col-md-6 d-none d-md-block">
                    <Image src="/truck.jpg" width={550} height={400} alt="Picture of the author"/>
                </div>
                <div className="container col-md-5 mx-4">
                    <h3>About Us</h3>
                    <h5 style={{color:"orange"}} className="my-4">Get to More about the services</h5>
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, 
                </div>
            </div>
        </div>
    );
}

export default About;