import React from 'react';

import history from '../../services/history';
import StudentForm from '../../components/StudentForm';

export default function StudentEdit() {
  function handleBack() {
    history.push('/students');
  }

  return (
    <>
      <div>
        <h1>Edição de Aluno</h1>
        <button type="button" onClick={handleBack}>
          VOLTAR
        </button>

        <button type="submit" form="std">
          SALVAR
        </button>
      </div>
      <StudentForm id="std" />
    </>
  );
}
