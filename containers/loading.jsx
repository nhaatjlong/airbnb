import Router from "next/router";
import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";

const LoadingContain = () => {
  const [loadingGlobal, setLoadingGlobal] = useState(false);

  const handleLoadingGlobal = (data) => {
    console.log("data load: ", data);
    setLoadingGlobal(data);
  };

  useEffect(() => {
    const x = setTimeout(() => setLoadingGlobal(false), 2000);
    return () => clearTimeout(x);
  }, [loadingGlobal]);

  return {
    loadingGlobal,

    handleLoadingGlobal,
  };
};
const LoadingContainer = createContainer(LoadingContain);
export default LoadingContainer;
