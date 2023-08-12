"use client";

import { useEffect, useState } from "react";
// import { db } from "@/app/firebase/ConnectFirebase";
import {
  Timestamp,
  addDoc,
  collection,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "@/app/firebase/ConnectFirebase";
import ListWish, { kanit_300 } from "./ListWish";
import { YourWish } from "@/app/types/myWishTypes";

enum Status {
  INITIAL,
  LOADING,
  FAILS,
  SUCCCESS,
}

const GameWish = () => {
  const [listWish, setListWish] = useState<YourWish[]>([]);
  const [inputValue, setInputValue] = useState(""); // State for input value
  const [status, setStatus] = useState<Status>(Status.INITIAL);

  useEffect(() => {
    const fetchData = async () => {
      setStatus(Status.LOADING);
      try {
        const querySnapshot = await getDocs(
          collection(getFirestore(app), "happ")
        );
        const wishesData: YourWish[] = [];
        await querySnapshot.forEach((doc) => {
          wishesData.push(doc.data() as YourWish);
        });
        setListWish(wishesData);
        setStatus(Status.SUCCCESS);
      } catch (error) {
        setStatus(Status.FAILS);
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(Status.LOADING);

    const newWish: YourWish = {
      wish: inputValue,
      date: Timestamp.now(),
      status: false,
    };

    try {
      // Add the newWish to the Firestore collection
      const docRef = await addDoc(
        collection(getFirestore(app), "happ"),
        newWish
      );
      setStatus(Status.SUCCCESS);

      // Update the local state with the new wish
      setListWish((prevList) => [...prevList, newWish]);
      setInputValue("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className={kanit_300.className}>
      <div className="h-96"></div>
      <div className="text-center p-8  md:p-40 bg-pink-200">
        <form
          onSubmit={handleSubmit}
          className=" bg-white p-10 md:p-20 shadow-2xl rounded-lg"
        >
          <div className="flex-col justify-center">
            <div className="text-center mb-10 px-5">
              <label className="block mb-2 ">
                <span className="text-xl font-bold text-pink-300">
                  {"Wish "}
                </span>
                anything ~~~
                <p>
                  แกสามารถขออะไรก็ได้นะ พิมพ์เอาไวและกดส่ง ได้ทุกอย่างเลอ ~~
                </p>
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                id="first_name"
                className="mt-4 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="eg. ข้อให้ได้กินอาหารหมาที่อร่อย ๆ "
                required
              />
            </div>
            <div className=" mt-5">
              {status === Status.LOADING ? (
                <div className=" flex justify-center">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              ) : null}

              {status === Status.INITIAL || status === Status.SUCCCESS ? (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  send you wish
                </button>
              ) : null}
            </div>
          </div>
        </form>

        {/* // input-data-when whis  */}
        {status === Status.LOADING ? (
          <div className=" mt-10 bg-white p-2 md:p-4 shadow-2xl rounded-lg grid grid-cols-9 gap-4 h-20 animate-pulse "></div>
        ) : null}
        {status === Status.SUCCCESS ? (
          <ListWish listWish={listWish}></ListWish>
        ) : null}
      </div>
      <div className="h-96"></div>
    </div>
  );
};

export default GameWish;
