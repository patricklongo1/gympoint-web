import React from 'react';

import history from '../../services/history';
import PlanForm from '../../components/PlanForm';

export default function PlanRegister() {
  function handleBack() {
    history.push('/plans');
  }

  return (
    <>
      <div>
        <h1>Cadastro de Plano</h1>
        <button type="button" onClick={handleBack}>
          VOLTAR
        </button>

        <button type="submit" form="plan">
          SALVAR
        </button>
      </div>
      <PlanForm id="plan" />
    </>
  );
}
