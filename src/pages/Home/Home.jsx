import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom"
import styled from "styled-components";
import Header from "../../components/Header/Header";
import ModalPost from "../../components/ModalPost/ModalPost";
import NewFeed from "../../components/NewFeed/NewFeed";
import PublishPost from "../../components/PublishPost/PublishPost";

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const auth = getAuth();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log('log out')

      })
      .catch((error) => {
        console.log('log out error')
      });
  };

  const handleCloseModal = (cap, file) => {
    if (cap || file) {
      const isCancel = window.confirm("Bạn có chắc muốn bỏ bài viết!")
      if (isCancel) {
        setShowModal(false)
      }
      return
    }
    setShowModal(false)
  }

  return (
    <Wrapper>
      <Header />
      {showModal && <ModalPost handleCloseModal={handleCloseModal} setShowModal={setShowModal} />}
      <section className="newFeed">
        <PublishPost setShowModal={setShowModal} />
        <NewFeed />
      </section>
      <button onClick={logOut} style={{ position: 'fixed', zIndex: 100 }}>log out </button>

    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  .newFeed{
    position: relative;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 420px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`
