import styled from "styled-components"
import { useContext } from "react"
import { userContext } from "../../context/UserProvider"
import Button from "../Button/Button"

const PublishPost = ({ setShowModal }) => {
  const { user } = useContext(userContext)

  const showModal = () => {
    setShowModal(true)
  }
  return (
    <Wrapper>

      <img src={user?.photoURL} alt="" />
      <Button onClick={showModal}>Đăng bài viết</Button>
      <svg onClick={showModal} width="1.5rem" height="1.5rem" viewBox="0 0 20 18" fill="none"><g filter="url(#filter0_i)"><path d="M17 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17H17C18.1046 17 19 16.1046 19 15V3C19 1.89543 18.1046 1 17 1Z" fill="#A5D2FF"></path></g><path d="M17 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17H17C18.1046 17 19 16.1046 19 15V3C19 1.89543 18.1046 1 17 1Z" stroke="#3B4353" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><g filter="url(#filter1_i)"><path d="M2 16.5L3.93463 12.7907C4.54153 11.6271 6.10893 11.3978 7.02376 12.3387C7.81547 13.1531 9.13625 13.1092 9.87217 12.2441L12.1548 9.56091C13.1374 8.4058 14.9979 8.72186 15.544 10.1367L18 16.5" fill="#51DB61"></path></g><path d="M2 16.5L3.93463 12.7907C4.54153 11.6271 6.10893 11.3978 7.02376 12.3387V12.3387C7.81547 13.1531 9.13625 13.1092 9.87217 12.2441L12.1548 9.56091C13.1374 8.4058 14.9979 8.72186 15.544 10.1367L18 16.5" stroke="#3B4353" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 8C8.10457 8 9 7.10457 9 6C9 4.89543 8.10457 4 7 4C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8Z" fill="#FFDE2E" stroke="#3B4353" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><defs><filter id="filter0_i" x="0.400024" y="0.399994" width="19.2" height="17.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-4" dy="2"></feOffset><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter><filter id="filter1_i" x="1.3999" y="8.25613" width="17.2003" height="8.84402" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-3" dy="2"></feOffset><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
    </Wrapper>
  )
}

export default PublishPost

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);

  img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  button{
    flex: 1;
    padding: 8px 12px;

  }
  svg{
    cursor: pointer;
  }
`
