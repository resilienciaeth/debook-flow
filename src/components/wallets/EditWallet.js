import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import PostsLists from "components/post/PostsLists";
import { usePosts } from "hooks/posts";
import { useUser } from "hooks/users";
import React from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useAuth } from "hooks/auth";
import { GoVerified } from "react-icons/go";
import NewWallet from "./NewWallet";

export default function EditWallet() {
  const { id } = useParams();
  console.log(id);
  const { posts, isLoading: postsLoading } = usePosts(id);
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure(id);

  if (userLoading) return "Loading...";

  return (
    <Stack spacing="5">
      <Flex p={["4", "6"]} pos="relative" align="center">
        <Stack ml="10">
          <div className="flex flex-row items-center space-x-2">
            <Text fontSize="2xl">{user.username}</Text>
            <Text>{user.walletAddress}</Text>
            {user.isVerified === true && (
              <GoVerified className="text-[#FF4227]" />
            )}
          </div>
          {!authLoading &&
            authUser.id === user.id &&
            !authUser.walletAddress && (
              <Button
                mb="2"
                top="6"
                right="6"
                colorScheme="#FF4227"
                bg="#FF4227"
                onClick={onOpen}
              >
                Add a Wallet
              </Button>
            )}
        </Stack>

        <NewWallet isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Divider />
    </Stack>
  );
}
