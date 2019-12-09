import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Insira um E-Mail'),
  name: Yup.string().required('Insíra seu nome'),
  password: Yup.string()
    .min(6, 'No mínimo 6 digitos')
    .required('Insira uma Senha'),
  passwordConfirm: Yup.string().required('Confirme sua senha'),
});

export default function SingUp() {
  return (
    <>
      <img src={logo} alt="GymPoint" />
      <h3>GYMPOINT</h3>

      <Form schema={schema}>
        <small>SEU E-MAIL</small>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <small>SEU NOME</small>
        <Input name="name" placeholder="exemplo@email.com" />

        <small>SUA SENHA</small>
        <Input name="password" type="password" placeholder="*********" />

        <small>CONFIRME A SENHA</small>
        <Input name="passwordConfirm" type="password" placeholder="*********" />

        <button type="submit">Cadastrar</button>
        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}
