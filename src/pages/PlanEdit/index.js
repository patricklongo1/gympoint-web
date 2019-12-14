/* eslint-disable no-restricted-globals */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';

import { Form, Input } from '@rocketseat/unform';
import history from '../../services/history';
import api from '../../services/api';

export default function PlanEdit({ history: navigation }) {
  const { plan } = navigation.location.state;

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [durationT = 2, setDurationT] = useState('');
  const [priceMonth = 2, setPriceMonth] = useState('');
  const [priceTotal, setPriceTotal] = useState('');

  useEffect(() => {
    const proceMonthFormated = priceMonth.replace('R$', '');
    const tot = durationT * proceMonthFormated;
    let result = null;
    if (!isNaN(tot)) {
      result = `R$${tot.toFixed(2).replace('.', ',')}`;
    } else {
      result = 'Calculando...';
    }
    setPriceTotal(result);
  }, [durationT, priceMonth]);

  function handleBack() {
    history.push('/plans');
  }

  async function handleSubmit() {
    try {
      setLoading(true);
      await api.put(`plans/${plan.id}`, {
        title,
        duration: durationT,
        price: priceMonth.replace('R$', ''),
      });

      toast.success('Plano cadastrado com sucesso');
      setLoading(false);
      history.push('/plans');
    } catch (error) {
      toast.error('Falha ao tentar atualizar, preencha todos os campos');
      setLoading(false);
    }
  }

  function handleInputTitle(e) {
    setTitle(e.target.value);
  }

  return (
    <>
      <div>
        <h1>Edição de Plano</h1>
        <button type="button" onClick={handleBack}>
          VOLTAR
        </button>

        <button type="submit" form="plan">
          {!loading ? 'SALVAR' : 'CARREGANDO...'}
        </button>
      </div>
      <Form onSubmit={handleSubmit} id="plan">
        <div>
          <span>TÍTULO DO PLANO</span>
          <Input
            name="title"
            placeholder="Nome do plano aqui"
            onChange={() => handleInputTitle(event)}
          />
        </div>
        <section>
          <div>
            <span>DURAÇÃO (em meses)</span>
            <Input
              name="duration"
              onChange={e => setDurationT(e.target.value)}
            />
          </div>

          <div>
            <span>PREÇO MENSAL</span>
            <InputMask
              mask="R$99.99"
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

PlanEdit.propTypes = {
  history: PropTypes.object.isRequired,
};
