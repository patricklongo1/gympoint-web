import React from 'react';
import { Form, Input } from '@rocketseat/unform';

export default function PlanForm() {
  return (
    <Form>
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
  );
}
