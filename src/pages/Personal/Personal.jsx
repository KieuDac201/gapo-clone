import styled from "styled-components"
import Header from "../../components/Header/Header"
import { useUserContext } from "../../context/UserProvider"
import { AiTwotoneSetting } from 'react-icons/ai'

const Personal = () => {
  const { displayName, photoURL } = useUserContext()
  return (
    <Wrapper>
      <Header />
      <div className="user">
        <CoverImage>
          <img src="https://www.gapo.vn/assets/images/default-cover.jpg" alt="" />
        </CoverImage>
        <PicProfile>
          <img src={photoURL} alt={displayName} />
        </PicProfile>
        <UserInfo>
          <h3>{displayName}</h3>
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
const CoverImage = styled.div``
const PicProfile = styled.div`
  display: flex;
  justify-content: center;
  /* transform: translateY(-90%); */
  margin-top: -90px;
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
