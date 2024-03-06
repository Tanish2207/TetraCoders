import React from 'react';
import { Route, Switch } from 'react-router-dom';

import studentlogin from './components/login/registrationpage1';

const Routes = () => (
 <Switch>
    
    <Route path="/login" component={studentlogin} />
   
 </Switch>
);

export default Routes;
