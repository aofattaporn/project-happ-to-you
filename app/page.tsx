import Image from "next/image";

import "firebase/firestore";
import Link from "next/link";
import { kanit_latin_400 } from "./types/fontsTypes";

export default function Home() {
  return (
    <main className={kanit_latin_400.className}>
      <div className="overflow-hidden ">
        {/* content-homepage */}
        <div className="flex-col items-center justify-center">
          <div className="text-center text-homepage">
            <h1 className={kanit_latin_400.className}>HAPPY BIRTH DAY</h1>
            <h3>To Pas</h3>
            <div className="md:px-32 px-6 mt-8 text-gray-600 font-bold">
              <div className={kanit_latin_400.className}>
                <p>
                  Actually i don&apos;t know what i&apos;ll give to your gift. I
                  think this web instead my gift and my wish to you.
                </p>

                <h1 aria-label="Hi! I'm a developer">
                  wish you happy with &nbsp;
                  <span className="typewriter thick"></span>
                </h1>
              </div>
            </div>
            <div className="mt-12">
              <Link href={"/myWish"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  click to next page
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* image-hoempage */}
        <div className="flex justify-around">
          <Image
            className="img"
            src="/pdf/motoo_v1.png"
            width={200}
            height={500}
            alt="mootoo_v1"
          ></Image>
          <Image
            className="img"
            src="/pdf/motoo_v1.png"
            width={200}
            height={500}
            alt="mootoo_v1"
          ></Image>
          <Image
            className="img"
            src="/pdf/motoo_v1.png"
            width={200}
            height={500}
            alt="mootoo_v1"
          ></Image>
        </div>
      </div>
    </main>
  );
}
