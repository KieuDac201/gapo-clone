import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ModalPost from "../../components/ModalPost/ModalPost";
import PublishPost from "../../components/PublishPost/PublishPost";
import Post from '../../components/Post/Post'
import { NewFeed, Wrapper } from "./style";
import { getPost } from "../../services";


const Home = () => {
  const [showModal, setShowModal] = useState(false)

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPost().then(data => {
      setPosts(data)
    })
  }, [])



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
      {showModal && <ModalPost handleCloseModal={handleCloseModal} setShowModal={setShowModal} setPosts={setPosts} />}
      <section className="newFeed">
        <PublishPost setShowModal={setShowModal} />
        <NewFeed>
          {
            posts ? posts.map(post => {
              return <Post key={post.id} post={post} />
            }) : <h3 className="no-post">Không có bài viết nào ở đây</h3>
          }
        </NewFeed>
      </section>

    </Wrapper>
  )
}

export default Home


