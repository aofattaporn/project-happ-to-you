"use client";

import { type } from "os";
import { FormEvent, useState } from "react";

type YourWhish = {
  wish: string;
  date: Date;
  status: boolean;
};
const GameWish = () => {
  const [yoourWhis, setYourWish] = useState<YourWhish>({
    wish: "",
    date: new Date(),
    status: false,
  });

  const handleYourWhish = () => {
    const newWhish: string = "";
    setYourWish({
      wish: newWhish,
      date: new Date(),
      status: false,
    });
  };

  const onSubmmitData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("test");
  };
  return (
    <>
      <div className="h-96"></div>
      <div className=" text-center p-8  md:p-40 bg-pink-200">
        <form
          onSubmit={onSubmmitData}
          className=" bg-white p-10 md:p-20 shadow-2xl rounded-lg"
        >
          <div className="flex-col justify-center">
            <div className="text-center mb-10 px-5">
              <label className="block mb-2 ">
                <span className="text-xl font-bold text-pink-300">
                  {"Whis "}
                </span>
                anything ~~~
                <p>
                  แกสามารถขออะไรก็ได้นะ พิมพ์เอาไวและกดส่ง ได้ทุกอย่างเลอ ~~
                </p>
              </label>
              <input
                type="text"
                onChange={handleYourWhish}
                id="first_name"
                className="mt-4 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="eg. ข้อให้ได้กินอาหารหมาที่อร่อย ๆ "
                required
              />
            </div>
            <div className=" mt-5">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                send you wish
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="h-96"></div>
    </>
  );
};

export default GameWish;
