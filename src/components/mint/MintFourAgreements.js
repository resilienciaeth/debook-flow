import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AUTHORS } from "lib/routes";
import { useState } from "react";

export default function MintFourAgreements() {
  const [buttonText, setButtonText] = useState("Buy with credit card");

  const handleClick = () => {
    setButtonText("Coming soon");
  };

  return (
    <div className="flex flex-col">
      <Link to={AUTHORS} className="text-debook-1 hover:text-gray-800">
        <IoIosArrowBack className=" mb-2 ml-4" size={40} />
      </Link>
      <div className="flex flex-col items-center px-6">
        <h1 className="text-xl text-debook-1 font-bold">The Four Agreements</h1>
        <p>by Don Miguel Ruiz</p>
        <img
          src="https://res.cloudinary.com/drxuutjwr/image/upload/v1676926706/1_p4tbai.png"
          alt="four agreements"
          className="my-4 w-1/2"
        />
        <p className="text-lg text-center mb-4">
          Welcome to the first tokenized version of The Four Agreements.
          <br /> Only 10,000 debooks will ever exist.
        </p>
        <p className="text-lg text-center mb-4">
          When you buy this debook, you automatically get access
          <br /> to the private community of
          <br />
          The Four Agreements.
        </p>
        <div className="flex space-y-4 flex-col">
          <button className="bg-debook-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy with crypto
          </button>
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
