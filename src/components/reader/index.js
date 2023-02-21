import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { ReactReader } from "react-reader";

export default function Reader() {
  // And your own state logic to persist state
  const [location, setLocation] = useState(null);
  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi);
  };
  return (
    <div className="mx-auto" style={{ height: "80vh" }}>
      <ReactReader
        location={location}
        locationChanged={locationChanged}
        url="https://react-reader.metabits.no/files/alice.epub"
      />
    </div>
  );
}
