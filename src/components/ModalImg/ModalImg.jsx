import styled from "styled-components";

const ModalImg = ({ img }) => {
  return (
    <Wrapper>
      <Overlay />
      <Content>
        <img src={img} alt="" />
      </Content>
    </Wrapper>
  )
}

export default ModalImg

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

export const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
`;
