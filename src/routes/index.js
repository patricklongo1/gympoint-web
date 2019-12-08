import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SingUp';

import StudentList from '../pages/StudentList';
import PlanList from '../pages/PlanList';
import MatriculationList from '../pages/MatriculationList';
import HelpOrderList from '../pages/HelpOrderList';

import StudentRegister from '../pages/StudentRegister';
import PlanRegister from '../pages/PlanRegister';
import MatriculationRegister from '../pages/MatriculationRegister';

import StudentEdit from '../pages/StudentEdit';
import PlanEdit from '../pages/PlanEdit';
import MatriculationEdit from '../pages/MatriculationEdit';

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
      <Route path="/helporders" component={HelpOrderList} isPrivate />

      <Route
        path="/studentregister"
        component={StudentRegister}
        isPrivate
        isForm
      />
      <Route path="/planregister" component={PlanRegister} isPrivate isForm />
      <Route
        path="/matriculationregister"
        component={MatriculationRegister}
        isPrivate
        isForm
      />

      <Route path="/studentedit" component={StudentEdit} isPrivate isForm />
      <Route path="/planedit" component={PlanEdit} isPrivate isForm />
      <Route
        path="/matriculationedit"
        component={MatriculationEdit}
        isPrivate
        isForm
      />

      <Route path="/" component={() => <h1>Error 404 - Not Found</h1>} />
    </Switch>
  );
}
