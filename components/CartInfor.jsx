import Image from "next/image";
import React from "react";

const Cartinfor = ({ item }) => {
  const { img, location, title, description, star, price, total, long, lat } =
    item;
  console.log(img);
  return (
    <div>
      <div className="relative h- w-8">
        <Image src={img} layout="fill" alt="stay image" />
      </div>
    </div>
  );
};

export default Cartinfor;
