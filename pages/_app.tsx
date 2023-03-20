import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import Floatbtn from "@/components/elements/Floatbtn";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
      <Floatbtn />
    </ConfigProvider>
  );
}
