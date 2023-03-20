import React from "react";
import MainHeader from "./header/MainHeader";
import PageWrapper from "../elements/PageWrapper";
import Footer from "./footer";

export default function Layout(props: { children?: React.ReactNode }) {
  return (
    <div>
      <MainHeader />
      <PageWrapper>{props.children}</PageWrapper>
      <Footer />
    </div>
  );
}
