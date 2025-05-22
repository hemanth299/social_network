import "./addUser.css";
import { db } from "../../../../lib/firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { useUserStore } from "../../../../lib/userStore";

const AddUser = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const { currentUser } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();
    setUser(null);
    setError("");

    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      if (username === currentUser.username) {
        setError("You cannot add yourself.");
        return;
      }

      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        const foundUser = querySnapShot.docs[0].data();
        setUser(foundUser);
      } else {
        setError("User not found.");
      }
    } catch (err) {
      console.log(err);
      setError("An error occurred during search.");
    }
  };

  const handleAdd = async () => {
    if (!user) return;

    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      const chatInfo = {
        chatId: newChatRef.id,
        lastMessage: "",
        receiverId: currentUser.id,
        updatedAt: Date.now(),
      };

      const reverseChatInfo = {
        chatId: newChatRef.id,
        lastMessage: "",
        receiverId: user.id,
        updatedAt: Date.now(),
      };

      await setDoc(doc(userChatsRef, user.id), {
        chats: arrayUnion(chatInfo),
      }, { merge: true });

      await setDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion(reverseChatInfo),
      }, { merge: true });

      setUser(null);
      setError("User added successfully! ✅");
    } catch (err) {
      console.log(err);
      setError("Failed to add user.");
    }
  };

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" required />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      {user && (
        <div className="user">
          <div className="detail">
            <img src={user.avatar || "./avatar.png"} alt="avatar" />
            <span>{user.username}</span>
          </div>
          <button onClick={handleAdd}>Add User</button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
