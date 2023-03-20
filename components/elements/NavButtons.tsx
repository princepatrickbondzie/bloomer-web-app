import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";

const inter = Inter({ subsets: ["latin"] });
const items: MenuProps["items"] = [
  {
    label: <Link href="/">Sign In</Link>,
    key: "0",
  },
  {
    label: <Link href="/">Download the app</Link>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: <Link href="/">Bloomer business</Link>,
    key: "3",
  },
];

export default function NavButtons() {
  return (
    <div>
      <Button className="2xl:hidden xl:hidden lg:hidden md:hidden block">
        <MenuOutlined />
      </Button>
      <div className="h-full items-center px-8 hidden 2xl:flex xl:flex lg:flex md:flex">
        <Button
          className={`font-semibold lg:text-base xl:text-base xl:px-8 lg:px-8 md:px-8 px-5 rounded-3xl mr-6 lg:h-12 xl:h-12 ${inter.className}`}
        >
          For business
        </Button>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Button
            className={`font-semibold lg:text-base xl:text-base xl:px-8 lg:px-8 md:px-8 px-5 rounded-3xl lg:h-12 xl:h-12 ${inter.className}`}
          >
            Menu <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
}
