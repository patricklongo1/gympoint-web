import React from 'react';
import { FaTrash, FaEdit, FaCheck, FaExclamation } from 'react-icons/fa';

export default function MatriculationList() {
  return (
    <>
      <div>
        <h1>Gerenciando Matrículas</h1>
        <button type="button">CADASTRAR</button>
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
          <tr>
            <td>Nome do caboclo</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maio de 2019</td>
            <td>
              <FaExclamation size={20} />
            </td>
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
            <td>Gold</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Julho de 2019</td>
            <td>
              <FaExclamation size={20} />
            </td>
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
            <td>Diamond</td>
            <td>30 de Julho de 2019</td>
            <td>30 de Janeiro de 2020</td>
            <td>
              <FaCheck size={20} />
            </td>
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
            <td>Diamond</td>
            <td>30 de Janeiro de 2020</td>
            <td>30 de Julho de 2020</td>
            <td>
              <FaExclamation size={20} />
            </td>
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
