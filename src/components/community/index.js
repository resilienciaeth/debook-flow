import PostsLists from "components/post/PostsLists";
import { Tabs } from "flowbite-react";
import React, { useState } from "react";
import { useAddPost, usePosts } from "hooks/posts";
import { Box, Button, Heading, HStack, Textarea } from "@chakra-ui/react";
import reactTextareaAutosize from "react-textarea-autosize";
import { useAuth } from "hooks/auth";
import { useForm } from "react-hook-form";

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
            as={reactTextareaAutosize}
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

export default function Community() {
  const { posts, isLoading } = usePosts();
  const [selectedTab, setSelectedTab] = useState("Tab1");

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center bg-white h-12 space-x-4 w-full px-2 fixed z-50">
        <div
          onClick={() => setSelectedTab("Tab1")}
          className={`w-1/3 py-2 rounded-xl text-center cursor-pointer ${
            selectedTab === "Tab1" ? "bg-debook-1 text-white" : "bg-gray-300"
          }`}
        >
          feed
        </div>
        <div
          onClick={() => setSelectedTab("Tab2")}
          className={`w-1/3 py-2 rounded-xl text-center cursor-pointer ${
            selectedTab === "Tab2" ? "bg-debook-1 text-white" : "bg-gray-300"
          }`}
        >
          activity
        </div>
        <div
          onClick={() => setSelectedTab("Tab3")}
          className={`w-1/3 py-2 rounded-xl text-center cursor-pointer ${
            selectedTab === "Tab3" ? "bg-debook-1 text-white" : "bg-gray-300"
          }`}
        >
          debooks
        </div>
      </div>
      <div className=" mt-10">
        {selectedTab === "Tab1" && (
          <>
            <NewPost />
            <PostsLists posts={posts} />
          </>
        )}
        {selectedTab === "Tab2" && (
          <div>
            <h2>Book</h2>
            <p>This is where the activity on top of the debook appears.</p>
          </div>
        )}
        {selectedTab === "Tab3" && (
          <div>
            <h2>debooks</h2>
            <p>
              This is where people can see the activity of the debook in the
              secondary market
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
