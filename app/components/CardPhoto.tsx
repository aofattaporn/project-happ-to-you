"use client";
import Image from "next/image";

const CardPhoto = () => {

  return (
    <li>
    <div className=" bg-white w-52 h-80 mr-32 card p-2 cursor-pointer">
      <div className="photo border-2 h-3/4">
        {/* <Image className="object-scale-down"  src={"/jpg/people.jpeg"} width={1000} height={1000} alt="x"></Image>  */}
        <img className="object-contain h-48 w-96" src="/jpg/people.jpeg"/>
      </div>
      <div className="py-4 text-zinc-600">
        <p>you look like so beautifull</p>
      </div>
    </div>
  </li>
  );
};

export default CardPhoto;
