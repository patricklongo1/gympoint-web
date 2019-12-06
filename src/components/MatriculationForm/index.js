import React from 'react';
import { Form, Input } from '@rocketseat/unform';

export default function MatriculationForm() {
  return (
    <Form>
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
  );
}
