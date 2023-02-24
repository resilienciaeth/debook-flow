import React from "react";
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";
import { FEEDFOURAGREEMENTS } from "lib/routes";

export default function FourAgreementsCard(props) {
  return (
    <Link to={FEEDFOURAGREEMENTS}>
      <div className="rounded-[32px] shadow-2xl w-full h-[300px] px-4 flex flex-col justify-end bg-cover bg-white bg-[url(https://res.cloudinary.com/drxuutjwr/image/upload/v1676926706/1_p4tbai.png)] bg-center">
        <div className="flex flex-row h-[59px] mb-10 isle-mydebooks">
          <div className="flex ml-4 flex-col justify-center text-left text-white">
            <h1 className="text-[15px] font-bold">The Four Agreements</h1>
            <p className="text-[8px]">By Don Miguel Ruiz</p>
          </div>
          <div className="flex ml-4 flex-col justify-center text-left text-white">
            <h1 className="text-[8px]">Active debookers</h1>
            <p className="text-[20px] leading-4 font-bold">2349</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
