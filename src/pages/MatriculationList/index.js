/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit, FaCheck, FaExclamation } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import history from '../../services/history';
import api from '../../services/api';

export default function MatriculationList() {
  const [matriculations, setMatriculations] = useState([]);
  const [deletes, setDeletes] = useState([]);
  const [pages = 1, setPages] = useState();
  const [lastPage, setLastPage] = useState(false);

  useEffect(() => {
    async function loadMatriculations() {
      const response = await api.get('matriculations', {
        params: { page: pages },
      });

      const mats = response.data.map(matriculation => ({
        ...matriculation,
        start_formatedDate: format(
          parseISO(matriculation.start_date),
          "d 'de' MMMM 'de' y",
          {
            locale: pt,
          }
        ),
        end_formatedDate: format(
          parseISO(matriculation.end_date),
          "d 'de' MMMM 'de' y",
          {
            locale: pt,
          }
        ),
      }));
      if (mats.length < 10) {
        setLastPage(true);
      } else {
        setLastPage(false);
      }
      setMatriculations(mats);
    }
    loadMatriculations();
  }, [pages]);

  useEffect(() => {
    async function reloadStudents() {
      const response = await api.get('matriculations');
      const mats = response.data.map(matriculation => ({
        ...matriculation,
        start_formatedDate: format(
          parseISO(matriculation.start_date),
          "d 'de' MMMM 'de' y",
          {
            locale: pt,
          }
        ),
        end_formatedDate: format(
          parseISO(matriculation.end_date),
          "d 'de' MMMM 'de' y",
          {
            locale: pt,
          }
        ),
      }));
      setMatriculations(mats);
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

  function handleDecreasePage() {
    setPages(pages - 1);
  }

  function handleAddPage() {
    setPages(pages + 1);
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
            <tr key={matriculation.id}>
              <td>
                {matriculation.student !== null &&
                matriculation.student !== undefined
                  ? matriculation.student.name
                  : '***ALUNO DELETADO***'}
              </td>
              <td>
                {matriculation.plan !== null && matriculation.plan !== undefined
                  ? matriculation.plan.title
                  : '***PLANO DELETADO***'}
              </td>
              <td>{matriculation.start_formatedDate}</td>
              <td>{matriculation.end_formatedDate}</td>
              <td>
                {matriculation.active ? (
                  <FaCheck size={20} color="green" />
                ) : (
                  <FaExclamation size={20} color="red" />
                )}
              </td>
              <td>
                <button type="button" title="Editar">
                  <FaEdit
                    size={20}
                    onClick={() => handleEdit(matriculation.id, matriculation)}
                  />
                </button>
                <button type="button" title="Deletar">
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
      <footer>
        <button
          type="button"
          disabled={pages < 2}
          onClick={() => handleDecreasePage()}
        >
          <MdChevronLeft size={30} />
        </button>
        <small>página: {pages}</small>
        <button
          type="button"
          disabled={lastPage}
          onClick={() => handleAddPage()}
        >
          <MdChevronRight size={30} />
        </button>
      </footer>
    </>
  );
}
