import { Timestamp } from "firebase/firestore";

export type MyWishType = {
  img: string;
  wish: string;
};

export const ListMyWish: MyWishType[] = [
  {
    img: "/jpg/pas/img1.JPG",
    wish: "ขอให้อาหมาเป็นเด็กที่แข็งแรง",
  },
  {
    img: "/jpg/pas/img2.jpg",
    wish: "งานเยอะแค่ไหนก็ขอให้ไม่ยม",
  },
  {
    img: "/jpg/pas/img3.jpg",
    wish: "พักกผ่อนเยอะ ๆ ",
  },
  {
    img: "/jpg/pas/img4.JPG",
    wish: "happy with your care bear ",
  },
  {
    img: "/jpg/pas/img5.JPG",
    wish: "เป็นหมาที่สุดแสนจะเท่",
  },
  {
    img: "/jpg/pas/img6.JPG",
    wish: "รูปนี้ไม่มีอะไร สวยอะ สวยแบบตัวแม่ อย่างจึ้ง",
  },
  {
    img: "/jpg/pas/img7.JPG",
    wish: "ขอให้เป็นหมาที่เท่งี้ไปเรื่อย ๆ naja",
  },
];

export interface YourWish {
  wish: string;
  date: Timestamp;
  status: boolean;
}
