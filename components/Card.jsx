import React from "react";
import Image from "next/image";

export function SmallCard({ data }) {
  const { img, location, distance } = data;
  return (
    <div
      className={`flex flex-row items-center space-x-5 mt-2 sm:mt-3 lg:mt-4 xl:mt-5 cursor-pointer
    hover:bg-gray-300 hover:scale-105 p-2 transition duration-200 ease-out rounded-xl`}
    >
      <div className={``}>
        <Image
          src={img}
          alt="explpore"
          width={100}
          height={100}
          className="rounded-xl"
        />
      </div>
      <div className={``}>
        <h1 className="font-semibold">{location}</h1>
        <p>{distance}</p>
      </div>
    </div>
  );
}

export function MediumCard({ data }) {
  const { img, title } = data;
  return (
    <div
      className={`flex flex-col items-center space-x-5 mt-2 sm:mt-3 lg:mt-4 xl:mt-5 cursor-pointer
    hover:bg-gray-300 hover:scale-105 p-2 transition duration-200 ease-out rounded-xl`}
    >
      <div className={`relative h-80 w-80`}>
        <Image src={img} alt="explpore" layout="fill" className="rounded-xl" />
      </div>
      <div className={``}>
        <h1 className="font-semibold">{title}</h1>
      </div>
    </div>
  );
}
export function LargeCard({ data }) {
  const { img, title, description, buttonText } = data;
  return (
    <div
      className={` mt-2 sm:mt-3 lg:mt-4 xl:mt-5 relative
     py-8  transition duration-200 ease-out rounded-xl`}
    >
      <div className={`relative min-w-[350px]  h-80`}>
        <Image src={img} alt="explpore" layout="fill" className="rounded-xl" />
      </div>
      <div className={`absolute top-10 left-8 max-w-xs space-y-3`}>
        <h1 className="font-semibold text-4xl">{title}</h1>
        <p className="font-bold">{description}</p>
        <button className="bg-slate-900 text-white px-4 py-2 font-bold active:scale-x-95 transition duration-150 rounded-full">
          {buttonText}
        </button>
      </div>
    </div>
  );
}