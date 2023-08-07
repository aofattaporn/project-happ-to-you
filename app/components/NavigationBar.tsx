"use client";

import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="bg-white border-gray-200 navigation">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"} className="flex items-center">
          <h1>
            <span className="self-center text-2xl font-semibold whitespace-nowrap  dark:text-gray-600">
              ChesDa!
            </span>
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
