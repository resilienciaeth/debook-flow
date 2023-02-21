import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";
import { Avatar as ChakraAvatar } from "@chakra-ui/react";

export default function Avatar({
  user,
  size = "xl",
  overrideAvatar = null,
  onClick,
}) {
  return (
    <ChakraAvatar
      as={Link}
      to={`${PROTECTED}/profile/${user.id}`}
      name={user.username}
      onClick={onClick}
      size={size}
      src={overrideAvatar || user.avatar}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
    />
  );
}
