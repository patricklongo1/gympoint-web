import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import history from '../../services/history';
import api from '../../services/api';

export default function StudentRegister() {
  const [loading, setLoading] = useState(false);

  function handleBack() {
    history.push('/students');
  }

  async function handleSubmit(
    { name, email, age, weight, height },
    { resetForm }
  ) {
    try {
      setLoading(true);
      await api.post('students', {
        name,
        email,
        age,
        weight,
        height,
      });

      toast.success('Aluno cadastrado com sucesso');
      setLoading(false);
      resetForm();
    } catch (error) {
      toast.error('Falha ao adicionar aluno, verifique os dados');
      setLoading(false);
    }
  }

  return (
    <>
      <div>
        <h1>Cadastro de Aluno</h1>
        <button type="button" onClick={handleBack}>
          VOLTAR
        </button>
        <button type="submit" form="std">
          {!loading ? 'SALVAR' : 'CARREGANDO...'}
        </button>
      </div>
      <Form id="std" onSubmit={handleSubmit}>
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
