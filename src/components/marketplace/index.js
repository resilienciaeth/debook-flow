import React from "react";
import { Link } from "react-router-dom";
import Comingsoon from "./ComingSoon";
import TrendingCollections from "./TrendingCollections";
import Web3 from "./Web3";
import Welcome from "./Welcome";

export default function Marketplace() {
  return (
    <div>
      <Welcome />
      <TrendingCollections />
      <Web3 />
      <Comingsoon />
    </div>
  );
}
