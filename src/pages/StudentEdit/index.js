import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import history from '../../services/history';

export default function StudentEdit() {
  function handleBack() {
    history.push('/students');
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
      <Form id="std">
        <div>
          <span>NOME COMPLETO</span>
          <Input name="name" placeholder="Seu nome aqui" />

          <span>ENDEREÇO DE E-MAIL</span>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
        </div>
        <section>
          <div>
            <span>IDADE</span>
            <Input name="idade" />
          </div>

          <div>
            <span>PESO (em kg)</span>
            <Input name="peso" />
          </div>

          <div>
            <span>ALTURA</span>
            <Input name="altura" />
          </div>
        </section>
      </Form>
    </>
  );
}
