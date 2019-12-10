/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { Form, Input } from '@rocketseat/unform';
import history from '../../services/history';
import api from '../../services/api';

export default function PlanEdit({ history: navigation }) {
  const { plan } = navigation.location.state;

  function handleBack() {
    history.push('/plans');
  }

  async function handleSubmit(data) {
    try {
      const { title, duration, price } = data;
      await api.put(`plans/${plan.id}`, {
        title,
        duration,
        price,
      });
      toast.success('Dados do plano atualizados');
    } catch (error) {
      toast.error('Falha ao tentar atualizar, verifique os dados');
    }
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
      <Form initialData={plan} onSubmit={handleSubmit} id="plan">
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

PlanEdit.propTypes = {
  history: PropTypes.object.isRequired,
};
