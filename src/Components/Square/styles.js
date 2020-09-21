import styled from 'styled-components';

export const Button = styled.button`
  height: 100%;
  width: 33.3%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  font-size: 24px;
  font-weight: bold;
  border: 1px solid #999;
  outline: none;
  cursor: pointer;
  &:hover, &:active {
    color: red;
    /* cursor: auto; */
  }
`;
