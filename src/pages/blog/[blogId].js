import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import blogImgae from "@/assets/images/post-landscape-5.jpg";

const BlogDetailsPage = () => {
  const router = useRouter();
  const { blogId } = router.query;
  return (
    <div className="">
      <h1 className="text-4xl font-semibold">This is your Blog Title Here</h1>
      <p className="text-md font-semibold mt-3 mb-2">Published: 27-07-2023</p>
      <Image className="w-[100%] h-[500px] rounded-md" src={blogImgae} />
      <p className="w-[80%] mx-auto my-4 text-justify text-lg">
        Sunt reprehenderit, hic vel optio odit est dolore, distinctio iure
        itaque enim pariatur ducimus. Rerum soluta, perspiciatis voluptatum
        cupiditate praesentium repellendus quas expedita exercitationem tempora
        aliquam quaerat in eligendi adipisci harum non omnis reprehenderit
        quidem beatae modi. Ea fugiat enim libero, ipsam dicta explicabo nihil,
        tempore, nulla repellendus eos necessitatibus eligendi corporis cum?
        Eaque harum, eligendi itaque numquam aliquam soluta. Explicabo
        perspiciatis, laborum provident voluptates illum in nulla consectetur
        atque quaerat excepturi quisquam, veniam velit ex pariatur quos
        consequuntur? Excepturi reiciendis perferendis, cupiditate dolorem eos
        illum amet. Beatae voluptates nemo esse ratione voluptate, nesciunt
        fugit magnam veritatis voluptas dignissimos doloribus maiores? Aliquam,
        dolores natus exercitationem corrupti blanditiis, consequuntur nihil
        nobis sed voluptatibus maiores sunt, illo provident aliquid laborum.
        Vitae, ut. Reprehenderit aut sed doloribus blanditiis, aspernatur magni?
        In molestias rem, similique ut esse repudiandae quod recusandae dolores
        neque earum omnis at, suscipit fuga? Minima qui veniam deserunt quisquam
        error amet at ratione nesciunt porro quis placeat repudiandae
        voluptatibus officiis fuga necessitatibus, expedita officia adipisci
        eaque labore accusamus? Nesciunt repellat illo exercitationem facilis
        similique quaerat, quis sequi? Praesentium nulla ipsam dolor. Dolorum,
        incidunt! Adipisci harum itaque maxime dolores doloremque porro eligendi
        quis, doloribus vel sit rerum sunt obcaecati nam suscipit nulla vitae
        alias blanditiis aliquam debitis atque illo modi et placeat. Ratione
        iure eveniet provident. Culpa laboriosam sed ad quia. Corrupti, earum,
        perferendis dolore cupiditate sint nihil maiores iusto tempora nobis
        porro itaque est. Ut laborum culpa assumenda pariatur et perferendis?
        Est soluta veritatis laboriosam, consequuntur temporibus asperiores,
        fugit id a ullam sed, expedita sequi doloribus fugiat. Odio et
        necessitatibus enim nam, iste reprehenderit cupiditate omnis ut iure
        aliquid obcaecati, repellendus nemo provident eveniet tempora minus!
        Voluptates aut laboriosam, maiores nihil accusantium, a dolorum quaerat
        tenetur illo eum culpa cum laudantium sunt doloremque modi possimus
        magni? Perferendis cum repudiandae corrupti porro.
      </p>
    </div>
  );
};

export default BlogDetailsPage;

BlogDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
