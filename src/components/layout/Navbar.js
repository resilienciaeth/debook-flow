import { Button, Flex, Image, Link } from "@chakra-ui/react";
import { useLogout } from "hooks/auth";
import { Link as RouterLink } from "react-router-dom";
import { MYDEBOOKS } from "lib/routes";
import Sidebar2 from "./Sidebar2";

export default function Navbar() {
  const { logout, isLoading } = useLogout();
  return (
    <div className="flex flex-row justify-between w-full items-center fixed  px-4">
      <Sidebar2 />
      <Link as={RouterLink} to={MYDEBOOKS}>
        <Image
          boxSize="100px"
          objectFit="contain"
          to={MYDEBOOKS}
          src="https://res.cloudinary.com/drxuutjwr/image/upload/v1675023505/Orange-Debook-Logo_llctkm.png"
          alt="logo"
        />
      </Link>
      <div></div>
      {/* }
      <Button
        colorScheme="#FF4227"
        bg="#FF4227"
        size="sm"
        onClick={logout}
        isLoading={isLoading}
      >
        Logout
      </Button>
      */}
    </div>
  );
}
