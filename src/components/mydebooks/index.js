import React, { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";
import * as types from "@onflow/types";
import {
  getMetadataFourAgreements,
  getMetadataTheFreedom,
} from "cadence/scripts/getMetadata";
import {
  getIDsFourAgreements,
  getIDsTheFreedom,
} from "cadence/scripts/getID_script";
import FourAgreementsCard from "components/cards/FourAgreementsCard";
import TheFreedomCard from "components/cards/TheFreedomCard";
import { useAuth } from "hooks/auth";

fcl.config({
  "flow.network": "testnet",
  "app.detail.title": "The4Agreements",
  "accessNode.api": "https://rest-testnet.onflow.org",
  "app.detail.icon": "https://placekitten.com/g/200/200",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
});

function MyDebooks() {
  const [imagesFourAgreements, setImagesFourAgreements] = useState([]);
  const [imagesTheFreedom, setImagesTheFreedom] = useState([]);
  const { user, isLoading: authLoading } = useAuth();

  useEffect(() => {
    if (user && user.walletAddress) {
      fetchFourAgreements();
      fetchTheFreedom();
    }
  }, [user]);

  const RenderMint = () => {
    return (
      <div className="px-4 h-full mb-14 bg-debook-1">
        {imagesFourAgreements.length > 0 || imagesTheFreedom.length > 0 ? (
          <>
            <div className="text-white flex items-center justify-center font-bold">
              <h1 className="text-2xl">Your debooks</h1>
            </div>
            {imagesFourAgreements.length > 0 && imagesTheFreedom.length > 0 ? (
              <div>
                <FourAgreementsCard image={imagesFourAgreements} />
                <TheFreedomCard />
                {/* display images of The Freedom */}
              </div>
            ) : imagesFourAgreements.length > 0 ? (
              <div>
                <FourAgreementsCard image={imagesFourAgreements} />
              </div>
            ) : imagesTheFreedom.length > 0 ? (
              <div>
                <TheFreedomCard />
              </div>
            ) : null}
          </>
        ) : (
          "You don't own any debooks."
        )}
      </div>
    );
  };

  const fetchFourAgreements = async () => {
    // Empty the images array
    setImagesFourAgreements([]);
    let IDs = [];

    // Fetch the IDs with our script (no fees or signers necessary)
    try {
      IDs = await fcl.query({
        cadence: `${getIDsFourAgreements}`,
        args: (arg, t) => [arg(user.walletAddress, types.Address)],
      });
    } catch (err) {
      console.log("No NFTs Owned");
    }

    let _imageSrc = [];
    try {
      for (let i = 0; i < IDs.length; i++) {
        const result = await fcl.query({
          cadence: `${getMetadataFourAgreements}`,
          args: (arg, t) => [
            arg(user.walletAddress, types.Address),
            arg(IDs[i].toString(), types.UInt64),
          ],
        });
        _imageSrc.push(result["thumbnail"]);
      }
    } catch (err) {
      console.log(err);
    }

    if (imagesFourAgreements.length < _imageSrc.length) {
      setImagesFourAgreements(
        Array.from({ length: _imageSrc.length }, (_, i) => i).map(
          (number, index) => (
            <img
              style={{ margin: "10px", height: "150px" }}
              src={_imageSrc[index]}
              key={number}
              alt={"NFT #" + number}
            />
          )
        )
      );
    }
  };

  const fetchTheFreedom = async () => {
    // Empty the images array
    setImagesTheFreedom([]);
    let IDs = [];

    // Fetch the IDs with our script (no fees or signers necessary)
    try {
      IDs = await fcl.query({
        cadence: `${getIDsTheFreedom}`,
        args: (arg, t) => [arg(user.walletAddress, types.Address)],
      });
    } catch (err) {
      console.log("No NFTs Owned");
    }

    let _imageSrc = [];
    try {
      for (let i = 0; i < IDs.length; i++) {
        const result = await fcl.query({
          cadence: `${getMetadataTheFreedom}`,
          args: (arg, t) => [
            arg(user.walletAddress, types.Address),
            arg(IDs[i].toString(), types.UInt64),
          ],
        });
        _imageSrc.push(result["thumbnail"]);
      }
    } catch (err) {
      console.log(err);
    }

    if (imagesTheFreedom.length < _imageSrc.length) {
      setImagesTheFreedom(
        Array.from({ length: _imageSrc.length }, (_, i) => i).map(
          (number, index) => (
            <img
              style={{ margin: "10px", height: "150px" }}
              src={_imageSrc[index]}
              key={number}
              alt={"NFT #" + number}
            />
          )
        )
      );
    }
  };

  return (
    <div className="bg-debook-1 pb-20 pt-10 mt-10">
      <div className="">
        {/* If no wallet found, render connect wallet button */}
        {user && user.walletAddress ? <RenderMint /> : <div>no nfts</div>}
      </div>
    </div>
  );
}

export default MyDebooks;
