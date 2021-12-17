import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  padding: 12px;
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
  & > div {
    flex: 1;
  }
  p {
    font-size: 13px;
  }
  button {
    border: none;
    outline: none;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 50%;
    color: #555;
    font-size: 18px;
  }
`;
export const Caption = styled.textarea`
  width: 100%;
  height: 50px;
  resize: none;
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .emoji-picker-react {
    position: absolute;
    left: 40px;
    top: -30px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const Emoji = styled.div`
  font-size: 24px;
  padding: 6px;
  cursor: pointer;
`;
export const UploadImg = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 10px;
  padding: 6px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #eeeeee;
  }
  input {
    display: none;
  }
`;
export const OverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: pink;
`;

export const PreviewImg = styled.div`
  position: relative;

  button {
    position: absolute;
    right: 10px;
    top: 10px;
    background: #fff;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: red;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  }
`;
