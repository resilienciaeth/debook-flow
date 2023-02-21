import { Button } from "@chakra-ui/react";
import { PROTECTED } from "lib/routes";
import { GoVerified } from "react-icons/go";
import { Link } from "react-router-dom";

export default function UsernameButton({ user }) {
  return (
    <div className="flex flex-row items-center space-x-1">
      <Button
        as={Link}
        to={`${PROTECTED}/profile/${user.id}`}
        colorScheme="#FF4227"
        className="text-[#FF4227]"
        variant="link"
      >
        {user.username}
      </Button>
      {user.isVerified === true && (
        <GoVerified size={15} className="text-[#FF4227]" />
      )}
    </div>
  );
}
