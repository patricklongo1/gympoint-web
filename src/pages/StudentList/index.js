/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit, FaSearch } from 'react-icons/fa';

import history from '../../services/history';
import api from '../../services/api';

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [deletes, setDeletes] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');
      setStudents(response.data);
    }
    loadStudents();
  }, []);

  useEffect(() => {
    async function reloadStudents() {
      const response = await api.get('students');
      setStudents(response.data);
    }
    reloadStudents();
  }, [deletes]);

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

  async function handleFind() {
    const response = await api.get(`students/${input}`);
    setStudents(response.data);
    setInput('');
  }

  return (
    <>
      <div>
        <h1>Gerenciando Alunos</h1>
        <button type="button" onClick={handleRegister}>
          CADASTRAR
        </button>
        <input
          value={input}
          onChange={() => handleInput(event)}
          type="text"
          placeholder="Buscar aluno"
        />
        <button type="button" className="findB">
          <FaSearch onClick={handleFind} />
        </button>
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
                  <button type="button">
                    <FaEdit
                      size={20}
                      onClick={() => handleEdit(student.id, student)}
                    />
                  </button>
                  <button type="button">
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
    </>
  );
}
