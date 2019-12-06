import React from 'react';
import { Container, Logo, Nav, User } from './styles';
import logo from '../../assets/logo.svg';

import history from '../../services/history';

export default function Header() {
  function handleNavigation(button) {
    if (button === 'planos') {
      history.push('/plans');
    } else if (button === 'alunos') {
      history.push('/students');
    } else if (button === 'matriculas') {
      history.push('/matriculations');
    } else {
      history.push('/helporders');
    }
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="GymPoint" />
        <span>GYMPOINT</span>
      </Logo>

      <Nav>
        <button type="button" onClick={() => handleNavigation('alunos')}>
          ALUNOS
        </button>
        <button type="button" onClick={() => handleNavigation('planos')}>
          PLANOS
        </button>
        <button type="button" onClick={() => handleNavigation('matriculas')}>
          MATRÍCULAS
        </button>
        <button type="button" onClick={() => handleNavigation('help')}>
          PEDIDOS DE AUXÍLIO
        </button>
      </Nav>

      <User>
        <span>ADMNISTRADOR</span>
        <button type="button">sair do sistema</button>
      </User>
    </Container>
  );
}
