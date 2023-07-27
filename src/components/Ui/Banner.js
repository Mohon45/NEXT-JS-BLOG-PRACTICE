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
        <div className="w-[100%]">
          <Image
            className="w-[100%] h-[500px] rounded-md"
            src={bannerImage}
            alt="f"
          ></Image>
          <div className="absolute top-56 ml-5 text-white w-[700px]">
            <h1 className="text-4xl font-semibold">
              13 Amazing Poems from Shel Silverstein with Valuable Life Lessons
            </h1>
            <p className="text-lg mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem ab labore nam laudantium? Amet praesentium ea
              dolore ducimus, id sit?
            </p>
          </div>
        </div>
        <div className="w-[100%]">
          <Image
            className="w-[100%] h-[500px] rounded-md"
            src={bannerImage}
            alt="f"
          ></Image>
          <div className="absolute top-56 ml-5 text-white w-[700px]">
            <h1 className="text-4xl font-semibold">
              17 Amazing Poems from Shel Silverstein with Valuable Life Lessons
            </h1>
            <p className="text-lg mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem ab labore nam laudantium? Amet praesentium ea
              dolore ducimus, id sit?
            </p>
          </div>
        </div>
        <div className="w-[100%]">
          <Image
            className="w-[100%] h-[500px] rounded-md"
            src={bannerImage}
            alt="f"
          ></Image>
          <div className="absolute top-56 ml-5 text-white w-[700px]">
            <h1 className="text-4xl font-semibold">
              10 Amazing Poems from Shel Silverstein with Valuable Life Lessons
            </h1>
            <p className="text-lg mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem ab labore nam laudantium? Amet praesentium ea
              dolore ducimus, id sit?
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
