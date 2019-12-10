import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import history from '../../services/history';
import api from '../../services/api';

export default function PlanRegister() {
  const [loading, setLoading] = useState(false);

  function handleBack() {
    history.push('/plans');
  }

  async function handleSubmit({ title, duration, price }, { resetForm }) {
    try {
      setLoading(true);
      await api.post('plans', {
        title,
        duration,
        price,
      });

      toast.success('Plano cadastrado com sucesso');
      setLoading(false);
      resetForm();
    } catch (error) {
      toast.error('Falha ao adicionar plano, verifique os dados');
      setLoading(false);
    }
  }

  return (
    <>
      <div>
        <h1>Cadastro de Plano</h1>
        <button type="button" onClick={handleBack}>
          VOLTAR
        </button>

        <button type="submit" form="plan">
          {!loading ? 'SALVAR' : 'CARREGANDO...'}
        </button>
      </div>
      <Form id="plan" onSubmit={handleSubmit}>
        <div>
          <span>TÍTULO DO PLANO</span>
          <Input name="title" placeholder="Nome do plano aqui" />
        </div>
        <section>
          <div>
            <span>DURAÇÃO (em meses)</span>
            <Input name="duration" />
          </div>

          <div>
            <span>PREÇO MENSAL</span>
            <Input name="price" />
          </div>

          <div>
            <span>PREÇO TOTAL</span>
            <Input name="totalPrice" />
          </div>
        </section>
      </Form>
    </>
  );
}
