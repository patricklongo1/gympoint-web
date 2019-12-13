import React, { useState, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { format, addMonths } from 'date-fns';
import { toast } from 'react-toastify';

import history from '../../services/history';
import api from '../../services/api';
import { CustomAsyncSelect, CustomSelect } from './styles';

export default function MatriculationRegister() {
  const [student, setStudent] = useState('');
  const [plan, setPlan] = useState();
  const [startDate, setStartDate] = useState();
  const [totalPrice, setTotalPrice] = useState('');

  function handleBack() {
    history.push('/matriculations');
  }

  async function handleSubmit() {
    try {
      await api.post('/enrollments', {
        student_id: student.id,
        plan_id: plan.value,
        start_date: startDate,
      });

      toast.success('Matrícula realizada com sucesso');
      history.push('/enrollments');
    } catch (error) {
      toast.error('Erro ao tentar realizar a matrícula');
    }
  }

  const endDate = useMemo(() => {
    if (plan && startDate) {
      return format(addMonths(startDate, plan.duration), 'dd/MM/yyyy');
    }
    return '';
  }, [plan, startDate]);

  function handlePlanChange(e) {
    setPlan(e);
    setTotalPrice(e ? `R$${e.totalPrice},00` : '');
  }

  async function loadStudents(q) {
    const res = await api.get(`students`, { params: { q } });
    return new Promise(resolve => {
      resolve(
        res.data.map(st => {
          return {
            value: st.id,
            label: st.name,
            ...st,
          };
        })
      );
    });
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

  return (
    <>
      <div>
        <h1>Cadastro de Matrícula</h1>
        <button type="button" onClick={handleBack}>
          VOLTAR
        </button>

        <button type="submit" form="mtc">
          SALVAR
        </button>
      </div>
      <Form id="mtc" onSubmit={handleSubmit}>
        <div>
          <span>ALUNO</span>
          <CustomAsyncSelect
            cacheOptions
            isClearable
            defaultOptions
            loadOptions={e => loadStudents(e)}
            value={student}
            onChange={e => setStudent(e)}
            placeholder="Selecionar aluno"
          />
          <div>
            <span>PLANO</span>
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
        </div>
        <section>
          <div>
            <span>DATA DE INÍCIO</span>
            <Input name="dataInicio" onChange={date => setStartDate(date)} />
          </div>

          <div>
            <span>DATA DE TÉRMINO</span>
            <Input name="dataTermino" disable value={endDate} />
          </div>

          <div>
            <span>VALOR FINAL</span>
            <Input name="valorFinal" disable value={totalPrice} />
          </div>
        </section>
      </Form>
    </>
  );
}
