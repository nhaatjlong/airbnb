import React, { useState } from "react";
import { createContainer } from "unstated-next";

function usePlaceHolder(props) {
  const [valueHolder, setValueHolder] = useState("Start your search");
  const onChangeValueHolder = (e) => setValueHolder(e);
  return {
    valueHolder,
    onChangeValueHolder,
  };
}
const PlaceHolderContainer = createContainer(usePlaceHolder);
export default PlaceHolderContainer;
