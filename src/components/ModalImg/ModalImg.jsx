import styled from "styled-components";
import Modal from 'react-modal';
import { useState } from "react";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '20px',
    background: 'transparent',
    border: 'none',
    maxWidth: '800px',
    maxHeight: '90vh',
    overflow: 'hidden',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ModalImg = ({ img, isOpenModal, setIsOpenModal }) => {

  return (
    <Modal style={customStyles} isOpen={isOpenModal} contentLabel="Example Modal" onRequestClose={() => setIsOpenModal(false)}>
      <img src={img} alt="" onClick={() => setIsOpenModal(false)} />
    </Modal>
  )
}

export default ModalImg

export const Wrapper = styled.div`
  
`;
export const Overlay = styled.div`
  
`;

export const Content = styled.div`
  
`;
