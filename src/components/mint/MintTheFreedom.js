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
        <button className="" onClick={() => logIn()}>
          Log In
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
      <div>
        <div className="">
          <button className="" onClick={() => mint()}>
            Mint
          </button>
        </div>
        {images.length > 0 ? (
          <>
            <h2>Your NFTs</h2>
            <div className="image-container">{images}</div>
          </>
        ) : (
          ""
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
    <div className="flex flex-col">
      <Link to={AUTHORS} className="text-debook-1 hover:text-gray-800">
        <IoIosArrowBack className=" mb-2 ml-4" size={40} />
      </Link>
      <div className="flex flex-col items-center px-6">
        <h1 className="text-xl text-debook-1 font-bold">
          The Freedom of Being Who You Are
        </h1>
        <p>by Ernest Viñas</p>
        <img
          src="https://res.cloudinary.com/drxuutjwr/image/upload/v1674677968/DEBOOK_PORTADA_a2sabb.jpg"
          alt="the freedom"
          className="my-4 w-1/2"
        />
        <p className="text-lg text-center mb-4">
          Welcome to the first tokenized version of The Freedom of Being Who You
          Are.
          <br />{" "}
          <span className="font-bold">
            Only 20,000 debooks will ever exist.
          </span>
        </p>
        <p className="text-lg text-center mb-4">
          When you buy this debook, you automatically get access
          <br /> to the private community of
          <br />
          <span className="font-bold">The Freedom of Being Who You Are.</span>
        </p>
        <div className="flex space-y-4 flex-col">
          {user && user.addr ? <RenderMint /> : <RenderLogin />}

          <button
            className="bg-debook-1 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
