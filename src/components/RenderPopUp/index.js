/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { Button, Container, Scroll } from './styles';
import api from '../../services/api';

export default function RenderPopUp({ question, orderID, dispose }) {
  const [answer, setAnswer] = useState('');
  const [answered, setAnswered] = useState(false);

  async function handleSubmit() {
    try {
      await api.put(`help_orders/${orderID}/answer`, {
        answer,
      });
      toast.success('Resposta enviada com sucesso!');
      setAnswered(true);
      setAnswer('');
    } catch (error) {
      toast.success('Falha ao enviar resposta');
    }
  }

  function handleInput(e) {
    setAnswer(e.target.value);
  }

  const schema = Yup.object().shape({
    resposta: Yup.string()
      .min(20, 'No mínimo 20 caracteres!')
      .required('Insira uma resposta'),
  });

  return (
    <Popup
      trigger={<Button className="button"> responder </Button>}
      modal
      onClose={dispose}
    >
      <Container>
        <small>PERGUNTA DO ALUNO</small>

        <p>
          <Scroll>{question}</Scroll>
        </p>

        <small>SUA RESPOSTA</small>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input
            name="resposta"
            placeholder="Sua resposta aqui"
            value={answer}
            onChange={() => handleInput(event)}
            readOnly={answered}
          />
          <button type="submit" disabled={answered}>
            Responder aluno
          </button>
        </Form>
      </Container>
    </Popup>
  );
}

RenderPopUp.propTypes = {
  question: PropTypes.string.isRequired,
  orderID: PropTypes.string.isRequired,
  dispose: PropTypes.func.isRequired,
};
