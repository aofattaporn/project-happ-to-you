"use client";

import Link from "next/link";
import CardPhoto from "./CardPhoto";

const GelleryPhoto = () => {
  return (
    <div className="section-black my-4 py-10 text-center">
      <p>“pls try to tap. in your pic :P”</p>
      <div className="my-5 p-10 overflow-scroll">
        <ul className="flex flex-row justify-between">
          <CardPhoto srcImage={"/jpg/pas/img1.jpg"} />
          <CardPhoto srcImage={"/jpg/pas/img2.jpg"} />
          <CardPhoto srcImage={"/jpg/pas/img3.jpg"} />
          <CardPhoto srcImage={"/jpg/pas/img4.jpg"} />
          <CardPhoto srcImage={"/jpg/pas/img5.jpg"} />
          <CardPhoto srcImage={"/jpg/pas/img6.jpg"} />
          <CardPhoto srcImage={"/jpg/pas/img7.jpg"} />
          <CardPhoto srcImage={"/jpg/pas/img1.jpg"} />
        </ul>
      </div>
      <div className=" p-8 container mx-auto">
        <h1>
          "Actually, I'm not sure which photo to choose to wish you a happy
          birthday. You look so cute in all of them! [jing jing na]"
        </h1>
      </div>
    </div>
  );
};

export default GelleryPhoto;
