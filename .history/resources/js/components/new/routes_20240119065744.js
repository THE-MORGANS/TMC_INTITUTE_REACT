// routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'; // Import your Home component
import About from './About'; // Import your About component
// Import other components for additional routes

const Routes = () => (
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        {/* Add more Route components for additional routes */}
    </Switch>
);

export default Routes;
