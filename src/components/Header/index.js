import React from 'react';
import { Container, Logo, Nav, User } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="GymPoint" />
        <span>GYMPOINT</span>
      </Logo>

      <Nav>
        <button type="button">ALUNOS</button>
        <button type="button">PLANOS</button>
        <button type="button">MATRÍCULAS</button>
        <button type="button">PEDIDOS DE AUXÍLIO</button>
      </Nav>

      <User>
        <span>ADMNISTRADOR</span>
        <button type="button">sair do sistema</button>
      </User>
    </Container>
  );
}
