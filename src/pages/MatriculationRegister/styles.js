import styled from 'styled-components';
import { darken } from 'polished';
import AsyncSelect from 'react-select/async';
import DatePicker from 'react-datepicker';

export const Wrapper = styled.div`
  padding-top: 10px;
  min-height: 100%;
  background: #f5f5f5;
`;

export const Content = styled.div`
  min-height: 575px;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;

  > h1 {
    flex: 1;
    font-style: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    color: #444444;
  }

  > button {
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
    margin-left: 20px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.15, '#ee4d64')};
    }
  }
`;

export const CustomAsyncSelect = styled(AsyncSelect)`
  width: 100%;
  max-width: 840px;
  #react-select-2-input {
    margin: 0;
  }
  div {
    align-items: center;
    div {
      margin-left: 3px;
      div {
        margin: 0;
      }
    }
    span {
      margin-bottom: 10px;
    }
  }
`;

export const CustomSelect = styled(AsyncSelect)`
  padding-top: 2.4px;
  width: 198px;
  height: 45px;
  border-radius: 4px;
  #react-select-2-input {
    margin: 0;
  }
  div {
    align-items: center;
    height: auto;
    div {
      margin-left: 3px;
      div {
        margin: 0;
      }
    }
    span {
      margin-bottom: 10px;
    }
  }
`;

export const CustomDatePicker = styled(DatePicker)`
  width: 100%;
  min-height: 45px;
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;

export const ContentForm = styled.div`
  form {
    background: #ffffff;
    margin: 30px auto;
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    padding: 15px;

    span.form {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #444444;
      margin: 20px 0 5px 5px;
    }

    input.form {
      width: 100%;
      max-width: 870px;
      height: 45px;
      padding: 10px;
      background: #ffffff;
      border: 1px solid #dddddd;
      box-sizing: border-box;
      border-radius: 4px;
      margin: 0 auto;
    }

    div.aluno {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 15px auto;

      > span {
        align-self: flex-start;
        margin-left: 30px;
      }
    }

    section.restante {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      div.pack {
        display: flex;
        flex-direction: column;
        margin: 5px 0;

        span {
          margin-left: 15px;
        }

        input {
          width: 100%;
          max-width: 270px;
          margin: 0 auto;

          &:read-only {
            background: #999;
            color: #fff;
          }
        }
      }
    }
  }
`;
