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
          Even though your birthday this year might be accompanied by sadness
          and occasional tears, I still want you to find moments of joy and wear
          smiles on your face. Be extremely happy and keep smiling. Remember, I
          will always be there to support you, no matter what you find or face.
          You can count on me.
        </h1>
      </div>
      <div className="h-96"></div>
    </div>
  );
};

export default MyWish;
