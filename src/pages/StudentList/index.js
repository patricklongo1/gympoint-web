import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

import history from '../../services/history';
import api from '../../services/api';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');
      setStudents(response.data);
    }
    loadStudents();
  }, [students]);

  function handleRegister() {
    history.push('/studentregister');
  }

  function handleEdit(id, name) {
    history.push(`/studentedit/${id}`, { id, name });
  }

  async function handleDelete(id) {
    await api.delete(`students/${id}`);
  }

  return (
    <>
      <div>
        <h1>Gerenciando Alunos</h1>
        <button type="button" onClick={handleRegister}>
          CADASTRAR
        </button>
        <input type="text" placeholder="   Buscar aluno" />
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
          {students.map(student => (
            <tr>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>
                <button type="button">
                  <FaEdit
                    size={20}
                    onClick={() => handleEdit(student.id, student.name)}
                  />
                </button>
                <button type="button">
                  <FaTrash size={20} onClick={() => handleDelete(student.id)} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
