/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import CurrencyFormat from 'react-currency-format';

import history from '../../services/history';
import api from '../../services/api';

export default function PlanRegister() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [durationT, setDurationT] = useState('');
  const [priceMonth, setPriceMonth] = useState('');
  const [priceTotal, setPriceTotal] = useState('');

  useEffect(() => {
    const tot = durationT * priceMonth;
    let result = null;
    if (!isNaN(tot)) {
      result = `R$ ${tot.toFixed(2).replace('.', ',')}`;
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
      await api.post('plans', {
        title,
        duration: durationT,
        price: priceMonth.replace('R$', ''),
      });

      toast.success('Plano cadastrado com sucesso');
      setLoading(false);
      history.push('/plans');
    } catch (error) {
      toast.error('Falha ao adicionar plano, verifique os dados');
      setLoading(false);
    }
  }

  function handleInputTitle(e) {
    setTitle(e.target.value);
  }

  function handleInput(values) {
    const { value } = values;
    setPriceMonth(value);
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
          <Input
            name="title"
            placeholder="Nome do plano aqui"
            value={title}
            onChange={() => handleInputTitle(event)}
          />
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
            <CurrencyFormat
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={2}
              fixedDecimalScale
              decimalPrecision={2}
              prefix="R$ "
              isNumericString
              onValueChange={values => handleInput(values)}
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
