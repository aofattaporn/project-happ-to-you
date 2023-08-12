import { kanit_300 } from "../game/ListWish";
import Image from "next/image";

const TwitterWish = () => {
  return (
    <div className={kanit_300.className}>
      <div className="my-96 px-16 h-96 text-center flex-col justify-center">
        <div className="text-xl text-gray-600 ka">
          <h1>
            the moment that&apos;s you be happy. it&apos;s look beautiful mak na
            :)
          </h1>
        </div>

        <div className="flex justify-center my-16">
          <div className="w-96 tweet cursor-pointer">
            <Image
              src="/jpg/tweet.png"
              alt="Decorative tweet"
              width={500} // Set the width of the image
              height={800} // Set the height of the image
            />
          </div>
        </div>
        <div className=" h-96"></div>
      </div>
    </div>
  );
};

export default TwitterWish;
