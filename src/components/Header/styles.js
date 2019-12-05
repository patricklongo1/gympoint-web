import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #dddddd;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  height: 60;
  width: 130px;
  margin: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 45.12px;
    height: 23.64px;
  }

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #ee4d64;
  }
`;

export const Nav = styled.nav`
  height: 60;
  border-left: 1px solid #eee;
  flex: 1;
  padding: 10px 15px;

  button {
    border: 0;
    background: none;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #999999;
    margin: 0 15px;

    &:hover {
      color: #444444;
    }
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;

  > span {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: #666666;
  }

  > button {
    border: 0;
    background: none;
    margin-top: 7px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #de3b3b;

    &:hover {
      color: #444444;
    }
  }
`;
