import { Box } from "@chakra-ui/react";
import Post from "./index";

export default function PostsLists({ posts }) {
  return (
    <Box px={4} align="center">
      {posts?.length === 0
        ? "no posts"
        : posts?.map((post) => <Post key={post.id} post={post} />)}
    </Box>
  );
}
