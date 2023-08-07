import Image from "next/image";

// Required for side-effects
import "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase/ConnectFirebase";
import Link from "next/link";

export default async function Home() {
  // Initialize Cloud Firestore and get a reference to the service

  // console.log(db);

  // const docRef = doc(db, "/checking", "authen");
  // Get a document, forcing the SDK to fetch from the offline cache.
  // try {
  //   const doc = await getDoc(docRef);

  //   console.log("Cached document data:", doc.data());
  // } catch (e) {
  //   console.log("Error getting cached document:", e);
  // }

  return (
    <main className="">
      {/* content-homepage */}
      <div className="flex-col items-center justify-center">
        <div className="text-center text-homepage">
          <h1>HAPPY BIRTH DAY</h1>
          <h3>To Pas</h3>
          <div className="md:px-32 px-8 mt-8 text-gray-600 font-bold">
            <div>
              <p>
                Actually i don't know what i'll give to your gift. I think this
                web instead my gift and my wish to you.
              </p>

              <h1 aria-label="Hi! I'm a developer">
                wish you happy with &nbsp;
                <span className="typewriter thick"></span>
              </h1>
            </div>
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
