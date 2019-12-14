import React, { useState, useEffect } from 'react';

import RenderPopUp from '../../components/RenderPopUp';
import { Wrapper, Content } from './styles';
import api from '../../services/api';

export default function HelpOrderList() {
  const [helpOrders, setHelpOrders] = useState([]);
  const [answered, setAnswered] = useState([]);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get('help_orders');
      setHelpOrders(response.data);
    }
    loadHelpOrders();
  }, [answered]);

  async function dispose() {
    setAnswered([...answered, '+1']);
  }

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
              {helpOrders.length >= 0 ? (
                helpOrders.map(order => (
                  <tr key={order.id}>
                    <td>{order.student.name}</td>
                    <td>
                      <RenderPopUp
                        dispose={dispose}
                        question={order.question}
                        orderID={order.id}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>Não consta alunos na listagem</td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      </Content>
    </Wrapper>
  );
}
