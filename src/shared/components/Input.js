import styled from 'styled-components';

const Input = styled.input`
  height: 5rem;
  width: 25rem;
  padding-left: 1rem;
  margin-right: 5rem;
  font-size: 2rem;
  border: 0px;
  border-bottom: 1px solid black;
  transition: linear 0.05s;

  &:focus {
    transition: linear 0.05s;
    border: 1px solid red;
  }
`;

export default Input;
