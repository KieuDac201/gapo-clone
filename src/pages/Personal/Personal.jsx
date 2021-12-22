import styled from "styled-components"
import Header from "../../components/Header/Header"
import { userContext, useUserContext } from "../../context/UserProvider"
import { AiTwotoneSetting } from 'react-icons/ai'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config"
import { getPostWithUid, getUserWithUid } from "../../services"
import Post from "../../components/Post/Post"

const Personal = () => {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const { idUser } = useParams()

  useEffect(() => {
    getUserWithUid(idUser).then(data => setUser(data))
    getPostWithUid(idUser).then(data => {
      console.log(data)
      setPosts(data)
    })
  }, [])

  console.log(user)


  return (
    <>
      <Wrapper>
        <Header />
        <div className="user">
          <CoverImage>
            <img src="https://www.gapo.vn/assets/images/default-cover.jpg" alt="" />
          </CoverImage>
          <PicProfile>
            <img src={user?.photoURL} alt={user?.displayName} />
          </PicProfile>
          <UserInfo>
            <h3>{user?.displayName}</h3>
            <p>Su tu</p>
          </UserInfo>
          <UserSelect>
            <ul className="list-select">
              <li className="active">Dòng thời gian</li>
              <li>Giới thiệu</li>
              <li>Bạn bè</li>
              <li>Ảnh</li>
              <li>Dòng thời gian</li>
            </ul>
            <div className="setting-icon">
              <AiTwotoneSetting />
            </div>
          </UserSelect>
        </div>
      </Wrapper>
      <NewFeed>
        {
          posts ? posts.map(post => {
            return <Post key={post.id} post={post} posts={posts} />
          }) : <h3 className="no-post">Không có bài viết nào ở đây</h3>
        }
      </NewFeed>
    </>
  )
}

export default Personal

const Wrapper = styled.div`
  .user{
    position: relative;
    background: #fff;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 800px;
  width: 100%;
  }
`
const CoverImage = styled.div`
  background: #fff;
`
const PicProfile = styled.div`
  display: flex;
  justify-content: center;
  /* transform: translateY(-90%); */
  margin-top: -90px;
  background: #fff;
  img{
    width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #fff;
  overflow: hidden;
  }
`
const UserInfo = styled.div`
  text-align: center;
`
const UserSelect = styled.div`
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  ul{
    display: flex;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    li{
      padding: 12px;
      &.active{
        border-bottom: 2px solid #6fbe44;
      }
    }
  }
  .setting-icon{
    background: #eee;
    border-radius: 4px;
    padding: 8px;
    display: grid;
    place-items: center;
  }
`
const NewFeed = styled.div`
  position: relative;
  max-width: 450px;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .no-post {
    position: fixed;
    top: 50%;
    left: 50%;
    transfrom: translate(-50%, -50%);
  }
`