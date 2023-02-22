import React from "react";

export function CardErnest() {
  return (
    <div className="bg-red-500 mb-3 shadow-2xl rounded-3xl ml-4 min-w-[300px] h-[300px]">
      <div className="h-[60%] bg-[url('https://res.cloudinary.com/drxuutjwr/image/upload/v1674677968/DEBOOK_PORTADA_a2sabb.jpg')] bg-cover bg-no-repeat bg-center rounded-t-3xl"></div>
      <div className="h-[40%] bg-white rounded-b-3xl">
        <div className="flex flex-col">
          <h1 className="text-center mt-2 font-bold">
            The Freedom of Being Who You Are
          </h1>
          <p className="text-center font-bold">Ernest Viñas</p>
        </div>
        <div className="flex flex-row space-x-2 items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-black font-bold">Minimum Price</p>
            <p>$32</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-black font-bold">Total debooks</p>
            <p>20,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardFourAgreements() {
  return (
    <div className="bg-red-500 mb-3 shadow-2xl rounded-3xl ml-4 min-w-[300px] h-[300px]">
      <div className="h-[60%] bg-[url('https://res.cloudinary.com/drxuutjwr/image/upload/v1676926706/1_p4tbai.png')] bg-cover bg-no-repeat bg-center rounded-t-3xl"></div>
      <div className="h-[40%] bg-white rounded-b-3xl">
        <div className="flex flex-col">
          <h1 className="text-center mt-2 font-bold">The Four Agreements</h1>
          <p className="text-center font-bold">Don Miguel Ruiz</p>
        </div>
        <div className="flex flex-row space-x-2 items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-black font-bold">Minimum Price</p>
            <p>$52</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-black font-bold">Total debooks</p>
            <p>10,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
