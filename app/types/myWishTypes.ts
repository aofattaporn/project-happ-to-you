import { Timestamp } from "firebase/firestore";

export type MyWishType = {
  img: string;
  wish: string;
};

export const ListMyWish: MyWishType[] = [
  {
    img: "/jpg/pas/img1.jpg",
    wish: "ขอให้อาหมาเป็นเด็กที่แข็งแรง",
  },
  {
    img: "/jpg/pas/img2.jpg",
    wish: "งานเยอะแค่ไหนก็ขอให้ไม่ยมนะจ๊าบบ",
  },
  {
    img: "/jpg/pas/img3.jpg",
    wish: "มีเวลาพักกผ่อนเยอะ ๆ 5555",
  },
  {
    img: "/jpg/pas/img4.jpg",
    wish: "happy with your care bear ",
  },
  {
    img: "/jpg/pas/img5.jpg",
    wish: "ชอบรูปนี้เป็นการส่วนตัวแฮะ5555",
  },
  {
    img: "/jpg/pas/img9.jpg",
    wish: "ไว้ไปกินสเวนเซ่นด้วยกันอีกนะจ๊าบ จองตัวแล้ว",
  },
  {
    img: "/jpg/pas/img7.jpg",
    wish: "สุดท้าย ขอให้เป็นหมาที่เท่งี้ไปเรื่อย ๆ naja",
  },
  {
    img: "/jpg/pas/img8.jpg",
    wish: "เป็นเด็กเท่กับรองเท้าแสนเท่ ! ด้วย",
  },
  {
    img: "/jpg/pas/img6.jpg",
    wish: "รูปนี้ไม่มีอะไร สวยอะ สวยแบบตัวแม่ อย่างจึ้ง 5555",
  },
];

export interface YourWish {
  wish: string;
  date: Timestamp;
  status: boolean;
}
