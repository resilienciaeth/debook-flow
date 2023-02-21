import { Box, Button, Code, Stack } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import { useAuth } from "hooks/auth";
import { PROTECTED, USERS } from "lib/routes";
import { GoVerified } from "react-icons/go";
import { Link } from "react-router-dom";

function ActiveUser() {
  const { user, isLoading } = useAuth();

  if (isLoading) return "Loading auth user..";

  return (
    <Stack align="center" spacing="5" my="8">
      <Avatar user={user} />
      <div className="flex flex-row items-center space-x-2">
        <Code>@{user.username}</Code>
        {user.isVerified === true && <GoVerified className="text-[#FF4227]" />}
      </div>
      <Button
        colorScheme="#FF4227"
        w="full"
        as={Link}
        to={`${PROTECTED}/profile/${user.id}`}
      >
        Edit Profile
      </Button>
    </Stack>
  );
}

export default function Sidebar() {
  return (
    <Box
      px="6"
      height="100vh"
      w="100%"
      maxW="300px"
      borderLeft="1px solid"
      borderColor="#FF4227"
      position="sticky"
      top="16"
      display={{ base: "none", md: "block" }}
    >
      <ActiveUser />
      <Box align="center">
        <Box as="ul" borderBottom="2px solid" borderColor="#FF4227" />
        <Button
          variant="outline"
          colorScheme="#FF4227"
          w="full"
          mt="4"
          size="sm"
          as={Link}
          to={USERS}
        >
          ALL MY DEBOOKS
        </Button>
      </Box>
    </Box>
  );
}
