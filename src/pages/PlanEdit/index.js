import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import history from '../../services/history';

export default function PlanEdit() {
  function handleBack() {
    history.push('/plans');
  }

  return (
    <>
      <div>
        <h1>Edição de Plano</h1>
        <button type="button" onClick={handleBack}>
          VOLTAR
        </button>

        <button type="submit" form="plan">
          SALVAR
        </button>
      </div>
      <Form id="plan">
        <div>
          <span>TÍTULO DO PLANO</span>
          <Input name="plan" placeholder="Nome do plano aqui" />
        </div>
        <section>
          <div>
            <span>DURAÇÃO (em meses)</span>
            <Input name="duracao" />
          </div>

          <div>
            <span>PREÇO MENSAL</span>
            <Input name="precoMensal" />
          </div>

          <div>
            <span>PREÇO TOTAL</span>
            <Input name="precoTotal" />
          </div>
        </section>
      </Form>
    </>
  );
}
