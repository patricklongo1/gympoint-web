/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit, FaCheck, FaExclamation } from 'react-icons/fa';

import history from '../../services/history';
import api from '../../services/api';

export default function MatriculationList() {
  const [matriculations, setMatriculations] = useState([]);
  const [deletes, setDeletes] = useState([]);

  useEffect(() => {
    async function loadMatriculations() {
      const response = await api.get('matriculations');
      setMatriculations(response.data);
    }
    loadMatriculations();
  }, []);

  useEffect(() => {
    async function reloadStudents() {
      const response = await api.get('matriculations');
      setMatriculations(response.data);
    }
    reloadStudents();
  }, [deletes]);

  function handleRegister() {
    history.push('/matriculationregister');
  }

  function handleEdit(id, matriculation) {
    history.push(`/matriculationedit/${id}`, { matriculation });
  }

  async function handleDelete(id) {
    const conf = confirm('Deseja realmente deletar esta matricula do sistema?');

    if (conf) {
      await api.delete(`matriculations/${id}`);
      setDeletes([...deletes, '1']);
    }
  }

  return (
    <>
      <div>
        <h1>Gerenciando Matrículas</h1>
        <button type="button" onClick={handleRegister}>
          CADASTRAR
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ALUNO</th>
            <th>PLANO</th>
            <th>INÍCIO</th>
            <th>TÉRMINO</th>
            <th>ATIVA</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {matriculations.map(matriculation => (
            <tr>
              <td>{matriculation.student_id}</td>
              <td>{matriculation.plan_id}</td>
              <td>{matriculation.start_date}</td>
              <td>{matriculation.end_date}</td>
              <td>
                {matriculation.active ? (
                  <FaCheck size={20} />
                ) : (
                  <FaExclamation size={20} />
                )}
              </td>
              <td>
                <button type="button">
                  <FaEdit
                    size={20}
                    onClick={() => handleEdit(matriculation.id, matriculation)}
                  />
                </button>
                <button type="button">
                  <FaTrash
                    size={20}
                    onClick={() => handleDelete(matriculation.id)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
