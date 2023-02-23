import { useToast } from "@chakra-ui/react";
import { uuidv4 } from "@firebase/util";
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "lib/firebase";
import { DASHBOARD } from "lib/routes";
import { useState } from "react";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";

export function useAddPostTheFreedom() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  async function addPostTheFreedom(postTheFreedom) {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "postsTheFreedom", id), {
      ...postTheFreedom,
      id,
      date: Date.now(),
      likes: [],
    });
    toast({
      title: "Post added successfully!",
      status: "success",
      isClosable: true,
      position: "top",
      duration: 5000,
    });
    setLoading(false);
  }

  return { addPostTheFreedom, isLoading };
}

export function useToggleLike({ id, isLiked, uid }) {
  const [isLoading, setLoading] = useState(false);

  async function toggleLike() {
    setLoading(true);
    const docRef = doc(db, "postsTheFreedom", id);
    await updateDoc(docRef, {
      likes: isLiked ? arrayRemove(uid) : arrayUnion(uid),
    });
    setLoading(false);
  }

  return { toggleLike, isLoading };
}

export function useDeletePostTheFreedom(id) {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  async function deletePostTheFreedom() {
    const res = window.confirm("Are you sure you want to delete this post?");

    if (res) {
      setLoading(true);

      // Delete post document
      await deleteDoc(doc(db, "postsTheFreedom", id));

      // Delete comments
      const q = query(
        collection(db, "commentsTheFreedom"),
        where("postTheFreedomID", "==", id)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => deleteDoc(doc.ref));

      toast({
        title: "Post deleted!",
        status: "info",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      navigate();

      setLoading(false);
    }
  }

  return { deletePostTheFreedom, isLoading };
}

export function usePostTheFreedom(id) {
  const q = doc(db, "postsTheFreedom", id);
  const [postTheFreedom, isLoading] = useDocumentData(q);

  return { postTheFreedom, isLoading };
}

export function usePostsTheFreedom(uid = null) {
  const q = uid
    ? query(
        collection(db, "postsTheFreedom"),
        orderBy("date", "desc"),
        where("uid", "==", uid)
      )
    : query(collection(db, "postsTheFreedom"), orderBy("date", "desc"));
  const [postsTheFreedom, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { postsTheFreedom, isLoading };
}
