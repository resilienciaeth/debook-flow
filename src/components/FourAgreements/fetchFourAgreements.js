import * as fcl from "@onflow/fcl";
import * as types from "@onflow/types";
import { getMetadataFourAgreements } from "cadence/scripts/getMetadata";
import { getIDsFourAgreements } from "cadence/scripts/getID_script";
import { useState } from "react";
import { useAuth } from "hooks/auth";

export function useFourAgreements() {
  const [imagesFourAgreements, setImagesFourAgreements] = useState([]);
  const { user } = useAuth();

  const fetchFourAgreements = async () => {
    setImagesFourAgreements([]);
    let IDs = [];

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

  return { imagesFourAgreements, fetchFourAgreements };
}
