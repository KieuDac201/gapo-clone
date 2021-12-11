import styled from "styled-components";
import rightCoverImg from "../../images/right-cover.jpg";

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #fff;
`;
export const Login = styled.div`
  width: 100%;
  padding: 35px 25px;
  @media (min-width: 768px) {
    max-width: 40vw;
  }
  @media (min-width: 1024px) {
    max-width: 35vw;
  }
`;
export const Logo = styled.img``;
export const Title = styled.h1`
  margin-top: 100px;
`;
export const LoginButton = styled.button`
  background: #4267b2;
  border-radius: 5px;
  color: #fff;
  padding: 10px 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: none;
    transition: 0.2s ease;
  }
`;
export const Desc = styled.div`
  margin-top: 100px;
  padding-bottom: 20px;
  p {
    font-size: 14px;
    margin-top: 10px;
  }
`;
export const Bottom = styled.ul`
  padding-top: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-top: 1px solid #ccc;
  li {
    font-size: 14px;
    font-weight: 600;
  }
`;
export const ImageCover = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    background: url(${rightCoverImg}) no-repeat center;
    background-size: cover;
    flex: 1;
  }
`;
