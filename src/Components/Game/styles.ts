import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 50px;
`;

export const Button = styled.button`
  height: 30px;
  width: 200px;
  margin-top: 25px;
`;

export const Board = styled.div`
  height: 150px;
  width: 150px;
  margin: 0;
  padding: 0;
`;

export const Row = styled.div`
  height: 50px;
  width: 150px;
  margin: 0;
  padding: 0;
  line-height: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const Square = styled.button`
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
  &:hover,
  &:active {
    color: red;
    /* cursor: auto; */
  }
`;
