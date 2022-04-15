import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  GlobeIcon,
  UsersIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Router, useRouter } from "next/router";
import PlaceHolderContainer from "../containers/placeHoder";
import { useContainer } from "unstated-next";
import AuthContainer from "../containers/auth";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/auth";
import LoadingContainer from "../containers/loading";
import useClickOutside from "../hooks/useClickOutside";

function Header(props) {
  const [inputSearch, setInputSearch] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [totalGuest, setTotalGuest] = useState(1);

  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const { valueHolder, onChangeValueHolder } =
    useContainer(PlaceHolderContainer);
  const { isAuthenticated, setIsAuthenticated } = useContainer(AuthContainer);

  const { handleLoadingGlobal } = LoadingContainer.useContainer();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };

  useEffect(() => {
    router.pathname === "/" && onChangeValueHolder("Start your search");
  }, [router.pathname]);

  const handleSearch = () => {
    if (inputSearch) {
      setInputSearch(``);
      router.push({
        pathname: "/search",
        query: {
          location: inputSearch,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          noOfGuests: totalGuest,
        },
      });
    } else return;
  };
  const [show, setShow] = useState(false);
  const modalRef = useRef();
  useClickOutside(modalRef, () => setShow(false));

  return (
    <header
      className=" sticky top-0 z-50 shadow-md py-5 px-5
    md:px-10 grid grid-cols-3 bg-white"
    >
      {/* left */}
      <div className="relative h-10 w-full md:w-4/12 flex items-center my-auto">
        <Image
          className="cursor-pointer "
          src="https://links.papareact.com/qd3"
          layout="fill"
          alt="logo airbnb"
          objectFit="contain"
          objectPosition="left"
          onClick={() => router.push("/")}
        />
      </div>

      {/* middle */}
      <div className="flex items-center  py-2 md:shadow-md pl-2 rounded-full md:border-2">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          className="outline-none w-11/12 text-xs sm:text-sm placeholder-gray-400 text-gray-600 ml-1"
          type="text"
          placeholder={valueHolder}
        />
        <SearchIcon
          className="h-8 hidden md:inline-flex select-none active:scale-90 transition duration-150 mr-2 cursor-pointer text-white bg-red-400 rounded-full p-1"
          onClick={handleSearch}
        />
      </div>
      {/* right */}
      <div className="flex flex-row items-center justify-end space-x-4 text-gray-500">
        <p className="md:hover:bg-gray-300 cursor-pointer  transition ease-in-out select-none md:inline hidden  p-2 rounded-full ">
          {"Host now"}
        </p>
        <GlobeIcon className="h-6 lg:h-9 hidden md:inline-flex md:hover:bg-gray-300 text-red-400 cursor-pointer rounded-full" />

        <div
          className="flex flex-row relative text-red-400 cursor-pointer  justify-around rounded-full p-1 text border-2
        md:hover:shadow-lg"
          onClick={() => setShow(true)}
        >
          <MenuIcon className="h-6 lg:h-8" />
          <UserCircleIcon className="h-6 lg:h-8" />

          {show && (
            <div
              className="absolute top-9 md:top-11 rounded-lg text-red-400 bg-black p-2"
              ref={modalRef}
            >
              <ul
                className="select-none space-y-2 "
                onClick={() => setShow(!show)}
              >
                <li>User</li>
                <div className="border-b border-white "></div>
                <li className="md:hidden" onClick={() => dispatch(logout())}>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        <div>
          <LogoutIcon
            className="h-6 lg:h-8 text-red-400 cursor-pointer  md:hover:bg-gray-300 lg:rounded-2xl p-1 hidden md:inline  "
            onClick={() => dispatch(logout())}
          />
        </div>
      </div>

      <div
        className={`  ${
          inputSearch
            ? "flex flex-col max-w-[376px] overflow-scroll sm:max-w-fit sm:overflow-visible col-span-3 sm:mx-auto  transition ease-linear duration-1000  p-2 h-max"
            : "hidden"
        }`}
        style={{ maxWidth: "" }}
      >
        <DateRangePicker
          rangeColors={["#FD5B61"]}
          ranges={[selectionRange]}
          onChange={handleSelect}
        />
        <div className="flex justify-between items-center border-b  border-b-gray-300 pb-2">
          <h2 className="flex-grow text-black text-2xl font-bold pl-2 pt-2">
            Number of Guests
          </h2>
          <div className="flex flex-row items-center justify-end border-4 rounded-xl border-red-400">
            <UsersIcon className="h-7 flex-grow" />
            <input
              type="number"
              className="w-2/12 text-center flex-grow focus:outline-none "
              min={1}
              value={totalGuest}
              onChange={(e) => setTotalGuest(e.target.value)}
            />
          </div>
        </div>
        <div className="flex pt-3">
          <button className="flex-grow" onClick={() => setInputSearch("")}>
            Cancel
          </button>
          <button
            className="flex-grow text-red-400 active:scale-x-95"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
