import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  border: 0;
  background: none;
  color: blue;

  &:hover {
    color: #ee4d64;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 450px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: left;

  span {
    margin: 15px 0 10px;
    font-weight: bold;
    font-size: 20px;
    color: #444444;
  }

  p {
    font-size: 18px;
    line-height: 26px;
    color: #666666;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      flex: 1;
      min-height: 150px;
      border: 1px solid #dddddd;
      border-radius: 4px;
      font-size: 18px;
      padding: 15px;
    }

    button {
      flex: 1;
      border: 0;
      margin: 15px 0;
      min-height: 45px;
      background: #ee4d64;
      border-radius: 4px;
      font-size: 18px;
      font-weight: bold;
      color: #ffffff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.15, '#ee4d64')};
      }
    }
  }
`;
