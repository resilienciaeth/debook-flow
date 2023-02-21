import React from "react";

export default function Authors() {
  return (
    <div className="px-4 mb-20">
      <div className="space-y-8">
        <h1 className="text-center text-2xl font-bold text-debook-1">
          NOW AVAILABLE
        </h1>
        {/* Four Agreements */}
        <div className="w-full h-[600px] shadow-2xl bg-debook-1 rounded-3xl">
          <div className="h-[70%] rounded-t-3xl bg-[url('https://res.cloudinary.com/drxuutjwr/image/upload/v1676940657/don_Miguel_Ruiz_9125_Aaron_Landman_2020_ykrxvg.jpg')] bg-cover">
            <div className="py-4">
              <div className=" rounded-3xl bg-transparent bg-opacity-20 border-debook-1 border-2 w-[80px] ml-4">
                <p className="text-white text-center">LIVE</p>
              </div>
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
        {/* The freedom */}
        <div className="w-full h-[600px] shadow-2xl bg-debook-1 rounded-3xl">
          <div className="h-[70%] rounded-t-3xl bg-[url('https://res.cloudinary.com/drxuutjwr/image/upload/v1675790408/ernest_perfil_nueva_kjl3qi.png')] bg-cover">
            <div className="py-4">
              <div className=" rounded-3xl bg-transparent bg-opacity-20 border-debook-1 border-2 w-[80px] ml-4">
                <p className="text-white text-center">LIVE</p>
              </div>
            </div>
          </div>
          <div className="h-[30%] text-white flex flex-col ml-4 justify-center">
            <h1 className="text-2xl font-bold">
              The Freedom of Being Who You Are
            </h1>
            <p className="text-lg">
              by <span className="font-bold">Ernest Viñas</span>
            </p>
            <p>2350/20,000 Available</p>
          </div>
        </div>
        <h1 className="text-2xl text-debook-1 font-bold text-center">
          COMING SOON TO DEBOOK
        </h1>
        {/* Naval */}
        <div className="w-full h-[600px] shadow-2xl bg-debook-1 rounded-3xl">
          <div className="h-[70%] rounded-t-3xl bg-[url('https://res.cloudinary.com/drxuutjwr/image/upload/v1676942959/o19l7hd8hc55yvwgdjbjvke40gu3_ewader.jpg')] bg-cover">
            <div className="py-4">
              <div className=" rounded-3xl bg-transparent bg-opacity-20 border-debook-1 border-2 w-[140px] ml-4">
                <p className="text-white text-center">COMING SOON</p>
              </div>
            </div>
          </div>
          <div className="h-[30%] text-white flex flex-col ml-4 justify-center">
            <h1 className="text-2xl font-bold">
              The Almanack Of Naval Ravikant
            </h1>
            <p className="text-lg">
              by <span className="font-bold">Eric Jorgenson</span>
            </p>
            <p>Available on March 25th</p>
          </div>
        </div>
        {/* Garyvee */}
        <div className="w-full h-[600px] shadow-2xl bg-debook-1 rounded-3xl">
          <div className="h-[70%] rounded-t-3xl bg-[url('https://res.cloudinary.com/drxuutjwr/image/upload/v1676943243/gvg_mwceg9.jpg')] bg-cover bg-center">
            <div className="py-4">
              <div className=" rounded-3xl bg-transparent bg-opacity-20 border-debook-1 border-2 w-[140px] ml-4">
                <p className="text-white text-center">COMING SOON</p>
              </div>
            </div>
          </div>
          <div className="h-[30%] text-white flex flex-col ml-4 justify-center">
            <h1 className="text-2xl font-bold">Twelve and a half</h1>
            <p className="text-lg">
              by <span className="font-bold">Gary Vaynerchuk</span>
            </p>
            <p>Available on April 10th</p>
          </div>
        </div>
        {/* Naval */}
        <div className="w-full h-[600px] shadow-2xl bg-debook-1 rounded-3xl">
          <div className="h-[70%] rounded-t-3xl bg-[url('https://res.cloudinary.com/drxuutjwr/image/upload/v1676943537/joe_bonus_2_zjepm8.webp')] bg-cover bg-center">
            <div className="py-4">
              <div className=" rounded-3xl bg-transparent bg-opacity-20 border-debook-1 border-2 w-[140px] ml-4">
                <p className="text-white text-center">COMING SOON</p>
              </div>
            </div>
          </div>
          <div className="h-[30%] text-white flex flex-col ml-4 justify-center">
            <h1 className="text-2xl font-bold">Becoming Supernatural</h1>
            <p className="text-lg">
              by <span className="font-bold">Dr. Joe Dispenza</span>
            </p>
            <p>Available on April 17th</p>
          </div>
        </div>
      </div>
    </div>
  );
}
