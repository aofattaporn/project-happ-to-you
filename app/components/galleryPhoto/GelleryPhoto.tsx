"use client";

import { ListMyWish } from "@/app/types/myWishTypes";

import { Kanit } from "next/font/google";
import CardPhoto from "./CardPhoto";

export const kanit = Kanit({ subsets: ["latin", "thai"], weight: ["400"] });

const GelleryPhoto = () => {
  return (
    <div className="section-black my-4 py-10 text-center">
      <div className={kanit.className}>
        <h1 className="text-xl text-gray-600 font-bold">
          Happy birthday to <span className=" text-pink-300">Pas 🎉</span>
        </h1>
      </div>

      <div className="my-5 p-10 overflow-scroll">
        <ul className="flex flex-row justify-between text-gray-500">
          {ListMyWish.map((element, index) => {
            return (
              <CardPhoto
                key={"key -" + element + "-" + index}
                srcImage={element.img}
                wish={element.wish}
              />
            );
          })}
        </ul>
      </div>
      <div className=" p-8 container mx-auto font-light">
        <h1>
          Actually, I'm not sure which photo to choose to wish you a happy
          birthday. You look so cute in all of them!
          <span className=" text-pink-400">{"(jing jing na)"}</span>
        </h1>
      </div>
    </div>
  );
};

export default GelleryPhoto;
