"use client";

import { kanit_latin_300 } from "@/app/types/fontsTypes";

const TwitterWish = () => {
  return (
    <div className={kanit_latin_300.className}>
      <div className="my-96 px-16 h-96 text-center flex-col justify-center">
        <div className="text-xl text-gray-600 ka">
          <h1>
            the moment that's you be happy. it's look beautiful mak na :){" "}
          </h1>
        </div>

        <div className="flex justify-center my-16">
          <img className="w-96 tweet cursor-pointer" src="/jpg/tweet.png" />
        </div>
        <div className=" h-96"></div>
      </div>
    </div>
  );
};

export default TwitterWish;
