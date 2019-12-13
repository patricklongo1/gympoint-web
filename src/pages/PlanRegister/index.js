/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import history from '../../services/history';
import api from '../../services/api';

export default function PlanRegister() {
  const [loading, setLoading] = useState(false);
  const [durationT = 2, setDurationT] = useState('');
  const [priceMonth = 2, setPriceMonth] = useState('');
  const [priceTotal, setPriceTotal] = useState('');

  useEffect(() => {
    setPriceTotal(`R$${durationT * priceMonth},00`);
  }, [durationT, priceMonth]);

  function handleBack() {
    history.push('/plans');
  }

  async function handleSubmit(data, { resetForm }) {
    try {
      setLoading(true);
      await api.post('plans', data);

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
            <Input
              name="duration"
              value={durationT}
              onChange={e => setDurationT(e.target.value)}
            />
          </div>

          <div>
            <span>PREÇO MENSAL</span>
            <Input
              name="price"
              value={priceMonth}
              onChange={e => setPriceMonth(e.target.value)}
            />
          </div>

          <div>
            <span>PREÇO TOTAL</span>
            <Input name="totalPrice" readOnly value={priceTotal} />
          </div>
        </section>
      </Form>
    </>
  );
}
