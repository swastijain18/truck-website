import Image from "next/Image";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Card, Button } from "react-bootstrap"

const Blog = () => {
    return (
        <div>
            <Navbar />
            <section>
                <div className="blog-container text-center">
                    <h1 style={{ color: "white" }}>Get Updates With Our Blogs</h1>
                </div>
                <div className="d-flex justify-content-center">

                    <Card style={{ width: '18rem', margin:"2rem" }}>
                        <Card.Img variant="top" src="/truck.jpg" />
                        <Card.Body>
                            <Card.Title>Blog Name</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <a href="">Read More . . .</a>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' , margin:"2rem" }}>
                        <Card.Img variant="top" src="/truck.jpg" />
                        <Card.Body>
                            <Card.Title>Blog Name</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <a href="">Read More . . .</a>
                        </Card.Body>
                    </Card>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Blog;