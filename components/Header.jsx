import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  GlobeIcon,
} from "@heroicons/react/solid";
function Header(props) {
  return (
    <header
      className=" sticky top-0 z-50 shadow-md py-5 px-5
    md:px-10 grid grid-cols-3 bg-white"
    >
      {/* left */}
      <div className="relative h-10 flex items-center my-auto">
        <Image
          className="cursor-pointer"
          src="https://links.papareact.com/qd3"
          layout="fill"
          alt="logo airbnb"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle */}
      <div className="flex items-center justify-between py-2 md:shadow-md pl-2 rounded-full md:border-2">
        <input
          className="outline-none text-sm placeholder-gray-400 text-gray-600 ml-1"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="h-8 hidden md:inline-flex select-none active:scale-90 transition duration-150 mr-2 cursor-pointer text-white bg-red-400 rounded-full p-1" />
      </div>
      {/* right */}
      <div className="flex flex-row items-center justify-end cursor-pointer space-x-4 text-gray-500">
        <p className="md:hover:bg-gray-300 transition ease-in-out select-none md:inline hidden  p-2 rounded-full ">
          Become a host
        </p>
        <GlobeIcon className="h-6 lg:h-9 md:hover:bg-gray-300 text-red-400 ease-in-out 0.3  rounded-full" />

        <div
          className="flex flex-row text-red-400 justify-around rounded-full p-2 text border-2
        md:hover:shadow-lg"
        >
          <MenuIcon className="h-6 lg:h-9" />
          <UserCircleIcon className="h-6 lg:h-9" />
        </div>
      </div>
    </header>
  );
}

export default Header;
