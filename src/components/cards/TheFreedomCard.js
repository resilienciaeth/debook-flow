import React from "react";
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";
import { FEEDTHEFREEDOM } from "lib/routes";

export default function FourAgreementsCard(props) {
  return (
    <Link to={FEEDTHEFREEDOM}>
      <div className="rounded-[32px] mt-4 shadow-2xl w-full h-[300px] px-4 flex flex-col justify-end bg-contain bg-white bg-[url(https://res.cloudinary.com/drxuutjwr/image/upload/v1674677968/DEBOOK_PORTADA_a2sabb.jpg)] bg-center">
        <div className="flex flex-row h-[59px] mb-10 isle-mydebooks">
          <div className="flex ml-4 flex-col justify-center text-left text-white">
            <h1 className="text-[12px] font-bold">
              The Freedom of Being <br /> Who You Are
            </h1>
            <p className="text-[8px]">by Ernest Viñas</p>
          </div>
          <div className="flex ml-6 flex-col justify-center text-left text-white">
            <h1 className="text-[8px]">Active debookers</h1>
            <p className="text-[20px] leading-4 font-bold">4232</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
