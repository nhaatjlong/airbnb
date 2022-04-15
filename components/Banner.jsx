import Image from "next/image";
import React from "react";

function Banner(props) {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px] 2xl-h-[700px] select-none">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt="banner airbnb"
      />
      <div className="absolute top-1/3 lg:top-1/2 text-center w-full">
        <p className="font-bold text-lg text-black p-2">
          Not sure where to go ?
        </p>
        <button className="text-white text-lg active:scale-90 transition duration-150 bg-black font-bold px-10 py-4 rounded-full">
          I am flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
