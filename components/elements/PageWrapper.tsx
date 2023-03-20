import React from "react";

export default function PageWrapper(props: { children: React.ReactNode }) {
  return <div className="py-4 px-4 w-full bg-white">{props.children}</div>;
}
