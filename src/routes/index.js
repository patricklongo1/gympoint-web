import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SingUp';

import StudentList from '../pages/StudentList';
import PlanList from '../pages/PlanList';
import MatriculationList from '../pages/MatriculationList';
import HelpOrderList from '../pages/HelpOrderList';

import StudentForm from '../pages/StudentForm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/students" component={StudentList} isPrivate isList />
      <Route path="/plans" component={PlanList} isPrivate isList />
      <Route
        path="/matriculations"
        component={MatriculationList}
        isPrivate
        isList
      />
      <Route path="/helporders" component={HelpOrderList} isPrivate isList />

      <Route path="/studentregister" component={StudentForm} isPrivate />

      <Route path="/" component={() => <h1>Error 404 - Not Found</h1>} />
    </Switch>
  );
}
