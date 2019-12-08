import React from 'react';
import Popup from 'reactjs-popup';
import { Form, Input } from '@rocketseat/unform';

import { Button, Container, Scroll } from './styles';

export default () => (
  <Popup trigger={<Button className="button"> responder </Button>} modal>
    <Container>
      <span>PERGUNTA DO ALUNO</span>

      <p>
        <Scroll>
          Olá, minha duvida é isso isso e isso é isso isso e isso é isso isso e
          isso é isso isso e isso é isso isso e isso é isso isso e isso é isso
          isso e isso é isso isso e isso é isso isso e isso é isso isso e isso é
          isso isso e isso é isso isso e isso é isso isso e isso é isso isso e
          isso é isso isso e isso é isso isso e isso é isso isso e isso é isso
          isso e isso é isso isso e isso é isso isso e isso é isso isso e isso é
          isso isso e isso é isso isso e isso .Olá, minha duvida é isso isso e
          isso é isso isso e isso é isso isso e isso é isso isso e isso é isso
          isso e isso é isso isso e isso é isso isso e isso é isso isso e isso é
          isso isso e isso é isso isso e isso é isso isso e isso é isso isso e
          isso é isso isso e isso é isso isso e isso é isso isso e isso é isso
          isso e isso é isso isso e isso é isso isso e isso é isso isso e isso é
          isso isso e isso é isso isso e isso é isso isso e isso é isso isso e
          isso .Olá, minha duvida é isso isso e isso é isso isso e isso é isso
          isso e isso é isso isso e isso é isso isso e isso é isso isso e isso é
          isso isso e isso é isso isso e isso é isso isso e isso é isso isso e
          isso é isso isso e isso é isso isso e isso é isso isso e isso é isso
          isso e isso é isso isso e isso é isso isso e isso é isso isso e isso é
          isso isso e isso é isso isso e isso é isso isso e isso é isso isso e
          isso é isso isso e isso é isso isso e isso .
        </Scroll>
      </p>

      <span>SUA RESPOSTA</span>
      <Form>
        <Input name="resposta" placeholder="Sua resposta aqui" />
        <button type="submit">Responder aluno</button>
      </Form>
    </Container>
  </Popup>
);
