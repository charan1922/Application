import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withTracker from './GoogleAnalytics';

import routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/dashboards.css';

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ''}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);
