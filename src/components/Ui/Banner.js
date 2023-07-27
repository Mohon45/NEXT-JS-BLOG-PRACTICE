import { Carousel } from "antd";
import bannerImage from "@/assets/images/post-landscape-5.jpg";
import Image from "next/image";

const Banner = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div>
      <Carousel autoplay>
        <div>
          <Image src={bannerImage} alt="f"></Image>
          {/* <img src={bannerImage} alt="f" /> */}
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
