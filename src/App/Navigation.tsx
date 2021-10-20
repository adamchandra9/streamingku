import 'react-toastify/dist/ReactToastify.css';

import { Route, Switch, withRouter } from 'react-router-dom';

import DashboardContainer from '../Modules/Dashboard/Container/DashboardContainer';
import { Helmet } from 'react-helmet';
import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import StarterPage from './../StarterPage';
import TemplateContainer from '../Modules/Template/Container/TemplateContainer';
import { ToastContainer } from 'react-toastify';
import withTemplate from '../App/WithTemplate';

function Navigation() {
  const index = StarterPage;
  const dashboard = withTemplate(TemplateContainer, DashboardContainer);
  return (
    <React.Fragment>
      <Helmet titleTemplate="React Project" defaultTitle="React Project">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar={true}
        closeOnToastrClick={true}
      />
      <ToastContainer autoClose={2000} />
      <Switch>
        <Route
          exact={true}
          path={`${process.env.PUBLIC_URL}/`}
          component={index}
        />
        <Route
          exact={true}
          path={`${process.env.PUBLIC_URL}/admin`}
          component={dashboard}
        />
      </Switch>
    </React.Fragment>
  );
}
export default withRouter(Navigation);
