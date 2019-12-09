import React from 'react';
import { Form, Input } from '@rocketseat/unform';

export default function StudentForm() {
  return (
    <Form>
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
  );
}