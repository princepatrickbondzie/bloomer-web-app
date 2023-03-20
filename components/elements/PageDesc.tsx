import React from "react";
import Head from "next/head";

export default function PageDesc(props: {
  title: string;
  description?: string;
}) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={`${props.description}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
