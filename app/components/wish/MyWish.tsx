"use client";

import { kanit_latin_200 } from "@/app/types/fontsTypes";

const MyWish = () => {
  return (
    <div className={kanit_latin_200.className}>
      <div className="h-96"></div>
      <div className="text-center p-5 md:p-40 bg-pink-200 py-40">
        <h1>
          <span className="font-bold text-pink-400 text-lg">
            Happy birthday!
          </span>{" "}
          Although there might be times when sadness and tears appear, I hope
          you&apos;ll also discover moments of happiness and wear a cheerful
          expression. Find joy and keep that smile on your face. Just remember,
          I&apos;ll always be here to stand by you, regardless of what you come
          across or experience. You can rely on me.
        </h1>
      </div>
      <div className="h-96"></div>
    </div>
  );
};

export default MyWish;
