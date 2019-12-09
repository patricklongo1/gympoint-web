import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';
import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Insira um E-Mail'),
  password: Yup.string().required('Insira uma Senha'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GymPoint" />
      <h3>GYMPOINT</h3>

      <Form schema={schema} onSubmit={handleSubmit}>
        <small>SEU E-MAIL</small>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <small>SUA SENHA</small>
        <Input name="password" type="password" placeholder="*********" />

        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}{' '}
        </button>
        <Link to="/register">Cadastrar novo colaborador</Link>
      </Form>
    </>
  );
}
