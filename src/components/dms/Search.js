import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "lib/firebase";
import { useAuth } from "hooks/auth";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { user: authUser, isLoading: authLoading } = useAuth();

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("username", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId =
      authUser.id > user.id ? authUser.id + user.id : user.id + authUser.id;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", authUser.id), {
          [combinedId + ".userInfo"]: {
            id: user.id,
            displayName: user.username,
            photoURL: user.avatar,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.id), {
          [combinedId + ".userInfo"]: {
            id: authUser.id,
            displayName: authUser.username,
            photoURL: authUser.avatar,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("");
  };
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div
          className="p-[10px] flex items-center gap-2 hover:bg-[##2f2d52] cursor-pointer"
          onClick={handleSelect}
        >
          <img
            className="w-[50px] h-[50px] border-2 object-cover rounded-3xl"
            src={user.avatar}
            alt=""
          />
          <div className="userChatInfo">
            <span className="text-[18px]">{user.username}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
