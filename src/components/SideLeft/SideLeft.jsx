import styled from 'styled-components'
import Button from '../Button/Button'

const SideLeft = () => {
  return (
    <Wrapper>
      <div className="top">
        <h3 className="title">
          Trang chủ
        </h3>
        <ul className="list">
          <li>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 27.125C21.2487 27.125 27.125 21.2487 27.125 14C27.125 6.75126 21.2487 0.875 14 0.875C6.75126 0.875 0.875 6.75126 0.875 14C0.875 21.2487 6.75126 27.125 14 27.125Z" fill="url(#paint0_linear)" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.4254 10.4253L7.48893 19.2313C7.42811 19.4101 7.41857 19.6024 7.46141 19.7864C7.50425 19.9704 7.59775 20.1387 7.73132 20.2722C7.86489 20.4058 8.03319 20.4993 8.21717 20.5421C8.40114 20.585 8.59343 20.5755 8.77227 20.5146L17.5783 17.5793" fill="white"></path><path d="M10.4254 10.4253L7.48893 19.2313C7.42811 19.4101 7.41857 19.6024 7.46141 19.7864C7.50425 19.9704 7.59775 20.1387 7.73132 20.2722C7.86489 20.4058 8.03319 20.4993 8.21717 20.5421C8.40114 20.585 8.59343 20.5755 8.77227 20.5146L17.5783 17.5793" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.51 8.76885C20.5708 8.59001 20.5803 8.39772 20.5375 8.21375C20.4946 8.02977 20.4011 7.86147 20.2676 7.7279C20.134 7.59433 19.9657 7.50083 19.7817 7.458C19.5978 7.41516 19.4055 7.42469 19.2266 7.48552L10.4253 10.4255L17.5746 17.5749L20.51 8.76885Z" fill="white" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><defs><linearGradient id="paint0_linear" x1="27.125" y1="0.874998" x2="-3.75735" y2="8.59559" gradientUnits="userSpaceOnUse"><stop stopColor="#87A9FF"></stop><stop offset="1" stopColor="#6289EE"></stop></linearGradient></defs></svg>
            Khám phá
          </li>
          <li>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6.04749 24.3437V11.5494L14.1032 3.49365L22.1589 11.0755V24.3437H6.04749Z" fill="white"></path><path d="M2.44727 14.5815L12.8794 4.14049C13.0339 3.98688 13.2172 3.86522 13.4188 3.78247C13.6204 3.69972 13.8363 3.65749 14.0541 3.65821C14.272 3.65893 14.4877 3.70258 14.6887 3.78666C14.8897 3.87074 15.0722 3.9936 15.2257 4.14823L25.6667 14.5815" stroke="#1A1A1A" strokeWidth="1.35292" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.3741 24.5329V19.5573C17.3741 18.6776 17.0246 17.8338 16.4026 17.2118C15.7805 16.5897 14.9368 16.2402 14.057 16.2402C13.1773 16.2402 12.3336 16.5897 11.7115 17.2118C11.0895 17.8338 10.74 18.6776 10.74 19.5573V24.5329" fill="url(#paint0_linear)"></path><path d="M17.3741 24.5329V19.5573C17.3741 18.6776 17.0246 17.8338 16.4026 17.2118C15.7805 16.5897 14.9368 16.2402 14.057 16.2402C13.1773 16.2402 12.3336 16.5897 11.7115 17.2118C11.0895 17.8338 10.74 18.6776 10.74 19.5573V24.5329" stroke="#1A1A1A" strokeWidth="1.35292" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22.3495 11.2668V24.5328H5.76422V11.2612" stroke="#1A1A1A" strokeWidth="1.35292" strokeLinecap="round" strokeLinejoin="round"></path><defs><linearGradient id="paint0_linear" x1="14.057" y1="16.2402" x2="16.3335" y2="24.5" gradientUnits="userSpaceOnUse"><stop stopColor="#97E472"></stop><stop offset="1" stopColor="#6FBE49"></stop></linearGradient></defs></svg>
            Theo dõi
          </li>
          <li>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M18.5 25C22.0899 25 25 22.0899 25 18.5C25 14.9101 22.0899 12 18.5 12C14.9101 12 12 14.9101 12 18.5C12 22.0899 14.9101 25 18.5 25Z" fill="url(#paint0_linear)" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M27.125 27.125L23.5 23.5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.6923 11.599C10.5506 10.8763 9.22618 10.495 7.875 10.5C6.16059 10.4866 4.50086 11.1028 3.21059 12.2318C1.92033 13.3607 1.08926 14.924 0.875 16.625" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.875 8.75C10.0496 8.75 11.8125 6.98712 11.8125 4.8125C11.8125 2.63788 10.0496 0.875 7.875 0.875C5.70038 0.875 3.9375 2.63788 3.9375 4.8125C3.9375 6.98712 5.70038 8.75 7.875 8.75Z" fill="white" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.25 7C20.9414 7 22.3125 5.62887 22.3125 3.9375C22.3125 2.24613 20.9414 0.875 19.25 0.875C17.5586 0.875 16.1875 2.24613 16.1875 3.9375C16.1875 5.62887 17.5586 7 19.25 7Z" fill="white" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.8 10.5C23.3823 9.77722 22.7982 9.16449 22.0963 8.71263C21.3943 8.26077 20.5948 7.98281 19.7639 7.90183C18.933 7.82084 18.0948 7.93915 17.3188 8.24695C16.5428 8.55475 15.8514 9.04317 15.302 9.67166" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><defs><linearGradient id="paint0_linear" x1="22" y1="13" x2="15" y2="24.5" gradientUnits="userSpaceOnUse"><stop stopColor="#6BEEA4"></stop><stop offset="1" stopColor="#44CF81"></stop></linearGradient></defs></svg>
            Tìm bạn bè
          </li>
          <li>
            <svg width="28" height="30" viewBox="0 0 28 30" fill="none"><path d="M26.3333 23.6666H8.99992C8.63143 23.6666 8.33325 23.3681 8.33325 22.9999V6.99992C8.33325 6.63175 8.63143 6.33325 8.99992 6.33325H26.3333C26.5474 6.33325 26.7486 6.43612 26.8743 6.61027C26.9993 6.7841 27.0338 7.00741 26.9654 7.21086L24.3691 14.9999L26.9654 22.789C27.0338 22.9924 26.9993 23.2157 26.8743 23.3896C26.7486 23.5637 26.5474 23.6666 26.3333 23.6666Z" fill="#58AA2C"></path><path d="M8.00024 15C8.00024 15 12.0002 10.5 16.5002 15C21.0002 19.5 24.5002 15 24.5002 15L27.0002 24H8.00024V15Z" fill="white"></path><path d="M8.99992 23.6666C8.89185 23.6666 8.78377 23.6405 8.68547 23.5878C8.46867 23.4716 8.33325 23.2457 8.33325 22.9999V6.99992C8.33325 6.63175 8.63143 6.33325 8.99992 6.33325H16.9999C17.3684 6.33325 17.6666 6.63175 17.6666 6.99992V17.6666C17.6666 17.8896 17.5553 18.0976 17.3697 18.2213L9.36971 23.5546C9.25838 23.6288 9.12948 23.6666 8.99992 23.6666Z" fill="#B3B3B3"></path><path d="M17.3079 18H0.692552C0.309893 18 0.000244141 17.7072 0.000244141 17.3462V1.65385C0.000244141 1.29276 0.309893 1 0.692552 1H17.3079C17.6906 1 18.0002 1.29276 18.0002 1.65385V17.3462C18.0002 17.7072 17.6906 18 17.3079 18Z" fill="#6FBE49"></path><path d="M0.000244141 9C0.000244141 9 4.00024 4.5 8.50024 9C13.0002 13.5 18.0002 9 18.0002 9V18H0.000244141V9Z" fill="white"></path><path d="M8.33325 16.9999V22.9999C8.33325 23.3681 8.63143 23.6666 8.99992 23.6666H26.3333C26.5474 23.6666 26.7486 23.5637 26.8743 23.3896C26.9993 23.2157 27.0338 22.9924 26.9654 22.789L24.3691 14.9999L26.9654 7.21086C27.0338 7.00741 26.9993 6.7841 26.8743 6.61027C26.7486 6.43612 26.5474 6.33325 26.3333 6.33325H17.0002" stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round"></path><path d="M17.2502 1.75V17.25H0.750244V1.75H17.2502Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M0.750244 30C0.335697 30 0.000244141 29.708 0.000244141 29.3478V0.652174C0.000244141 0.292011 0.335697 0 0.750244 0C1.16479 0 1.50024 0.292011 1.50024 0.652174V29.3478C1.50024 29.708 1.16479 30 0.750244 30Z" fill="#1A1A1A"></path></svg>
            Trang của bạn
          </li>
        </ul>
        <Button>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="8.99996" cy="9.00033" r="8.33333" fill="#6FBE49"></circle><path d="M9 5.66699V12.3337" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.3333 9H5.66663" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          Tạo trang
        </Button>
      </div>
      <div className="bottom">
        <p>Điều khoản sử dụng. Hỗ trợ khách hàng</p>
        <p>Gapo © 2020</p>
      </div>
    </Wrapper>
  )
}

export default SideLeft

const Wrapper = styled.div`
  position: fixed;
  padding: 80px 16px 24px 16px;
  top: 0;
  left: 0;
  max-width: 290px;
  width: 100%;
  height: 100%;
  background: #fff;
  flex-direction: column;
  justify-content: space-between;
  display: none;

  @media (min-width:1100px){
    display: flex;
  }

  .title{
    margin-bottom: 16px;
  }

  .list{
    li{
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      font-size: 14px;
      svg{
        margin-right: 10px;
      }
    }
  }

  .bottom{
    p{
      font-size: 14px;
      margin-top: 14px;
    }
  }
`