import LoadingOverlay from "react-loading-overlay";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import LoadingContainer from "../containers/loading";

export default function MyLoading(props) {
  const { loadingGlobal } = LoadingContainer.useContainer();
  const { isLoading } = useSelector((state) => state.auth);
  return (
    <div
      className={` ${
        isLoading
          ? "block fixed z-[500] left-0 top-0 w-full h-full overflow-auto bg-[#000000] bg-opacity-50"
          : "hidden"
      }`}
    >
      <LoadingOverlay active={true} spinner={true} text="loading ...">
        {/* <p>Some content or children or something.</p> */}
      </LoadingOverlay>
    </div>
  );
}
// const DarkBackground = styled.div`
//   display: none; /* Hidden by default */
//   position: fixed; /* Stay in place */
//   z-index: 500; /* Sit on top */
//   left: 0;
//   top: 0%;
//   width: 100%; /* Full width */
//   height: 100%; /* Full height */
//   overflow: auto; /* Enable scroll if needed */
//   background-color: rgb(0, 0, 0); /* Fallback color */
//   background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
// `;
