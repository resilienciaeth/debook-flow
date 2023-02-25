import PostsLists from "./post/PostsLists";
import React, { useContext, useEffect, useState } from "react";
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
import { useFourAgreements, useTheFreedom } from "./fetchTheFreedom";
import {
  useAddPostTheFreedom,
  usePostsTheFreedom,
} from "hooks/postsTheFreedom";
import { BsPlus } from "react-icons/bs";
import ActivityTheFreedom from "./activity";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPostTheFreedom, isLoading: addingPost } = useAddPostTheFreedom();
  const { user, isLoading: authLoading } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleAddPost(data) {
    addPostTheFreedom({
      uid: user.id,
      text: data.text,
    });
    reset();
    onClose(); // Close the modal after submitting the form
  }

  return (
    <>
      <div
        onClick={onOpen}
        className="fixed flex items-center justify-center bottom-24 right-4 w-16 h-16 shadow-md rounded-full bg-debook-2 text-white text-center text-6xl"
      >
        <BsPlus className="text-center" size={40} />
      </div>
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

function FeedTheFreedom() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { imagesTheFreedom, fetchTheFreedom } = useTheFreedom();
  const { postsTheFreedom, isLoading } = usePostsTheFreedom();
  const [selectedTab, setSelectedTab] = useState("Tab1");
  const { id } = useParams();
  const { user, isLoading: authLoading } = useAuth();

  useEffect(() => {
    if (user && user.walletAddress) {
      fetchTheFreedom();
    }
  }, [user]);

  return (
    <div className="flex flex-col h-screen px-4 feed-wrapper">
      {imagesTheFreedom.length > 0 ? (
        <>
          <div className="flex items-center justify-center bg-[#ECECEC] h-12 rounded-3xl px-2 space-x-2 w-[90%]  fixed z-50">
            <div
              onClick={() => setSelectedTab("Tab1")}
              className={`w-[50%] py-2 rounded-3xl text-center text-[18px] cursor-pointer ${
                selectedTab === "Tab1"
                  ? "bg-debook-2 text-white"
                  : "bg-[#ECECEC] text-debook-2"
              }`}
            >
              Feed
            </div>
            <div
              onClick={() => setSelectedTab("Tab2")}
              className={`w-[50%] py-2 rounded-3xl text-center text-[18px] cursor-pointer ${
                selectedTab === "Tab2"
                  ? "bg-debook-2 text-white"
                  : "bg-[#ECECEC] text-debook-2"
              }`}
            >
              Activity
            </div>
          </div>
          <div className=" mt-10 mb-32">
            {selectedTab === "Tab1" && (
              <>
                <PostsLists posts={postsTheFreedom} />
                <NewPost isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
              </>
            )}
            {selectedTab === "Tab2" && (
              <div>
                <>
                  <ActivityTheFreedom />
                </>
              </div>
            )}
          </div>
        </>
      ) : (
        "You don't own this debook"
      )}
    </div>
  );
}

export default FeedTheFreedom;
