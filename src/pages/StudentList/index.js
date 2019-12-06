import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

export default function StudentList() {
  return (
    <>
      <div>
        <h1>Gerenciando Alunos</h1>
        <button type="button">CADASTRAR</button>
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
          <tr>
            <td>Nome do caboclo</td>
            <td>emaildocaboclo@hotmail.com</td>
            <td>28</td>
            <td>
              <button type="button">
                <FaEdit size={20} />
              </button>
              <button type="button">
                <FaTrash size={20} />
              </button>
            </td>
          </tr>
          <tr>
            <td>Nome do caboclo</td>
            <td>emaildocaboclo@hotmail.com</td>
            <td>28</td>
            <td>
              <button type="button">
                <FaEdit size={20} />
              </button>
              <button type="button">
                <FaTrash size={20} />
              </button>
            </td>
          </tr>
          <tr>
            <td>Nome do caboclo</td>
            <td>emaildocaboclo@hotmail.com</td>
            <td>28</td>
            <td>
              <button type="button">
                <FaEdit size={20} />
              </button>
              <button type="button">
                <FaTrash size={20} />
              </button>
            </td>
          </tr>
          <tr>
            <td>Nome do caboclo</td>
            <td>emaildocaboclo@hotmail.com</td>
            <td>28</td>
            <td>
              <button type="button">
                <FaEdit size={20} />
              </button>
              <button type="button">
                <FaTrash size={20} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
