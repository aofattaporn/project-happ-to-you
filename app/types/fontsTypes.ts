import { Kanit } from "next/font/google";

export const kanit_latin_300 = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300"],
});

export const kanit_latin_400 = Kanit({ subsets: ["latin"], weight: ["400"] });

export const kanit_latin_200 = Kanit({
  subsets: ["latin", "thai"],
  style: ["normal"],
  weight: ["200"],
});
