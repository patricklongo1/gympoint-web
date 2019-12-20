import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  min-height: 100%;
  background: linear-gradient(-90deg, #ee4d21, #ee4d64);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  margin: 40px auto;
  min-height: 448px;
  width: 100%;
  max-width: 360px;
  background: #fff;
  border-radius: 4px;
  text-align: center;
  padding-bottom: 30px;

  img {
    margin-top: 50px;
  }

  h3 {
    height: 35px;
    top: calc(50% - 35px / 2 + 32.2px);
    font-style: normal;
    font-size: 29.8607px;
    line-height: 35px;
    color: #ee4d64;
  }

  form {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    small {
      align-self: flex-start;
      margin-left: 30px;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #444444;
    }

    input {
      height: 45px;
      width: 300px;
      margin: 5px auto 20px;
      padding: 10px;
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 4px;
    }

    span {
      margin-top: -17px;
      font-weight: bold;
      font-size: 12px;
      color: red;
    }

    button {
      height: 45px;
      width: 300px;
      background: #ee4d64;
      border: 0;
      border-radius: 4px;
      color: #ffffff;
      font-weight: bold;
      font-size: 16px;
      line-height: 16px;
      margin: 5px auto;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#ee4d64')};
      }
    }

    a {
      font-size: 16px;
      color: #ee4d64;
      margin: 10px auto;
    }
  }
`;
