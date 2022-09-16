import Image from "next/Image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const allDetails = [
  {
    Name: "Swasti Jain",
    Location:"Jaipur",
    Img: "/truck.jpg",
    Text: "Some quick example text to build on the card title Some quick example text to build on the card title",
    Rating: "4",
  },
  {
    Name: "John",
    Location:"Pune",
    Img: "/img.jpg",
    Text: "Some quick example text to build on the card title Some quick example text to build on the card title",
    Rating: "4",
  },
  {
    Name: "Swasti Jain",
    Location:"Delhi",
    Img: "/truck.jpg",
    Text: "Some quick example text to build on the card title Some quick example text to build on the card title",
    Rating: "4",
  },
  {
    Name: "Rohan Jain",
    Location:"Uttar Pradesh",
    Img: "/img.jpg",
    Text: "xjbcjbc  qsagdhahxnak assjhadj Some quick example text to build on the card title",
    Rating: "4",
  },
  {
    Name: "John",
    Location:"Assam",
    Img: "/img.jpg",
    Text: "On the other hand, we denounce with righteous indignation and dislike Some quick example text to build on the card title",
    Rating: "4",
  },
];

const Testimonials = (props) => {
  return (
    <div className="text-center my-5 py-3 test-box">
      <h1 className="my-4">Testimonials</h1>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={2000}
        containerclassName="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        deviceType={props.deviceType}
        itemclassName="carousel-item-padding-40-px"
      >
        {allDetails.map((e) => {
          return (
            <div
              className="p-4 m-3 test-card"
            >
              <div className="d-flex justify-content-center test-img">
                <Image
                  src={e.Img}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                  style={{borderRadius:"50%", marginTop:"1rem"}}
                  
                />
              </div>
              <div className="my-3">
                  <h4><b>{e.Name}</b></h4>
                  
                </div>
              <div className="card-text my-3 mx-4">{e.Text}</div>
              {/* <div><b>{e.Rating} </b>Stars</div> */}
            </div>
          );
        })}

      </Carousel>
      
    </div>
  );
};

export default Testimonials;
