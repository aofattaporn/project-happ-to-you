import AudioFooter from "../components/AudioFooter";
import GelleryPhoto from "../components/galleryPhoto/GelleryPhoto";
import TwitterWish from "../components/twitter/TwitterWish";
import MyWish from "../components/wish/MyWish";
import GameWish from "../components/game/GameWish";

const MyWhishPage = () => {
  return (
    <>
      <GelleryPhoto />
      <TwitterWish />
      <MyWish />
      <GameWish />
      <AudioFooter />
    </>
  );
};

export default MyWhishPage;
