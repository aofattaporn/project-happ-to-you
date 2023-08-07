"use client";

import Link from "next/link";
import CardPhoto from "../galleryPhoto/CardPhoto";
import classSection2 from "./section2.module.css";

const TwitterWish = () => {
  return (
    <div className="my-96 px-16 h-96 text-center flex-col justify-center">
      <div className="text-xl text-gray-600 font-bold">
        <h1>the moment that's you be happy. it's look beautiful mak na :) </h1>
      </div>

      <div className="flex justify-center my-16">
        <img className="w-96 tweet cursor-pointer" src="/jpg/tweet.png" />
      </div>
      <div className=" h-96"></div>
    </div>
  );
};

export default TwitterWish;
