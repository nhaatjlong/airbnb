import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
const Cartinfor = ({ item }) => {
  const { img, location, title, description, star, price, total, long, lat } =
    item;
  return (
    <div className="py-5 sm:px-2 border-b flex flex-row cursor-pointer hover:shadow-lg first:border-t">
      <div className=" relative h-32  sm:h-52 sm:w-80 w-40 flex-shrink-0">
        <Image
          src={img}
          className="rounded-3xl"
          layout="fill"
          alt="stay image"
        />
      </div>
      <div className="pl-2 flex flex-col flex-grow">
        <div className="flex justify-between items-center ">
          <h5 className="text-sm flex-grow text-gray-500 ">
            {" "}
            Private rooms in center of {location}
          </h5>
          <HeartIcon className="h-8" />
        </div>
        <h1 className=" text-lg sm:text-2xl">{title}</h1>
        <p className="opacity-80 py-2 text-xs sm:text-base">{description}</p>
        <div className="flex flex-row items-center  justify-between">
          <div className="flex flex-row items-center">
            <StarIcon className="h-8 text-red-400" />
            {star}
          </div>
          <div className="font-semibold text-md md:text-3xl">{price}</div>
        </div>

        <div>
          <p className="float-right text-sm ">{total}</p>
        </div>
      </div>
    </div>
  );
};

export default Cartinfor;
