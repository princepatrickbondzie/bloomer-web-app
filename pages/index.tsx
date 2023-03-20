import { Inter } from "next/font/google";
import PageDesc from "@/components/elements/PageDesc";
import Layout from "@/components/layout";
import Recomended from "@/components/sections/Recomended";
import NewToBloomer from "@/components/sections/NewToBloomer";
// import Highlight from "@/components/elements/Highlight";
// import CTA from "@/components/elements/CTA";
// import Testimonies from "@/components/elements/Testimonies";
import LogoClouds from "@/components/elements/LogoClouds";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <PageDesc title="Bloomer" />
      <Layout>
        <Recomended />
        <NewToBloomer />
        <LogoClouds />
      </Layout>
    </div>
  );
}
