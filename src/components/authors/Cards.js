import React from "react";

function FourAgreements() {
  return (
    <div className="w-full h-[600px] bg-debook-1 rounded-3xl">
      <div className="h-[70%] rounded-t-3xl bg-[url('https://res.cloudinary.com/drxuutjwr/image/upload/v1676940657/don_Miguel_Ruiz_9125_Aaron_Landman_2020_ykrxvg.jpg')] bg-cover">
        <div className="absolute rounded-3xl bg-transparent bg-opacity-20 border-debook-1 border-2 px-2 flex mt-4 ml-4">
          <p className="text-white">LIVE</p>
        </div>
      </div>
      <div className="h-[30%] text-white flex flex-col ml-4 justify-center">
        <h1 className="text-2xl font-bold">The Four Agreements</h1>
        <p className="text-lg">
          by <span className="font-bold">Don Miguel Ruiz</span>
        </p>
        <p>1246/10,000 Available</p>
      </div>
    </div>
  );
}

function TheFreedom() {
  return (
    <div className="w-full h-[600px] bg-debook-1 rounded-3xl">
      <div className="h-[70%] rounded-t-3xl bg-[url('https://res.cloudinary.com/drxuutjwr/image/upload/v1675790408/ernest_perfil_nueva_kjl3qi.png')] bg-cover">
        <div className="absolute rounded-3xl bg-transparent bg-opacity-20 border-debook-1 border-2 px-2 flex mt-4 ml-4">
          <p className="text-white">LIVE</p>
        </div>
      </div>
      <div className="h-[30%] text-white flex flex-col ml-4 justify-center">
        <h1 className="text-2xl font-bold">The Freedom of Being Who You Are</h1>
        <p className="text-lg">
          by <span className="font-bold">Ernest Viñas</span>
        </p>
        <p>2350/20,000 Available</p>
      </div>
    </div>
  );
}

export default { FourAgreements, TheFreedom };
