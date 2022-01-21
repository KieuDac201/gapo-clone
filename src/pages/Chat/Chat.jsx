import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import { useUserContext } from "../../context/UserProvider";
import { db } from "../../firebase/config";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const user = useUserContext();
  const { idChat } = useParams();

  const docRef = doc(db, "conversations", idChat);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const messData = {
      message,
      time: Date.now(),
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    console.log(messData);
    await updateDoc(docRef, {
      messages: arrayUnion(messData),
    });
    setMessage("");
  };

  useEffect(() => {
    const checkChatExist = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return;
      } else {
        await setDoc(docRef, { messages: [] });
      }
    };
    checkChatExist();
  }, [idChat]);

  useEffect(() => {
    const unsub = onSnapshot(docRef, (doc) => {
      const dataMessages = doc.data()?.messages
        ? doc.data()?.messages.sort((a, b) => a.time - b.time)
        : [];
      setMessages(dataMessages);
    });

    return unsub;
  }, [idChat]);

  console.log(messages);
  return (
    <Layout>
      <Wrapper>
        <ul>
          {messages &&
            messages.map(({ photoURL, message, displayName, time, uid }) => {
              return (
                <li key={time} className={user.uid === uid ? "active" : ""}>
                  <img src={photoURL} alt={displayName} />
                  <div className="messages">
                    <div>{message}</div>
                  </div>
                </li>
              );
            })}
        </ul>
        <form className="input" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>submit</button>
        </form>
      </Wrapper>
    </Layout>
  );
};

export default Chat;

const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background: #fff;
  flex-direction: column;

  ul {
    flex: 1;
    overflow-y: scroll;
    padding: 20px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: flex-end;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  li {
    display: flex;
    gap: 10px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    div {
      padding: 2px 5px;
      font-size: 14px;
      border-radius: 999px;
      background: #ccc;
    }
    &.active {
      flex-direction: row-reverse;
      div {
        background: #6fbe49;
        color: #fff;
      }
    }
  }
  .input {
    display: flex;
    border-top: 1px solid #555;
    input {
      flex: 1;
      padding: 10px 15px;
    }
    button {
      padding: 10px 20px;
    }
  }
`;
