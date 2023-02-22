import React from "react";

export default function Web3() {
  return (
    <div className="h-auto bg-debook-1 text-white w-full ">
      <div className="flex flex-col items-center justify-center px-[2rem]">
        <div className="mt-[5rem] nm:flex nm:items-center nm:flex-col  nm:px-[5rem] space-y-6 mb-20">
          <h1 className="text-[30px] nm:text-[55px] font-bold text-center text-white">
            Bringing Authors and Readers into web3.
          </h1>
          <p className="text-[15px] nm:text-[22px] nm:w-[60%] font-normal text-center text-white">
            From physical books, to e-books to now decentralized books.
            <br />
            From DEBOOK we are commited to bring you the education needed to get
            started.
          </p>
          <div className="nm:flex nm:px-[5rem] nm:flex-row space-y-4 nm:space-y-0 nm:space-x-12">
            {/* card 1 */}
            <div className="flex flex-col justify-center items-center border-2 rounded-3xl px-[2rem] space-y-2 h-[258px] bg-blend-overlay bg-card">
              <h1 className="text-[18px] font-bold text-center text-white">
                Social books
              </h1>
              <p className="text-[15px] text-card1 text-center mb-4">
                Books as a Platform. Each debook gives you access to a private
                community. Surround yourself with like-minded people.
              </p>
            </div>
            {/* card 2 */}
            <div className="flex flex-col justify-center items-center border-2 rounded-3xl px-[2rem] space-y-2 h-[258px] bg-blend-overlay bg-card">
              <h1 className="text-[18px] font-bold text-center text-white">
                Asset Books
              </h1>
              <p className="text-[15px] text-card1 text-center mb-4">
                Readers can now sell debooks whenever they want and even make
                some profit out of it. Authors keep a % of every resell.{" "}
              </p>
            </div>
            {/* card 3 */}
            <div className="flex flex-col justify-center items-center border-2 rounded-3xl px-[2rem] space-y-2 h-[258px] bg-blend-overlay bg-card">
              <h1 className="text-[18px] font-bold text-center text-white">
                Utility Books
              </h1>
              <p className="text-[15px] text-card1 text-center mb-4">
                Readers can intereact with the author. Authors know who their
                readers are. Books become alive with the power of the
                Blockchain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
