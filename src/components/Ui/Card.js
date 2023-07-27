import { Card } from "antd";
import Image from "next/image";
import blogImgae from "@/assets/images/post-landscape-5.jpg";
const { Meta } = Card;

const BlogCard = () => {
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 300,
          margin: "0 auto",
        }}
        cover={<Image alt="example" src={blogImgae} width="50" height="50" />}
      >
        <div>
          <h1 className="text-xl font-bold">Blog Main Title Here</h1>
          <h3 className="text-lg">
            <span className="font-bold">Author :</span> Tonmoy Vai
          </h3>
          <p className="text-lg">Published : 27-07-2023</p>
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            suscipit reiciendis fugit magni quaerat maiores quisquam illo
            doloribus expedita placeat.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default BlogCard;
