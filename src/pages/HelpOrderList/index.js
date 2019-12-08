import React from 'react';

import Popup from '../../components/Popup';
import { Wrapper, Content } from './styles';

export default function HelpOrderList() {
  return (
    <Wrapper>
      <Content>
        <>
          <div>
            <h1>Pedidos de Auxílio</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>ALUNO</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nome do caboclo</td>
                <td>
                  <Popup />
                </td>
              </tr>
              <tr>
                <td>Nome do caboclo</td>
                <td>
                  <Popup />
                </td>
              </tr>
              <tr>
                <td>Nome do caboclo</td>
                <td>
                  <Popup />
                </td>
              </tr>
              <tr>
                <td>Nome do caboclo</td>
                <td>
                  <Popup />
                </td>
              </tr>
            </tbody>
          </table>
        </>
      </Content>
    </Wrapper>
  );
}
