import React from "react";
import { FallingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <FallingLines
      color="#FF4227"
      width="100"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  );
}
