export const mintTheFreedom = `
import TheFreedom from 0xc8c5c2718ce30a84

// Do not change these
import NonFungibleToken from 0x631e88ae7f1d7c20
import MetadataViews from 0x631e88ae7f1d7c20

transaction(
  recipient: Address,
  name: String,
  description: String,
  thumbnail: String,
) {
  prepare(signer: AuthAccount) {
    if signer.borrow<&TheFreedom.Collection>(from: TheFreedom.CollectionStoragePath) != nil {
      return
    }

    // Create a new empty collection
    let collection <- TheFreedom.createEmptyCollection()

    // save it to the account
    signer.save(<-collection, to: TheFreedom.CollectionStoragePath)

    // create a public capability for the collection
    signer.link<&{NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>(
      TheFreedom.CollectionPublicPath,
      target: TheFreedom.CollectionStoragePath
    )
  }
  execute {
    // Borrow the recipient's public NFT collection reference
    let receiver = getAccount(recipient)
      .getCapability(TheFreedom.CollectionPublicPath)
      .borrow<&{NonFungibleToken.CollectionPublic}>()
      ?? panic("Could not get receiver reference to the NFT Collection")

    // Mint the NFT and deposit it to the recipient's collection
    TheFreedom.mintNFT(
      recipient: receiver,
      name: name,
      description: description,
      thumbnail: thumbnail,
    )
    
    log("Minted a debook and stored it into the collection")
  } 
}
`;

export const mintFourAgreements = `
import FourAgreements from 0xc8c5c2718ce30a84
import NonFungibleToken from 0x631e88ae7f1d7c20
import MetadataViews from 0x631e88ae7f1d7c20
transaction(
  recipient: Address,
  name: String,
  description: String,
  thumbnail: String,
) {
  prepare(signer: AuthAccount) {
    if signer.borrow<&FourAgreements.Collection>(from: FourAgreements.CollectionStoragePath) != nil {
      return
    }
    // Create a new empty collection
    let collection <- FourAgreements.createEmptyCollection()
    // save it to the account
    signer.save(<-collection, to: FourAgreements.CollectionStoragePath)
    // create a public capability for the collection
    signer.link<&{NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>(
      FourAgreements.CollectionPublicPath,
      target: FourAgreements.CollectionStoragePath
    )
  }
  execute {
    // Borrow the recipient's public NFT collection reference
    let receiver = getAccount(recipient)
      .getCapability(FourAgreements.CollectionPublicPath)
      .borrow<&{NonFungibleToken.CollectionPublic}>()
      ?? panic("Could not get receiver reference to the NFT Collection")
    // Mint the NFT and deposit it to the recipient's collection
    FourAgreements.mintNFT(
      recipient: receiver,
      name: name,
      description: description,
      thumbnail: thumbnail,
    )
    
    log("Minted a debook and stored it into the collection")
  } 
}
`;
