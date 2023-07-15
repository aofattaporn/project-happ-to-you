import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <main className="">
      {/* content-homepage */}
      <div className="flex-col items-center justify-center">
        <div className="text-center text-homepage">
          <h1>HAPPY BIRTH DAY</h1>
          <h3>To Pas</h3>
          <div className="px-32 mt-8 text-gray-600 font-bold">
            <p>
              Actually i don't know what i'll give to your gift. I think this
              web instead my gift and my wish to you.
              <h1 aria-label="Hi! I'm a developer">
                wish you happy with &nbsp;
                <span className="typewriter thick"></span>
              </h1>
            </p>
          </div>
          <div className="mt-12">
            <Link href={"/myWhish"}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                click to next page
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* image-hoempage */}
      <div className="test">
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
    </main>
  );
}
