import { useContext, useState } from "react";
import "./config";
import * as fcl from "@onflow/fcl";

import { useUpdateWalletAddress } from "hooks/users";
import { useAuth } from "hooks/auth";

export default function ConnectWallet() {
  const { user, isLoading: authLoading } = useAuth();

  const [walletAddress, setWalletAddress] = useState({
    loggedIn: false,
    addr: undefined,
  });

  const loginHandler = () => {
    fcl.currentUser().subscribe(setWalletAddress); // fires everytime account connection status updates
    fcl.authenticate(); // authenticate
  };

  const logoutHandler = () => {
    fcl.unauthenticate(); // unauthenticate and clear account info in FCL
    setWalletAddress({ addr: undefined, loggedIn: false });
  };

  const { updateWalletAddress, isLoading } = useUpdateWalletAddress(user?.id);

  if (authLoading) return "Loading...";

  return (
    <div>
      {!walletAddress?.addr && !user.walletAddress ? (
        <div>
          <h1>
            You don't have any wallets connected. Please connect your wallet to
            start reading your debooks.
          </h1>
          <button onClick={loginHandler}>Connect Wallet</button>
        </div>
      ) : walletAddress && !user.walletAddress ? (
        <div>
          <h3>Wallet Address: {walletAddress?.addr}</h3>
          <button onClick={() => updateWalletAddress(walletAddress?.addr)}>
            Save your Wallet
          </button>
        </div>
      ) : user.walletAddress ? (
        <div className="px-4">
          <p className="text-center font-bold">You have 1 account connected.</p>
          <div className="flex flex-row h-[59px] mb-10 bg-[#E49489] text-white rounded-lg">
            <div className="flex ml-4 flex-col justify-center text-left text-white">
              <h1 className="text-[15px] font-bold">Your connected address:</h1>
              <p className="text-[20px] leading-4 font-bold">
                {user?.walletAddress}
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="text-center">
              Fund Your Account with USDC to buy more debooks
            </div>
            <button className="p-4 text-white button-debook font-bold">
              Buy USDC
            </button>
          </div>
        </div>
      ) : (
        <div>error</div>
      )}
    </div>
  );
}
