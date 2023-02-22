import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="font-larken w-full">
      <div className=" h-auto">
        <div className="flex flex-col h-full">
          <div className="nm:flex flex-row ">
            <div className=" nm:mt-10 nm:w-[50%] h-[20%] nm:h-auto flex items-center nm:justify-center flex-col">
              <div>
                <p className="text-[14px] nm:text-[15px] nm:text-left font-larken font-bold text-debook-1">
                  From books to ebooks to debooks.
                </p>
                <h1 className="text-[90px] nm:leading-[120px] leading-[80px] nm:text-[120px] mt-0 font-larken font-bold text-debook-1">
                  DEBOOK
                </h1>
                <p className="text-[16px] nm:text-[20px] font-larken font-bold text-debook-1">
                  Where your favorite Authors bring books to life.
                </p>
              </div>
            </div>
            <div className="mt-[5rem] nm:mt-[6rem]  px-5 nm:px-0 mb-10 flex items-start justify-center  nm:w-[50%] nm:h-auto h-[80%]">
              <Link>
                <div className="nm:hover:scale-[105%] duration-500 hover:ease-in-out shadow-2xl nm:w-[480px] cursor-pointer  h-[500px] nm:h-[550px] border-2  rounded-2xl">
                  <div className="h-[80%]  flex nm:hidden w-full min-w-full ">
                    <img
                      src="https://res.cloudinary.com/drxuutjwr/image/upload/v1674677968/DEBOOK_PORTADA_a2sabb.jpg"
                      className="rounded-t-[1rem] h-full w-full object-cover flex nm:hidden"
                      alt="debook"
                    />
                  </div>
                  {/* image desktop */}
                  <div className="h-[90%] nm:h-[80%] hidden nm:flex w-full min-w-full">
                    <img
                      src="https://res.cloudinary.com/drxuutjwr/image/upload/v1674677968/DEBOOK_PORTADA_a2sabb.jpg"
                      className="rounded-t-[1rem] h-full w-full nm:flex hidden"
                      alt="debook"
                    />
                  </div>
                  {/* description */}
                  <div className="h-[10%] mt-2 nm:mt-0 flex justify-center flex-col">
                    <div className="w-full h-[20%] space-x-5 nm:space-x-32 flex justify-center flex-row px-6 ">
                      <div className="flex items-center justify-center flex-row space-x-4">
                        <div className="text-black mt-4 nm:mt-20 font-bold items-center text-[25px] flex justify-center">
                          <p className="text-center leading-6">NOW AVAILABLE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
