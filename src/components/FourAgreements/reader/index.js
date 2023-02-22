import { useAuth } from "hooks/auth";
import React, { useEffect, useState } from "react";
import { ReactReader } from "react-reader";
import { useFourAgreements } from "../fetchFourAgreements";

export default function ReaderFourAgreements() {
  const { imagesFourAgreements, fetchFourAgreements } = useFourAgreements();
  const { user, isLoading: authLoading } = useAuth();
  useEffect(() => {
    if (user && user.walletAddress) {
      fetchFourAgreements();
    }
  }, [user]);

  // And your own state logic to persist state
  const [location, setLocation] = useState(null);
  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi);
  };
  return (
    <div className="mx-auto" style={{ height: "80vh" }}>
      {imagesFourAgreements.length > 0 ? (
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url="https://res.cloudinary.com/drxuutjwr/raw/upload/v1676943664/The_Four_Agreements_by_Don_Miguel_Ruiz_lzgqeu.epub"
        />
      ) : (
        "Buy this debook to read the book"
      )}
    </div>
  );
}
