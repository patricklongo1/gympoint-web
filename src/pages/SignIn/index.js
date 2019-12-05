import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GymPoint" />
      <h3>GYMPOINT</h3>

      <form>
        <span>SEU E-MAIL</span>
        <input type="email" placeholder="exemplo@email.com" />

        <span>SUA SENHA</span>
        <input type="password" placeholder="*********" />

        <button type="submit">Entrar no sistema</button>
        <Link to="/register">Cadastrar novo colaborador</Link>
      </form>
    </>
  );
}
