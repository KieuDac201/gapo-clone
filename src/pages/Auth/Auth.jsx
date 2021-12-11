import logo from '../../images/logo.svg'
import fbLogo from '../../images/fb-logo.svg'
import { Bottom, Desc, ImageCover, Login, LoginButton, Logo, Title, Wrapper } from './style'

import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from '../../firebase/config';


const Auth = () => {
  const auth = getAuth();

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <Wrapper>
      <Login>
        <Logo src={logo} alt="logo" />
        <Title>Xin chào Gapoer!</Title>
        <LoginButton onClick={login}>
          <img src={fbLogo} alt="facebook logo" />
          <strong>Đăng nhập với Facebook</strong>
        </LoginButton>
        <Desc>
          <h4>Công ty Cổ phần Công nghệ Gapo</h4>
          <p>Địa chỉ: 204B, Tòa N01B, Tòa nhà Golden Land, 275 Nguyễn Trãi, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam</p>
          <p>SĐT: 024 73 066 222 Email: hotro@gapo.vn</p>
          <p>Người chịu trách nhiệm quản lý nội dung: Hà Trung Kiên
            Giấy phép số 222/GP-BTTTT do Bộ TT&TT cấp ngày 27/5/2020</p>
        </Desc>
        <Bottom>
          <li>Chính sách & Điều khoản</li>
          <li>Câu hỏi thường gặp</li>
          <li>Trợ giúp</li>
        </Bottom>
      </Login>
      <ImageCover></ImageCover>
    </Wrapper>
  )
}

export default Auth

