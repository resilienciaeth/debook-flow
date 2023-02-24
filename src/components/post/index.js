import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Actions from "./Actions";
import Header from "./Header";

export default function index({ post }) {
  const { text } = post;
  return (
    <div className="bg-[#F5F5F5] rounded-2xl">
      <div className="">
        <Header post={post} />
        <div className="mx-4">
          <p className="text-left">{text}</p>
        </div>
        <Actions post={post} />
      </div>
    </div>
  );
}
