import styled from "styled-components"
import { useUserContext } from "../../context/UserProvider"
import { logOutIcon, userOptionList } from "../../images"
import { IoMdClose } from 'react-icons/io'
import { getAuth, signOut } from "firebase/auth"
import { Link } from "react-router-dom"


const UserOption = ({ setShowUserOption }) => {
  const user = useUserContext()
  const auth = getAuth();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log('log out')

      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <Wrapper>
      <div className="close-icon" onClick={() => setShowUserOption(false)}>
        <IoMdClose />
      </div>
      <Link to="/personal">
        <Header>
          <img src={user.photoURL} alt={user.displayName} />
          <h3>{user.displayName}</h3>
          <p>Trang cá nhân</p>
        </Header>
      </Link>
      <OptionList>
        {userOptionList.map(({ img, text }) => (
          <Option key={text}>
            <img src={img} alt={text} />
            <p>{text}</p>
          </Option>
        ))}
        <Option onClick={logOut}>
          <img src={logOutIcon} alt="Đăng xuất" />
          <p>Đăng xuất</p>
        </Option>
      </OptionList>
    </Wrapper>
  )
}

export default UserOption

const Wrapper = styled.div`
  padding: 20px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
  background: #fff;
  position: relative;

  .close-icon{
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 22px;
    cursor: pointer;
  }
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  img{
    width : 80px;
    height: 80px;
    border-radius: 50%;
  }
`
const OptionList = styled.div`
`
const Option = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-top: 12px;
  cursor: pointer;

  img{
    width: 24px;
    height: 24px;
  }
  p{
    font-size: 14px;
  }
`
