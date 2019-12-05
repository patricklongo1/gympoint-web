import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SingUp';

import StudentList from '../pages/StudentList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/student" component={StudentList} isPrivate isList />
      <Route path="/" component={() => <h1>Error 404 - Not Found</h1>} />
    </Switch>
  );
}
