import { Box, Button, Heading, HStack, Textarea } from "@chakra-ui/react";
import PostsLists from "components/post/PostsLists";
import { useAuth } from "hooks/auth";
import { useAddPost, usePosts } from "hooks/posts";
import { useForm } from "react-hook-form";
import TextareaAutoSize from "react-textarea-autosize";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }

  return (
    <>
      <Box maxW="600px" px="4" mx="auto" py="10">
        <form onSubmit={handleSubmit(handleAddPost)}>
          <HStack justify="space-between">
            <Heading size="lg">New Post</Heading>
            <Button
              colorScheme="#FF4227"
              type="submit"
              isLoading={authLoading || addingPost}
            >
              Post
            </Button>
          </HStack>
          <Textarea
            as={TextareaAutoSize}
            resize="none"
            mt="5"
            placeholder="Create a new post"
            boxShadow="none"
            minRows={3}
            {...register("text", { required: true })}
          />
        </form>
      </Box>
    </>
  );
}

export default function Dashboard() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return "Loading...";
  return (
    <>
      <NewPost />
      <PostsLists posts={posts} />
    </>
  );
}
