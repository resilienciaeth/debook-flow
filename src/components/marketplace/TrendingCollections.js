import React from "react";
import { CardErnest, CardFourAgreements } from "./Cards";

export default function TrendingCollections() {
  return (
    <div className="w-screen mt-10 mb-10">
      <div className=" max-w-max overflow-x-hidden">
        <h1 className="text-center mb-2 text-2xl text-debook-1 font-bold">
          Trending debooks
        </h1>
        <div className="flex flex-row overflow-x-auto">
          <CardErnest />
          <CardFourAgreements />
        </div>
      </div>
    </div>
  );
}
