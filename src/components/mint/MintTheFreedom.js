import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AUTHORS } from "lib/routes";
import { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import * as types from "@onflow/types";
import { getIDsTheFreedom } from "cadence/scripts/getID_script";
import { getMetadataTheFreedom } from "../../cadence/scripts/getMetadata";
import { getTotalSupplyTheFreedom } from "../../cadence/scripts/getTotalSupply_script";
import { mintTheFreedom } from "cadence/transactions/Mint_tx";

fcl.config({
  "flow.network": "testnet",
  "app.detail.title": "DEBOOK",
  "accessNode.api": "https://rest-testnet.onflow.org",
  "app.detail.icon": "https://placekitten.com/g/200/200",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
});

export default function MintTheFreedom() {
  const [user, setUser] = useState();
  const [images, setImages] = useState([]);
  const logIn = () => {
    fcl.authenticate();
  };
  const [buttonText, setButtonText] = useState("Buy with credit card");

  const handleClick = () => {
    setButtonText("Coming soon");
  };

  useEffect(() => {
    // This listens to changes in the user objects
    // and updates the connected user
    fcl.currentUser().subscribe(setUser);
  }, []);

  useEffect(() => {
    if (user && user.addr) {
      fetchNFTs();
    }
  }, [user]);

  const RenderLogin = () => {
    return (
      <div>
        <button
          className="button-debook text-white p-4 w-full"
          onClick={() => logIn()}
        >
          Connect Your Wallet
        </button>
      </div>
    );
  };

  const mint = async () => {
    let _totalSupply;
    try {
      _totalSupply = await fcl.query({
        cadence: `${getTotalSupplyTheFreedom}`,
      });
    } catch (err) {
      console.log(err);
    }

    const _id = parseInt(_totalSupply) + 1;

    try {
      const transactionId = await fcl.mutate({
        cadence: `${mintTheFreedom}`,
        args: (arg, t) => [
          arg(user.addr, types.Address),
          arg(
            "The Freedom of Being Who You Are # " + _id.toString(),
            types.String
          ),
          arg("The Freedom of Being Who You Are by Ernest Viñas", types.String),
          arg(
            "https://res.cloudinary.com/drxuutjwr/image/upload/v1674677968/DEBOOK_PORTADA_a2sabb.jpg",
            types.String
          ),
        ],
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        limit: 99,
      });
      console.log("Minting NFT now with transaction ID", transactionId);
      const transaction = await fcl.tx(transactionId).onceSealed();
      console.log(
        "Testnet explorer link:",
        `https://testnet.flowscan.org/transaction/${transactionId}`
      );
      console.log(transaction);
      alert("NFT minted successfully!");
    } catch (error) {
      console.log(error);
      alert("Error minting NFT, please check the console for error details!");
    }
  };

  const RenderMint = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        {images.length > 0 ? (
          <>
            <h1>You can now join the community</h1>
          </>
        ) : (
          <button
            className="button-debook text-white p-4 w-full"
            onClick={() => mint()}
          >
            Mint
          </button>
        )}
      </div>
    );
  };

  const fetchNFTs = async () => {
    // Empty the images array
    setImages([]);
    let IDs = [];

    // Fetch the IDs with our script (no fees or signers necessary)
    try {
      IDs = await fcl.query({
        cadence: `${getIDsTheFreedom}`,
        args: (arg, t) => [arg(user.addr, types.Address)],
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
            arg(user.addr, types.Address),
            arg(IDs[i].toString(), types.UInt64),
          ],
        });
        _imageSrc.push(result["thumbnail"]);
      }
    } catch (err) {
      console.log(err);
    }

    if (images.length < _imageSrc.length) {
      setImages(
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
    <div className="flex py-5 h-[120vh] flex-col login-bg px-4">
      <div className="flex flex-col pb-4 rounded-[26px] bg-white px-6">
        <img
          src="https://res.cloudinary.com/drxuutjwr/image/upload/v1674677968/DEBOOK_PORTADA_a2sabb.jpg"
          alt="the freedom"
          className="my-4 rounded-[26px]"
        />
        <h1 className="text-[16px] text-debook-2 text-center font-bold">
          The Freedom of Being Who You Are
        </h1>
        <p className="text-center text-debook-2">by Ernest Viñas</p>
        <p className="text-[12px] text-[#E7978C] text-center">
          Welcome to the first tokenized version of The Freedom of Being Who You
          Are. Only 20,000 debooks will ever exist.
        </p>
        <p className="text-[12px] text-[#E7978C] text-center mb-4">
          When you buy this debook, you automatically get access
          <br /> to the private community of
          <br />
          <span className="font-bold text-[#E7978C] text-[12px]">
            The Freedom of Being Who You Are.
          </span>
        </p>
        <div className="flex space-y-4 flex-col">
          {user && user.addr ? <RenderMint /> : <RenderLogin />}

          <button
            className="button-debook p-4 w-full text-white"
            onClick={handleClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
