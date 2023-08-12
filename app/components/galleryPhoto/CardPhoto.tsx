type CardPhotoProps = {
  srcImage: string;
  wish: string;
};
import { kanit_latin_300 } from "@/app/types/fontsTypes";
import { Kanit } from "next/font/google";

export const kanit = Kanit({ subsets: ["latin"], weight: ["400"] });

const CardPhoto = ({ srcImage, wish }: CardPhotoProps) => {
  return (
    <li className={kanit_latin_300.className}>
      <div className="bg-white w-52 h-80 mr-32 card p-8 cursor-pointer ">
        <div className="photo h-3/4">
          <img className="object-contain h-48 w-96" src={srcImage} />
        </div>
        <div className="py-1 text-zinc-600 overflow-auto">
          <p>{wish}</p>
        </div>
      </div>
    </li>
  );
};

export default CardPhoto;
