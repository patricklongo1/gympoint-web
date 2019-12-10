import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Logo, Nav, User } from './styles';
import logo from '../../assets/logo.svg';

import history from '../../services/history';

import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(signOut());
  }

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
        <span>{profile.name}</span>
        <button type="button" onClick={handleLogOut}>
          sair do sistema
        </button>
      </User>
    </Container>
  );
}
