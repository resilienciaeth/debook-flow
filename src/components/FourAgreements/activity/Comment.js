import React from "react";
import { Avatar as ChakraAvatar, Button, Code } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";

const comments = [
  {
    id: 1,
    username: "campo",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/debook-social-platform.appspot.com/o/avatars%2F9cAYJgj3IpUzQGiu5xSErHxp0WY2?alt=media&token=0e6f48fc-4504-4222-a04d-e6e061163f4b",
    verified: true,
    timestamp: "30 minutes ago",
    type: "shared a comment",
    page: 12,
    text: "Living is easy with eyes closed, misunderstanding all you see…. — John Lennon",
    comment: "I love this quote, it is such a great quote.",
  },
  {
    id: 2,
    username: "dani",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/debook-social-platform.appspot.com/o/avatars%2FWLVgIOb711Y4sypB2kzHP0sHhnq2?alt=media&token=3cdd1fdf-908f-44df-bdbd-17e717d713c5",
    verified: true,
    timestamp: "2 hours ago",
    type: "highlighted",
    page: 24,
    text: "To be or not to be, that is the question. — William Shakespeare",
  },
  {
    id: 3,
    username: "ernest",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/debook-social-platform.appspot.com/o/avatars%2Fz0bLEaeEs4Wkub27GwINcaLPlGz1?alt=media&token=307a6f23-7cdb-4200-82c5-9bea3e22f54c",
    verified: true,
    timestamp: "5 days ago",
    type: "highlighted",
    page: 20,
    text: "I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.' — Martin Luther King Jr.",
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
