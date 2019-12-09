import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import history from '../../services/history';

export default function MatriculationEdit() {
  function handleBack() {
    history.push('/matriculations');
  }

  return (
    <>
      <div>
        <h1>Edição de Matrícula</h1>
        <button type="button" onClick={handleBack}>
          VOLTAR
        </button>

        <button type="submit" form="mtc">
          SALVAR
        </button>
      </div>
      <Form id="mtc">
        <div>
          <span>ALUNO</span>
          <Input name="aluno" placeholder="Nome do aluno" />
        </div>
        <section>
          <div>
            <span>PLANO</span>
            <Input name="plano" />
          </div>

          <div>
            <span>DATA DE INÍCIO</span>
            <Input name="dataInicio" />
          </div>

          <div>
            <span>DATA DE TÉRMINO</span>
            <Input name="dataTermino" disable />
          </div>

          <div>
            <span>VALOR FINAL</span>
            <Input name="valorFinal" disable />
          </div>
        </section>
      </Form>
    </>
  );
}
