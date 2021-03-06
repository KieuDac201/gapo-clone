import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ModalPost from "../../components/ModalPost/ModalPost";
import PublishPost from "../../components/PublishPost/PublishPost";
import Post from '../../components/Post/Post'
import { NewFeed, Wrapper } from "./style";
import { getPost } from "../../services";
import SideLeft from "../../components/SideLeft/SideLeft";
import SideRight from "../../components/SideRight/SideRight";
import Layout from "../../components/Layout/Layout";

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
    <Layout>
      <Wrapper>
        {showModal && <ModalPost handleCloseModal={handleCloseModal} setShowModal={setShowModal} setPosts={setPosts} />}
        <section className="newFeed">
          <PublishPost setShowModal={setShowModal} />
          <NewFeed>
            {
              posts ? posts.sort((a, b) => b.time - a.time).map(post => {
                return <Post key={post.id} post={post} posts={posts} />
              }) : <h3 className="no-post">Không có bài viết nào ở đây</h3>
            }
          </NewFeed>
        </section>
      </Wrapper>
    </Layout>
  )
}

export default Home


