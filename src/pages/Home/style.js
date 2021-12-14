import styled from "styled-components";

export const Wrapper = styled.div`
  .newFeed {
    position: relative;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 420px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const NewFeed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  .no-post {
    position: fixed;
    top: 50%;
    left: 50%;
    transfrom: translate(-50%, -50%);
  }
`;
