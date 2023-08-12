import { YourWish } from "@/app/types/myWishTypes";

type ListWishProps = {
  listWish: YourWish[];
};

import { Kanit } from "next/font/google";

export const kanit_300 = Kanit({ subsets: ["latin", "thai"], weight: ["300"] });
const ListWish = ({ listWish }: ListWishProps) => {
  return (
    <div className={kanit_300.className}>
      {listWish.map((element, index) => {
        return (
          <div
            key={`key-${element.date}-${index}`}
            className=" mt-10 bg-white p-2 md:p-4 shadow-2xl rounded-lg grid grid-cols-12 gap-1"
          >
            <p className="col-span-2 p-2 rounded-lg bg-pink-100 ">
              {index + 1}
            </p>
            <h1 className="col-span-6 md:col-span-3 p-2 ">{element.wish}</h1>
            {element.status ? (
              <h1 className="col-span-4 p-2 text-green-400">success</h1>
            ) : (
              <h1 className="col-span-4 p-2 text-blue-400">pending</h1>
            )}
            <h1 className="col-span-12 md:col-span-3 p-2  text-gray-300 bg-gray-50">
              {new Date(element.date.seconds * 1000).toDateString()}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default ListWish;
