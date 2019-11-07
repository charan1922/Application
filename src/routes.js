import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// Layout Types
import { DefaultLayout } from './pages/layouts';

// Route Views
import Dashboard from './pages/Dashboard';
import Chart from './pages/Chart';
import LoginPage from './pages/UserPages/LoginPage';
import withAuth from './wIthAuth';
import RegistarionPage from './pages/UserPages/Registration';

// const RestrictedRoute = ({component: Component, ...rest, authUser}) =>
//     <Route
//         {...rest}
//         render={props =>
//             authUser
//                 ? <Component {...props} />
//                 : <Redirect
//                     to={{
//                         pathname: '/login',
//                         state: {from: props.location}
//                     }}
//                 />}
//     />;
export default [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to='/login' />
  },
  {
    path: '/login',
    layout: DefaultLayout,
    component: LoginPage
  },
  {
    path: '/Registration',
    layout: DefaultLayout,
    component: RegistarionPage
  },
  {
    path: '/Solar',
    layout: DefaultLayout,
    component: withAuth(Chart)
  },
  {
    path: '/Battey',
    layout: DefaultLayout,
    component: withAuth(Chart)
  },
  {
    path: '/Grid',
    layout: DefaultLayout,
    component: withAuth(Chart)
  },
  {
    path: '/Load',
    layout: DefaultLayout,
    component: withAuth(Chart)
  },
  {
    path: '/Dashboard',
    layout: DefaultLayout,
    component: withAuth(Dashboard)
  }
];
