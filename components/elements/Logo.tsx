import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Logo() {
  return <div className={`${inter.className} font-semibold text-xl ml-4`}>Bloomer</div>;
}
