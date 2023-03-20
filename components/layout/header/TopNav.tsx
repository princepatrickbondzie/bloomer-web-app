import React from "react";
import Logo from "@/components/elements/Logo";
import NavButtons from "@/components/elements/NavButtons";

export default function TopNav() {
  return (
    <nav className="w-full h-[14%] flex justify-between items-center px-4">
      <Logo />
      <NavButtons />
    </nav>
  );
}
