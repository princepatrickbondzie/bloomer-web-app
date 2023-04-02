import React from "react";
import Star from "../elements/Star";
import Link from "next/link";

export default function ReviewCard(props: any) {
  return (
    <Link href="">
      <div className="bg-gray-100 h-[20rem] w-[17rem] rounded-lg mx-3 py-4 px-5 flex justify-center items-center">
        <div className="h-full w-full flex flex-col justify-between">
          <div className="flex justify-start items-center">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className="h-[50%]">
            <p className="mb-5 text-xl font-semibold whitespace-pre-wrap">
              {props.review.title}
            </p>
            <p className="text-sm whitespace-pre-wrap">
              {props.review.comment}
            </p>
          </div>
          <div className="">
            <p className="font-semibold">{props.review.name}</p>
            <p className="text-gray-600 text-sm">{props.review.location}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

// function Stars(stars: number) {
//   return <Star />;
// }
