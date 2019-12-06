import React from 'react';

import history from '../../services/history';
import StudentForm from '../../components/StudentForm';

export default function StudentRegister() {
  function handleBack() {
    history.push('/students');
  }

  return (
    <>
      <div>
        <h1>Cadastro de Aluno</h1>
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
