import React from "react";
import { Avatar as ChakraAvatar, Button, Code } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";

const comments = [
  {
    id: 1,
    username: "sandra",
    avatar:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677277418/christopher-campbell-rDEOVtE7vOs-unsplash_ornmee.jpg",
    verified: true,
    timestamp: "14 minutes ago",
    type: "shared a comment",
    page: 24,
    text: "I suppose I ought to eat or drink something or other; but the great question is ‘What?",
    comment:
      "I love when this happens. Sometimes we don't know what we want, and that is okay.",
  },
  {
    id: 2,
    username: "jon",
    avatar:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677277639/vicky-hladynets-C8Ta0gwPbQg-unsplash_jzh2of.jpg",
    verified: true,
    timestamp: "10 hours ago",
    type: "shared a comment",
    page: 24,
    text: "It's no use going back to yesterday, because I was a different person then.",
    comment: "We are constantly evolving. That is the meaning of life!",
  },
  {
    id: 3,
    username: "melissa",
    avatar:
      "https://res.cloudinary.com/drxuutjwr/image/upload/v1677277563/matheus-ferrero-pg_WCHWSdT8-unsplash_1_tvarj0.jpg",
    verified: true,
    timestamp: "5 days ago",
    type: "highlighted",
    page: 98,
    text: "And what is the use of a book,' thought Alice, 'without pictures or conversation?",
    comment:
      "This is exactly why I love debook, I feel like my books have come to life.",
  },
];

export default function CommentList() {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

function Comment({ comment }) {
  return (
    <div className="bg-[#F5F5F5] pb-4 rounded-2xl">
      <div className="">
        <div className="mx-4 mt-4">
          <div className="flex flex-row py-4">
            <ChakraAvatar as={Link} size="md" src={comment.avatar} />
            <div className="flex flex-col items-start justify-center ml-4">
              <div className="flex flex-row items-center space-x-1">
                <Button
                  colorScheme="#FF4227"
                  className="text-[#FF4227]"
                  variant="link"
                >
                  {comment.username}
                </Button>
                {comment.verified && (
                  <GoVerified size={15} className="text-[#FF4227]" />
                )}
              </div>
              <p className="text-xs text-center text-debook-2">
                {comment.timestamp}
              </p>
            </div>
          </div>
        </div>
        <div className="mx-4">
          <h1 className="text-sm  font-extralight font-italic">
            {comment.type} from page {comment.page}:
          </h1>
          <Code>{comment.text}</Code>
          <h1 className="mt-2">{comment.comment}</h1>
        </div>
      </div>
    </div>
  );
}
