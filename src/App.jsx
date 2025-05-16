import List from "./components/list/list";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { useEffect } from "react";
import { auth } from "./lib/firebase"; // Adjust the path to your Firebase configuration file
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = false;
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    }
    );
    return () => {
      unSub();
    };
  }
  , []);
  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification/>
    </div>
  );
}

export default App;