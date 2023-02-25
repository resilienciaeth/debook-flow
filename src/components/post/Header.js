import { Box, Flex, Text } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import { useUser } from "hooks/users";
import { formatDistanceToNow } from "date-fns";
import UsernameButton from "components/profile/UsernameButton";

export default function Header({ post }) {
  const { uid, date } = post;
  const { user, isLoading } = useUser(uid);

  if (isLoading) return "Loading...";

  return (
    <div className="mx-4 mt-4">
      <div className="flex flex-row py-4">
        <Avatar user={user} size="md" />
        <div className="flex flex-col items-start justify-start ml-4">
          <UsernameButton user={user} />
          <p className="text-xs text-left text-debook-2">
            {formatDistanceToNow(date)} ago
          </p>
        </div>
      </div>
    </div>
  );
}
