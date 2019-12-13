/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { Form, Input } from '@rocketseat/unform';
import history from '../../services/history';
import api from '../../services/api';

export default function StudentEdit({ history: navigation }) {
  const { student } = navigation.location.state;

  function handleBack() {
    history.push('/students');
  }

  async function handleSubmit(data) {
    try {
      const { name, email, age, weight, height } = data;
      await api.put(`students/${student.id}`, {
        name,
        email,
        age,
        weight,
        height,
      });
      toast.success('Dados do aluno atualizados');
      history.push('/students');
    } catch (error) {
      toast.error('Falha ao tentar atualizar, verifique os dados');
    }
  }

  return (
    <>
      <div>
        <h1>Edição de Aluno</h1>
        <button type="button" onClick={handleBack}>
          VOLTAR
        </button>

        <button type="submit" form="std">
          SALVAR
        </button>
      </div>
      <Form initialData={student} onSubmit={handleSubmit} id="std">
        <div>
          <span>NOME COMPLETO</span>
          <Input name="name" placeholder="Seu nome aqui" />

          <span>ENDEREÇO DE E-MAIL</span>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
        </div>
        <section>
          <div>
            <span>IDADE</span>
            <Input name="age" />
          </div>

          <div>
            <span>PESO (em kg)</span>
            <Input name="weight" />
          </div>

          <div>
            <span>ALTURA</span>
            <Input name="height" />
          </div>
        </section>
      </Form>
    </>
  );
}

StudentEdit.propTypes = {
  history: PropTypes.object.isRequired,
};
