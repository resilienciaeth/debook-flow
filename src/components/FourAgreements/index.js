import PostsLists from "components/post/PostsLists";
import React, { useEffect, useState } from "react";
import { useAddPost, usePosts } from "hooks/posts";
import {
  Box,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import reactTextareaAutosize from "react-textarea-autosize";
import { useAuth } from "hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import * as fcl from "@onflow/fcl";
import * as types from "@onflow/types";
import { getMetadataFourAgreements } from "cadence/scripts/getMetadata";
import { getIDsFourAgreements } from "cadence/scripts/getID_script";
import { useFourAgreements } from "./fetchFourAgreements";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
    onClose(); // Close the modal after submitting the form
  }

  return (
    <>
      <Button
        position="absolute"
        bottom="20"
        right="4"
        rounded="full"
        boxShadow="md"
        colorScheme="#FF4227"
        backgroundColor="#FF4227"
        color="white"
        size="lg"
        onClick={onOpen}
      >
        +
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(handleAddPost)}>
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
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              type="submit"
              isLoading={authLoading || addingPost}
              onClick={handleSubmit(handleAddPost)}
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

// import statements...

function FeedFourAgreements() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { imagesFourAgreements, fetchFourAgreements } = useFourAgreements();
  const { posts, isLoading } = usePosts();
  const [selectedTab, setSelectedTab] = useState("Tab1");
  const { id } = useParams();
  const { user, isLoading: authLoading } = useAuth();

  useEffect(() => {
    if (user && user.walletAddress) {
      fetchFourAgreements();
    }
  }, [user]);

  return (
    <div className="flex flex-col h-screen">
      {imagesFourAgreements.length > 0 ? (
        <>
          <div className="flex items-center justify-center bg-white h-12 space-x-4 w-full px-2 fixed z-50">
            <div
              onClick={() => setSelectedTab("Tab1")}
              className={`w-1/3 py-2 rounded-xl text-center cursor-pointer ${
                selectedTab === "Tab1"
                  ? "bg-debook-1 text-white"
                  : "bg-gray-300"
              }`}
            >
              feed
            </div>
            <div
              onClick={() => setSelectedTab("Tab2")}
              className={`w-1/3 py-2 rounded-xl text-center cursor-pointer ${
                selectedTab === "Tab2"
                  ? "bg-debook-1 text-white"
                  : "bg-gray-300"
              }`}
            >
              activity
            </div>
          </div>
          <div className=" mt-20">
            {selectedTab === "Tab1" && (
              <>
                <Button
                  position="absolute"
                  bottom="20"
                  right="4"
                  rounded="full"
                  boxShadow="md"
                  colorScheme="#FF4227"
                  backgroundColor="#FF4227"
                  color="white"
                  size="lg"
                  onClick={onOpen}
                >
                  +
                </Button>
                <PostsLists posts={posts} />
                <NewPost isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
              </>
            )}
            {selectedTab === "Tab2" && (
              <div>
                <h2>Book</h2>
                <p>This is where the activity on top of the debook appears.</p>
              </div>
            )}
          </div>
        </>
      ) : (
        "no puedes ver este contenido"
      )}
    </div>
  );
}

export default FeedFourAgreements;
