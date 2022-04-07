import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { useContainer } from "unstated-next";
import PlaceHolderContainer from "../containers/placeHoder";
import Cartinfor from "./CartInfor";
import MapBox from "./MapBox";

function SearchResult({ dataSearch }) {
  const { onChangeValueHolder } = useContainer(PlaceHolderContainer);
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  console.log(startDate, endDate);
  let formatStart = format(new Date(startDate), "dd MMMM yy");
  let formatEnd = format(new Date(endDate), "dd MMMM yy");

  useEffect(() => {
    onChangeValueHolder(
      `${location} - ${formatStart} - ${formatEnd} - ${noOfGuests} guests`
    );
  }, []);
  const [show, setShow] = useState(false);
  return (
    <div className="px-4 py-6 flex">
      <div>
        <h4 className="text-sm  opacity-90 select-none">
          300+ stays - {formatStart} - {formatEnd} - {noOfGuests} guests
        </h4>
        <h1 className="text-3xl font-bold py-4">Stays in {location}</h1>
        <div className="hidden sm:space-x-4 sm:inline-flex sm:pt-2 ">
          <button className="btn-filter">Cancellation Flexibility</button>
          <button className="btn-filter">Type of place</button>
          <button className="btn-filter">Price</button>
          <button className="btn-filter">Rooms and Beds</button>
          <button className="btn-filter">More filters</button>
        </div>
        <div className="py-8 flex">
          <div className="xl:pr-8">
            {dataSearch?.map((searchItem, index) => {
              return (
                <Cartinfor key={index} item={{ ...searchItem, location }} />
              );
            })}
          </div>
          <div className="hidden  xl:inline-flex xl:min-w-[500px] xl:flex-col items-center px-4 ">
            <MapBox dataSearch={dataSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
