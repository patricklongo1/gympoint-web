/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import history from '../../services/history';
import api from '../../services/api';

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [deletes, setDeletes] = useState([]);
  const [input, setInput] = useState('');
  const [pages = 1, setPages] = useState();
  const [lastPage, setLastPage] = useState(false);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get(`students`, {
        params: { q: input, page: pages },
      });
      if (response.data.length < 10) {
        setLastPage(true);
      } else {
        setLastPage(false);
      }
      setStudents(response.data);
    }
    loadStudents();
  }, [input, deletes, pages]);

  function handleRegister() {
    history.push('/studentregister');
  }

  function handleEdit(id, student) {
    history.push(`/studentedit/${id}`, { student });
  }

  async function handleDelete(id) {
    const conf = confirm('Deseja realmente deletar este aluno do sistema?');

    if (conf) {
      await api.delete(`students/${id}`);
      setDeletes([...deletes, '1']);
    }
  }

  function handleInput(e) {
    setInput(e.target.value);
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
        <h1>Gerenciando Alunos</h1>
        <button type="button" onClick={handleRegister}>
          CADASTRAR
        </button>
        <form>
          <input
            value={input}
            onChange={() => handleInput(event)}
            type="text"
            placeholder="Buscar aluno"
          />
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>NOME</th>
            <th>E-MAIL</th>
            <th>IDADE</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {students.length >= 0 ? (
            students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <button type="button" title="Editar">
                    <FaEdit
                      size={20}
                      onClick={() => handleEdit(student.id, student)}
                    />
                  </button>
                  <button type="button" title="Deletar">
                    <FaTrash
                      size={20}
                      onClick={() => handleDelete(student.id)}
                    />
                  </button>
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
