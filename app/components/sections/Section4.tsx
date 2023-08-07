"use client";

import { FormEvent } from "react";

const Section4 = () => {
  const onSubmmitData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("test");
  };
  return (
    <>
      <div className="h-96"></div>
      <div className=" text-center p-5 md:p-40">
        <form onSubmit={onSubmmitData}>
          <div className="flex-col justify-center">
            <div className="text-center mb-10 px-10">
              <label className="block mb-2 font-medium text-md">
                <span className="text-xl font-bold text-pink-500">
                  {"Whis "}
                </span>
                anything ~~~
                <p>
                  แกสามารถขออะไรก็ได้นะ พิมพ์เอาไวและกดส่ง ได้ทุกอย่างเลอ ~~
                </p>
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="eg. ข้อให้ได้กินอาหารหมาที่อร่อย ๆ "
                required
              />
            </div>
            <div>
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

export default Section4;
