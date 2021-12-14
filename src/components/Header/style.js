import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  position: relative;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  & > div.flex {
    display: flex;
    align-items: center;
    position: relative;
  }
  .user-option {
    width: 243px;
    position: absolute;
    top: 50px;
    right: 0;
  }
`;
export const Logo = styled.img`
  width: 100px;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  cursor: pointer;

  img {
    width: 36px;
    height: 36px;
    border-radius: 999px;
  }
`;
export const Button = styled.div`
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: #e7e7e7;
  margin-right: 20px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Search = styled.div`
  width: 198px;
  height: 40px;
  position: relative;
  margin-left: 20px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  svg {
    font-size: 20px;
    position: absolute;
    left: 10px;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 0 10px 0 40px;
    outline: none;
    border: none;
    border-radius: 20px;

    &:focus {
      background: #eeeeee;
      transition: 0.2 ease;
    }
  }
`;

export const Nav = styled.div`
  display: none;

  @media (min-width: 992px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    display: flex;
    gap: 30px;
  }
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 82px;
  padding: 6px 0;
  font-size: 13px;
  gap: 4px;
  cursor: pointer;
  border-bottom: 2px solid transparent;

  &.active {
    border-color: #6fbe49;
    color: #6fbe49;
  }
`;
