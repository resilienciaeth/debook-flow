import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import { useUpdateAvatar } from "hooks/users";
import { useState } from "react";

export default function NewWallet({ isOpen, onClose }) {
  const [walletAddress, setWalletAddress] = useState("");
  const [isLoading, setLoading] = useState(false);

  async function connectWallet() {
    setLoading(true);

    if (window.ethereum) {
      try {
        const [accounts] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.error("MetaMask is not installed.");
    }
  }

  const { user, isLoading: authLoading } = useAuth();
  const {
    setFile,
    updateAvatar,
    isLoading: fileLoading,
    fileURL,
  } = useUpdateAvatar(user?.id);

  if (authLoading) return "Loading...";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Wallet Address</ModalHeader>
        <ModalCloseButton avatar />
        <ModalBody>
          <HStack spacing="5">
            {isLoading ? (
              <div className="text-black">Connecting to wallet...</div>
            ) : (
              <button className="text-black" onClick={connectWallet}>
                Connect Wallet
              </button>
            )}
            <FormControl py="4">
              <FormLabel htmlFor="walletAddress">Change Wallet</FormLabel>
              <div onChange={(e) => setWalletAddress(e.target.value)}>
                {walletAddress}
              </div>
            </FormControl>
          </HStack>
          <Button
            loadingText="Uploading"
            w="full"
            my="6"
            colorScheme="#FF4227"
            onClick={updateAvatar}
            isLoading={fileLoading}
          >
            Save
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
