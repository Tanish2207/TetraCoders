import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeLibrary from './components/library/home';

const Routes = () => (
 <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path = "/components/library" component = {HomeLibrary} />
    <Route component={NotFound} />
</Switch>



);
export default Routes;
