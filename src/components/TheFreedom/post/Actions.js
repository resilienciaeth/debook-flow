import { Flex, IconButton } from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import {
  FaRegHeart,
  FaHeart,
  FaComment,
  FaRegComment,
  FaTrash,
} from "react-icons/fa";
import {
  useToggleLike,
  useDeletePost,
  useToggleLikeTheFreedom,
} from "hooks/posts";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";
import { useComments } from "hooks/comments";

export default function Actions({ post }) {
  const { id, likes, uid } = post;
  const { user, isLoading: userLoading } = useAuth();

  const isLiked = likes.includes(user?.id);
  const config = {
    id,
    isLiked,
    uid: user?.id,
  };

  const { toggleLikeTheFreedom, isLoading: likeLoading } =
    useToggleLikeTheFreedom(config);
  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);
  const { comments, isLoading: commentsLoading } = useComments(id);

  return (
    <div className="flex flex-row mx-4 my-4 ">
      <div className="flex flex-row space-x-4">
        <div
          onClick={toggleLikeTheFreedom}
          className="flex flex-row items-center space-x-2"
        >
          {isLiked ? (
            <FaHeart className="text-debook-2" />
          ) : (
            <FaRegHeart className="text-debook-2" />
          )}
          <p className="text-debook-2">{likes.length}</p>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <Link to={`${PROTECTED}/comments/${id}`}>
            {comments?.length === 0 ? (
              <FaRegComment className="text-debook-2" />
            ) : (
              <FaComment className="text-debook-2" />
            )}
          </Link>
          <p className="text-debook-2">{comments?.length}</p>
        </div>
      </div>
      {!userLoading && user.id === uid && (
        <IconButton
          ml="auto"
          onClick={deletePost}
          isLoading={deleteLoading}
          size="md"
          variant="ghost"
          icon={<FaTrash className="text-debook-2" />}
          isRound
        />
      )}
    </div>
  );
}
