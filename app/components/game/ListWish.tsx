import { YourWhish } from "./GameWish";

type ListWishProps = {
  listWish: YourWhish[];
};
const ListWish = ({ listWish }: ListWishProps) => {
  return (
    <div>
      {listWish.map((element, index) => {
        return (
          <div
            key={element.date + "-" + index}
            className=" mt-10 bg-white p-2 md:p-4 shadow-2xl rounded-lg grid grid-cols-12 gap-1"
          >
            <p className="col-span-2 p-2 rounded-lg bg-pink-100 ">
              {index + 1}
            </p>
            <h1 className="col-span-6 md:col-span-3 p-2 ">{element.wish}</h1>
            {status ? (
              <h1 className="col-span-4 p-2 text-green-400">
                <span>status : </span>success
              </h1>
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
