import { Inter } from "next/font/google";
import PageDesc from "@/components/elements/PageDesc";
import Layout from "@/components/layout";
import Recomended from "@/components/sections/Recomended";
import NewToBloomer from "@/components/sections/NewToBloomer";
import LogoClouds from "@/components/elements/LogoClouds";
import Reviews from "@/components/sections/Reviews";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <PageDesc title="Bloomer" />
      <Layout>
        <Recomended />
        <NewToBloomer />
        <Reviews />
        <LogoClouds />
      </Layout>
    </div>
  );
}
