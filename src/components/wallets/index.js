import { useContext, useState } from "react";
import "./config";
import * as fcl from "@blocto/fcl";

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
        <div className="">
          Congratulations, you have 1 account connected.
          <div className="border-2 py-4">
            <div>
              <h1 className="text-14 font-bold mt-4">
                Your connected address:
              </h1>
              <p className="text-6 mt-4">{user?.walletAddress}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>error</div>
      )}
    </div>
  );
}
