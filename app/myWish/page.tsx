import AudioFooter from "../components/AudioFooter";
import GelleryPhoto from "../components/galleryPhoto/GelleryPhoto";
import TwitterWish from "../components/twitter/TwitterWish";
import MyWish from "../components/wish/MyWish";
import GameWish from "../components/game/GameWish";
import Image from "next/image";
import { kanit_latin_300, kanit_latin_400 } from "../types/fontsTypes";

const MyWishPage = () => {
  return (
    <>
      <GelleryPhoto />
      <TwitterWish />
      <MyWish />
      <GameWish />
      <AudioFooter />

      <div className="flex justify-center">
        <Image
          className="img"
          src="/pdf/motoo_v1.png"
          width={200}
          height={500}
          alt="mootoo_v1"
        ></Image>
      </div>
      <div className="flex justify-center mb-32">
        <div className="bg-pink-50 px-4 py-2 rounded-full text-dark">
          <p className={kanit_latin_300.className}>เดี๋ยวซื้อบลัฟแถมให้ </p>
        </div>
      </div>
    </>
  );
};

export default MyWishPage;
