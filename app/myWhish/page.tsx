import AudioFooter from "../components/AudioFooter";
import GelleryPhoto from "../components/galleryPhoto/GelleryPhoto";
import TwitterWish from "../components/twitter/TwitterWish";
import MyWish from "../components/wish/MyWish";
import GameWish from "../components/game/GameWish";
import Image from "next/image";

const MyWhishPage = () => {
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
      <div className="flex justify-center">
        <p className="font-kanit">เดี๋ยวซื้อบลัฟแถมให้ </p>
      </div>
    </>
  );
};

export default MyWhishPage;
