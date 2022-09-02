import { Card } from "react-bootstrap";
import Image from "next/Image";

const WhyCard = () => {
  return (
    <div>
       {/* <Image src="/truck.jpg" width={550} height={400} alt="Picture of the author"/> */}
      <div className="why-card my-2">
        <Card style={{ width: "18rem" }} className="mx-2 col-md-3 col-sm-6">
          
          <Card.Body style={{ textAlign: "left" }}>
           
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default WhyCard;
