import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AUTHORS, MYDEBOOKS } from "lib/routes";
import { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import * as types from "@onflow/types";
import { getIDsFourAgreements } from "cadence/scripts/getID_script";
import { getMetadataFourAgreements } from "../../cadence/scripts/getMetadata";
import { getTotalSupplyFourAgreements } from "../../cadence/scripts/getTotalSupply_script";
import { mintFourAgreements } from "cadence/transactions/Mint_tx";

fcl.config({
  "flow.network": "testnet",
  "app.detail.title": "DEBOOK",
  "accessNode.api": "https://rest-testnet.onflow.org",
  "app.detail.icon": "https://placekitten.com/g/200/200",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
});

export default function MintFourAgreements() {
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
        cadence: `${getTotalSupplyFourAgreements}`,
      });
    } catch (err) {
      console.log(err);
    }

    const _id = parseInt(_totalSupply) + 1;

    try {
      const transactionId = await fcl.mutate({
        cadence: `${mintFourAgreements}`,
        args: (arg, t) => [
          arg(user.addr, types.Address),
          arg("The Four Agreements # " + _id.toString(), types.String),
          arg("The Four Agreements by Don Miguel Ruiz", types.String),
          arg(
            "https://nftstorage.link/ipfs/bafybeias5ag5yy6moypkyts5zxynxi3krduohsgd4xz5tmen2cewz52v4i",
            types.String
          ),
        ],
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        limit: 99,
      });
      console.log("Minting debook now with transaction ID", transactionId);
      const transaction = await fcl.tx(transactionId).onceSealed();
      console.log(
        "Testnet explorer link:",
        `https://testnet.flowscan.org/transaction/${transactionId}`
      );
      console.log(transaction);
      alert("debook minted successfully!");
    } catch (error) {
      console.log(error);
      alert(
        "Error minting debook, please check the console for error details!"
      );
    }
  };

  const RenderMint = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        {images.length > 1 ? (
          <>
            <Link to={MYDEBOOKS}>
              <button>Join the Community Now</button>
            </Link>
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
    setImages([]);
    let IDs = [];
    try {
      IDs = await fcl.query({
        cadence: `${getIDsFourAgreements}`,
        args: (arg, t) => [arg(user.addr, types.Address)],
      });
    } catch (err) {
      console.log("no debooks Owned");
    }

    let _imageSrc = [];
    try {
      for (let i = 0; i < IDs.length; i++) {
        const result = await fcl.query({
          cadence: `${getMetadataFourAgreements}`,
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
              alt={"debook #" + number}
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
          src="https://res.cloudinary.com/drxuutjwr/image/upload/v1676926706/1_p4tbai.png"
          alt="the freedom"
          className="my-4 rounded-[26px] max-h-[300px]"
        />
        <h1 className="text-[16px] text-debook-2 text-center font-bold">
          The Four Agreements
        </h1>
        <p className="text-center text-debook-2">by Don Miguel Ruiz</p>
        <p className="text-[12px] text-[#E7978C] text-center">
          Welcome to the first tokenized version of The Four Agreements. Only
          10,000 debooks will ever exist.
        </p>
        <p className="text-[12px] text-[#E7978C] text-center mb-4">
          When you buy this debook, you automatically get access
          <br /> to the private community of
          <br />
          <span className="font-bold text-[#E7978C] text-[12px]">
            The Four Agreements.
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
