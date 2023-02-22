import { Box } from "@chakra-ui/react";
import Post from "components/post";
import { usePost } from "hooks/posts";
import { FEEDFOURAGREEMENTS } from "lib/routes";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import CommentList from "./CommentList";
import NewComment from "./NewComment";

export default function Comments() {
  const { id } = useParams();
  const { post, isLoading } = usePost(id);

  if (isLoading) return "Loading...";

  return (
    <Box align="center" pt="50">
      <Box position="absolute" top="20" left="0" mt="4" ml="2">
        <Link
          to={FEEDFOURAGREEMENTS}
          className="text-debook-1 hover:text-gray-800"
        >
          <IoIosArrowBack className=" mb-2 ml-4" size={40} />
        </Link>
      </Box>
      <Post post={post} />
      <NewComment post={post} />
      <CommentList post={post} />
    </Box>
  );
}
