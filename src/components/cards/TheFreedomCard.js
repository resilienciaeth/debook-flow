import React from "react";
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";
import { FEEDTHEFREEDOM } from "lib/routes";

export default function FourAgreementsCard(props) {
  return (
    <Link to={FEEDTHEFREEDOM}>
      <div className="rounded-2xl mt-4 shadow-2xl w-full h-[400px] flex flex-col justify-center bg-white">
        <div className="text-debook-1 ml-10 flex flex-col">
          <div className="flex flex-col">
            <img
              src="https://res.cloudinary.com/drxuutjwr/image/upload/v1674677968/DEBOOK_PORTADA_a2sabb.jpg"
              alt="Freedom"
              className="w-[80px] h-[80px] rounded-2xl"
            />
            <div className="flex flex-row mt-2 space-x-2">
              <h1 className="text-2xl text-left font-bold">
                The Freedom of Being <br />
                Who You Are
              </h1>
              <GoVerified size={20} className="text-debook-1 " />
            </div>
            <div className="flex flex-row items-center space-x-2">
              <p className="text-xl">by Ernest Viñas</p>
              <GoVerified size={15} className="text-debook-1 " />
            </div>
            <p>
              Total debookers: <span className="font-bold">150</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
