import React from "react";
import Link from "next/link";
import Image from "next/image";
import Data from "../../data/Data.json";
import { Button } from "antd";

export default function Recomended() {
  return (
    <div className="my-6">
      <h3 className="text-2xl ml-4 mb-4">Recommended</h3>
      <div>
        <div className="py-3 flex overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide">
          {Data.places.map((place, idx) => (
            <Link href={`/store/${place.name}`} key={idx}>
              <div className="bg-white h-72 w-72 mx-3 rounded hover:border-[1px] border-[0.5px] border-solid border-gray-300 ">
                <div className="w-full h-[55%] relative overflow-hidden">
                  <Image
                    src={`${place.image[0]}`}
                    alt=""
                    className=" rounded-t hover:scale-110 transition-all duration-500"
                    style={{}}
                    fill
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="font-semibold ">{place.name}</h5>
                  <h5 className="font-medium my-2">
                    5.0
                    <Star /> 1043 reviews
                  </h5>
                  <p className="text-xs font-medium text-gray-500">
                    {place.city}, {place.town}.
                  </p>
                  <Button size="small" className="my-3 text-xs">{place.category}</Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className=" h-3.5 w-3.4 text-warning"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}
