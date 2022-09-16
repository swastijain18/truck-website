import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";
import Image from "next/Image";

const allImg = [
  { "img": "/truck.jpg" },
  { "img": "/truck.jpg" },
  { "img": "/truck.jpg" },
  { "img": "/truck.jpg" },
  { "img": "/truck.jpg" },
];

const LandingPartners = () => {
  return (
    <div className="text-center my-5">
      <h1 className="my-3">Landing Partners</h1>

      <div className="land-maq">

        <Marquee velocity={10}>
          {allImg.map((e) => {
            return (
              <Image
                src={e.img}
                width={250}
                height={150}
                alt="Picture of the author"
              />
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default LandingPartners;
