import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  background: #f5f5f5;
`;

export const Content = styled.div`
  min-height: 450px;
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  padding: 40px 0;

  h1 {
    font-style: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    color: #444444;
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
      border-top: 1px solid #eee;
      font-size: 16px;
      line-height: 20px;
      color: #666666;
      text-align: center;
    }
  }
`;
