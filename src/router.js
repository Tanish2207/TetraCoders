import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeLibrary from './components/library/home';

const Routes = () => (
 <Switch>
    
    
    <Route path = "/components/library" component = {HomeLibrary} />
   
</Switch>



);
export default Routes;
