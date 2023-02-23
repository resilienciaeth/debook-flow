import * as fcl from "@onflow/fcl";
import * as types from "@onflow/types";
import { getMetadataTheFreedom } from "cadence/scripts/getMetadata";
import { getIDsTheFreedom } from "cadence/scripts/getID_script";
import { useState } from "react";
import { useAuth } from "hooks/auth";

export function useTheFreedom() {
  const [imagesTheFreedom, setImagesTheFreedom] = useState([]);
  const { user } = useAuth();

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

  return { imagesTheFreedom, fetchTheFreedom };
}
