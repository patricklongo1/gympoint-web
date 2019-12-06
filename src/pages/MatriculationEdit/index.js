import React from 'react';

import history from '../../services/history';
import MatriculationForm from '../../components/MatriculationForm';

export default function MatriculationEdit() {
  function handleBack() {
    history.push('/matriculations');
  }

  return (
    <>
      <div>
        <h1>Edição de Matrícula</h1>
        <button type="button" onClick={handleBack}>
          VOLTAR
        </button>

        <button type="submit" form="mtc">
          SALVAR
        </button>
      </div>
      <MatriculationForm id="mtc" />
    </>
  );
}
