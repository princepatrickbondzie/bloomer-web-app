import React from "react";
import TopNav from "./TopNav";
import Searchbar from "../../elements/Searchbar";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../../public/assets/fonts/Verdana.ttf",
});
const inter = Inter({ subsets: ["latin"] });

export default function MainHeader() {
  return (
    <header
      id="bg_linear"
      className="w-full 2xl:h-screen lg:h-[90vh] xl:h-screen md:h-[65vh] sm:h-[60vh] h-[60vh]"
    >
      <TopNav />
      <div className="w-full h-[86%] px-6 flex items-center justify-center">
        <div className=" xl:w-[80%] lg:w-[80%] md:w-[90%] w-[95%]">
          <h1
            className={`${myFont.className} lg:text-7xl xl:text-7xl md:text-3xl text-lg lg:leading-[80px] xl:leading-[80px]`}
          >
            Book local beauty and wellness services
          </h1>
          <Searchbar />
        </div>
      </div>
    </header>
  );
}
