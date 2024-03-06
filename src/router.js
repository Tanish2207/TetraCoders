import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import HomeLibrary from './components/library/home';
import NotFound from './components/NotFound';

const Routes = () => (
 <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path = "/components/library" component = {HomeLibrary} />
    <Route component={NotFound} />
 </Switch>
);
export default Routes;
