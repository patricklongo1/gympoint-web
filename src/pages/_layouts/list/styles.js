import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  min-height: 100%;
  background: #f5f5f5;
`;

export const Content = styled.div`
  min-height: 575px;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;

  div {
    width: 100%;
    display: flex;
    align-items: center;

    h1 {
      flex: 1;
      font-style: normal;
      font-size: 24px;
      line-height: 28px;
      text-align: left;
      color: #444444;
    }

    button {
      background: #ee4d64;
      border: 0;
      border-radius: 4px;
      width: 142px;
      height: 36px;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      margin-right: 20px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.15, '#ee4d64')};
      }
    }

    input {
      width: 237px;
      height: 36px;
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 10px;
    }

    button.findB {
      background: none;
      width: 45px;
      height: 45px;

      svg {
        color: #000;
      }
    }
  }

  table {
    margin-top: 30px;
    background: #ffffff;
    width: 100%;
    max-width: 1200px;
    border-radius: 4px;

    thead th {
      text-align: left;
      padding: 12px;
      font-size: 16px;
      line-height: 19px;
      color: #444444;
      text-align: center;
    }

    tbody td {
      padding: 12px;
      border-bottom: 1px solid #eee;
      font-size: 16px;
      line-height: 20px;
      color: #666666;
      text-align: center;
    }

    button {
      background: none;
      border: 0;
      padding: 6px;

      &:hover {
        color: ${darken(0.15, '#ee4d64')};
      }
    }
  }
`;
