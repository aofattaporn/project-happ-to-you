"use client";

import Link from "next/link";
import CardPhoto from "../CardPhoto";

const Section1 = () => {
  return (
    <div className="section-black my-4 py-10 text-center">
      <p>“pls try to tap. in your pic :P”</p>
      <div className="my-5 p-10 overflow-scroll">
        <ul className="flex flex-row justify-between">
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
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

export default Section1;
