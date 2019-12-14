/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

import history from '../../services/history';
import api from '../../services/api';

export default function PlanList() {
  const [plans, setPlans] = useState([]);
  const [deletes, setDeletes] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      const formatedPlans = response.data.map(p => ({
        ...p,
        formatedPrice: p.price.toFixed(2).replace('.', ','),
      }));
      setPlans(formatedPlans);
    }
    loadPlans();
  }, [deletes]);

  function handleRegister() {
    history.push('/planregister');
  }

  function handleEdit(id, plan) {
    history.push(`/planedit/${id}`, { plan });
  }

  async function handleDelete(id) {
    const conf = confirm('Deseja realmente deletar este plano do sistema?');

    if (conf) {
      await api.delete(`plans/${id}`);
      setDeletes([...deletes, '1']);
    }
  }

  return (
    <>
      <div>
        <h1>Gerenciando Planos</h1>
        <button type="button" onClick={handleRegister}>
          CADASTRAR
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th>DURAÇÃO (meses)</th>
            <th>VALOR P/ MÊS</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={plan.id}>
              <td>{plan.title}</td>
              <td>
                {plan.duration === 1
                  ? `${plan.duration} mês`
                  : `${plan.duration} meses`}
              </td>
              <td>R${plan.formatedPrice}</td>
              <td>
                <button type="button">
                  <FaEdit size={20} onClick={() => handleEdit(plan.id, plan)} />
                </button>
                <button type="button">
                  <FaTrash size={20} onClick={() => handleDelete(plan.id)} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
