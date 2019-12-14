/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
import React, { useState, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { format, addMonths } from 'date-fns';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import history from '../../services/history';
import api from '../../services/api';
import {
  Wrapper,
  Content,
  Top,
  ContentForm,
  CustomSelect,
  CustomDatePicker,
} from './styles';

export default function MatriculationEdit({ history: navigation }) {
  const { matriculation } = navigation.location.state;

  const [plan, setPlan] = useState();
  const [startDate, setStartDate] = useState();
  const [totalPrice, setTotalPrice] = useState('');

  function handleBack() {
    history.push('/matriculations');
  }

  async function handleSubmit() {
    try {
      await api.put(`/matriculations/${matriculation.id}`, {
        student_id: matriculation.student_id,
        plan_id: plan.value,
        start_date: startDate,
      });

      toast.success('Matrícula atualizada com sucesso');
      history.push('/matriculations');
    } catch (error) {
      toast.error('Erro ao tentar atualizar a matrícula');
    }
  }

  async function loadPlans() {
    const response = await api.get(`plans`);
    return new Promise(resolve => {
      resolve(
        response.data.map(pl => {
          return {
            value: pl.id,
            label: pl.title,
            duration: pl.duration,
            totalPrice: pl.price * pl.duration,
            ...pl,
          };
        })
      );
    });
  }

  const endDate = useMemo(() => {
    if (plan && startDate) {
      return format(addMonths(startDate, plan.duration), 'dd/MM/yyyy');
    }
    return '';
  }, [plan, startDate]);

  function handlePlanChange(e) {
    setPlan(e);
    setTotalPrice(e ? `R$${e.totalPrice.toFixed(2).replace('.', ',')}` : '');
  }

  return (
    <Wrapper>
      <Content>
        <Top>
          <h1>Edição de Matrícula</h1>
          <button type="button" onClick={handleBack}>
            VOLTAR
          </button>

          <button type="submit" form="mtc">
            SALVAR
          </button>
        </Top>
        <ContentForm>
          <Form id="mtc" className="form" onSubmit={handleSubmit}>
            <div className="aluno">
              <span className="form">ALUNO</span>
              <Input
                name="student"
                value={matriculation.student.name}
                className="form"
                readOnly
              />
            </div>
            <section className="restante">
              <div className="pack">
                <span className="form">PLANO</span>
                <CustomSelect
                  name="plan_id"
                  isSearchable={false}
                  isClearable
                  defaultOptions
                  loadOptions={e => loadPlans(e)}
                  value={plan}
                  onChange={e => handlePlanChange(e)}
                  placeholder="Selecionar plano"
                />
              </div>
              <div className="pack">
                <span className="form">DATA DE INÍCIO</span>
                <CustomDatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Clique para escolher"
                />
              </div>
              <div className="pack">
                <span className="form">DATA DE TÉRMINO</span>
                <Input
                  name="dataTermino"
                  disable
                  value={endDate}
                  className="form"
                  readOnly
                />
              </div>
              <div className="pack">
                <span className="form">VALOR FINAL</span>
                <Input
                  name="valorFinal"
                  disable
                  value={totalPrice}
                  className="form"
                  readOnly
                />
              </div>
            </section>
          </Form>
        </ContentForm>
      </Content>
    </Wrapper>
  );
}

MatriculationEdit.propTypes = {
  history: PropTypes.object.isRequired,
};
