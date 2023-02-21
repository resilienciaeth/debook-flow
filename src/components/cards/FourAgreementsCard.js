import React from "react";
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";
import { FEEDFOURAGREEMENTS } from "lib/routes";

export default function FourAgreementsCard(props) {
  return (
    <Link to={FEEDFOURAGREEMENTS}>
      <div className="rounded-2xl mt-4 shadow-2xl w-full h-[400px] flex flex-col justify-center bg-white">
        <div className="text-debook-1 ml-10 flex flex-col">
          <div className="flex flex-col">
            <img
              src="https://res.cloudinary.com/drxuutjwr/image/upload/v1676926706/1_p4tbai.png"
              alt="Agreements"
              className="w-[80px] h-[80px] rounded-2xl"
            />
            <div className="flex flex-row align-middle mt-2 items-center space-x-2">
              <h1 className="text-3xl text-center font-bold">
                The 4 Agreements
              </h1>
              <GoVerified size={20} className="text-debook-1 " />
            </div>
            <div className="flex flex-row items-center space-x-2">
              <p className="text-xl">by Don Miguel Ruiz</p>
              <GoVerified size={15} className="text-debook-1 " />
            </div>
            <p>
              Active Members: <span className="font-bold">3254</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
