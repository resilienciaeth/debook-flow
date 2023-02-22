import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { usePosts } from "hooks/posts";
import { useUser } from "hooks/users";
import React from "react";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import { format } from "date-fns";
import EditProfile from "./EditProfile";
import { useAuth } from "hooks/auth";
import { GoVerified } from "react-icons/go";
import NFTsOwned from "./NFTsOwned";

export default function Profile() {
  const { id } = useParams();
  console.log(id);
  const { isLoading: postsLoading } = usePosts(id);
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure(id);

  if (userLoading) return "Loading...";

  return (
    <Stack spacing="5">
      <Flex p={["4", "6"]} marginBottom="6" pos="relative" align="center">
        <Avatar size="2xl" user={user} />

        <Stack ml="10">
          <div className="flex flex-row items-center space-x-2">
            <Text fontSize="2xl">{user.username}</Text>
            {user.isVerified === true && (
              <GoVerified className="text-[#FF4227]" />
            )}
          </div>
          <HStack spacing="10">
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              debooks collected: 1{/* {nfts.lenght} */}
            </Text>
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Joined: {format(user.date, "MMMM yyyy")}
            </Text>
          </HStack>
          {!authLoading && authUser.id === user.id && (
            <Button
              mb="2"
              top="6"
              right="6"
              colorScheme="#FF4227"
              bg="#FF4227"
              onClick={onOpen}
            >
              Change Avatar
            </Button>
          )}
        </Stack>

        <EditProfile isOpen={isOpen} onClose={onClose} />
      </Flex>
      {postsLoading ? (
        <Text>Posts are loading</Text>
      ) : (
        <Box overflowY="scroll" bgColor="#FF4227">
          <NFTsOwned user={user} />
        </Box>
      )}
    </Stack>
  );
}
