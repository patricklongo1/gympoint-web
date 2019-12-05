import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default function SingUp() {
  return (
    <>
      <img src={logo} alt="GymPoint" />
      <h3>GYMPOINT</h3>

      <form>
        <span>SEU E-MAIL</span>
        <input type="email" placeholder="exemplo@email.com" />

        <span>SEU NOME</span>
        <input type="email" placeholder="exemplo@email.com" />

        <span>SUA SENHA</span>
        <input type="password" placeholder="*********" />

        <span>CONFIRME A SENHA</span>
        <input type="password" placeholder="*********" />

        <button type="submit">Cadastrar</button>
        <Link to="/">Já tenho conta</Link>
      </form>
    </>
  );
}
