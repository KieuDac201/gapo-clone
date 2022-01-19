import { addDoc, collection, doc, limit, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../../components/Layout/Layout"
import { useUserContext } from "../../context/UserProvider"
import { db } from "../../firebase/config"

const Chat = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const user = useUserContext()

  const messageRef = collection(db, "messages");
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (message && user.uid) {
      const docRef = await addDoc(collection(db, "messages"), {
        message,
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid
      });
      setMessage('')
    }
  }

  useEffect(() => {
    const q = query(messageRef);
    const unsub = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {

        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages)
    });

    return unsub
  }, [])
  return (
    <Layout>
      <Wrapper>
        <ul>
          {
            messages && messages.map(({ photoURL, message, displayName, id, uid }) => {
              return <li key={id} className={user.uid === uid ? 'active' : ''}>
                <img src={photoURL} alt={displayName} />
                <div className="messages">
                  <div>{message}</div>
                </div>
              </li>
            })
          }
        </ul>
        <form className="input" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter message..." value={message} onChange={(e) => setMessage(e.target.value)} />
          <button>submit</button>
        </form>
      </Wrapper>
    </Layout>
  )
}

export default Chat


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
  
  ul{
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

  li{
    display: flex;
    gap: 10px;
    img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    div{
      padding:2px 5px;
      font-size: 14px;
      border-radius: 999px;
      background: #ccc;
      
    }
    &.active{
      
      flex-direction: row-reverse;
      div{
        background: #6FBE49;
        color: #fff;
      }
    }
  }
  .input{
    display: flex;
    border-top: 1px solid #555;
    input{
      flex: 1;
      padding: 10px 15px;
    }
    button{
      padding: 10px 20px;
    }
  }
`