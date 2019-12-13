import styled from 'styled-components';
import AsyncSelect from 'react-select/async';

export const CustomAsyncSelect = styled(AsyncSelect)`
  margin-top: 10px;
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
  width: 198px;
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
