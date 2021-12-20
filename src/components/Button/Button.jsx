import styled from "styled-components"
import PropTypes from 'prop-types';

const Button = ({ children, dark, onClick }) => {
  return (
    <Btn dark={dark} onClick={onClick}>
      {children}
    </Btn>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.string,
  dark: PropTypes.bool
};

const Btn = styled.button`
  padding: 10px 12px;
  background: ${props => (props.dark ? 'rgb(111, 190, 68)' : 'rgb(236, 247, 231)')};
  color: ${props => (props.dark ? 'white' : 'rgb(111, 190, 68)')};
  border: none;
  border-radius: 5px;
  outline: none;
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  &:hover{
     background: ${props => (props.dark ? 'rgb(76, 155, 34)' : '#D5EDCA')};
     transition: 0.2s ease;
  }
`
