import * as fcl from "@blocto/fcl";

fcl
  .config()
  // connect to Flow testnet
  // for fcl@<1.0.0 this should be https://access-testnet.onflow.org
  .put("accessNode.api", "https://rest-testnet.onflow.org")

  // use Blocto testnet wallet with HTTP/POST
  .put(
    "discovery.wallet",
    "https://flow-wallet-testnet.blocto.app/api/flow/authn"
  )
  .put("discovery.wallet.method", "HTTP/POST");

fcl.currentUser().subscribe(console.log); // fires everytime account connection status updates

// unauthenticate and clear account info in FCL
fcl.unauthenticate();
