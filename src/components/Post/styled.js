import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;

  & > img {
    width: 37px;
    height: 37px;
    border-radius: 999px;
  }

  .nameAndTime {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
    h4 {
      font-size: 15px;
    }
    p {
      font-size: 11px;
      color: #808080;
      display: flex;
      align-items: center;
      gap: 6px;
    }
  }
`;
export const Caption = styled.p`
  font-size: 14px;
  padding: 0 12px 12px 12px;
`;
export const Image = styled.img``;
export const LikeAndCmt = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .like {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .icon {
    display: flex;
    align-items: center;
    img {
      width: 18px;
      height: 18px;
    }
  }

  p {
    font-size: 14px;
    color: #4d4d4d;
  }
`;
export const Actions = styled.div`
  padding: 0 6px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  position: relative;
`;
export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  flex: 1;
  padding: 8px;
  border-radius: 5px;
  justify-content: center;
  &:hover {
    background: #f2f2f2;
    transition: 0.2s ease;
    cursor: pointer;
  }

  &.like:hover ~ .reactList {
    display: flex;
  }
  &.like.active {
    color: #6fbe44;
  }

  svg {
    font-size: 18px;
  }
`;
export const CommentList = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  .btn-show {
    font-size: 12px;
    color: #6fbe44;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Cmt = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px 12px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    cursor: pointer;
  }

  & > div {
    flex: 1;
    position: relative;
    border-radius: 16px;
    border: 1px solid #ccc;
    overflow: hidden;
    input {
      height: 32px;
      width: 100%;
      padding: 0 30px 0 12px;
      border: none;
      outline: none;
      background: #f5f5f5;
    }
    svg {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
