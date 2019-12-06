import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

export default function PlanList() {
  return (
    <>
      <div>
        <h1>Gerenciando Planos</h1>
        <button type="button">CADASTRAR</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th>DURAÇÃO</th>
            <th>VALOR p/ MÊS</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Start</td>
            <td>1 mês</td>
            <td>R$129,00</td>
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
            <td>Gold</td>
            <td>3 meses</td>
            <td>R$109,00</td>
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
            <td>Diamond</td>
            <td>6 meses</td>
            <td>R$89,00</td>
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
