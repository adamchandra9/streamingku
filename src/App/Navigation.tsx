import 'react-toastify/dist/ReactToastify.css';

import { Route, Switch, withRouter } from 'react-router-dom';

import DashboardContainer from '../Modules/Dashboard/Container/DashboardContainer';
import EventContainer from '../Modules/Event/Container/EventContainer';
import { Helmet } from 'react-helmet';
import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import TemplateContainer from '../Modules/Template/Container/TemplateContainer';
import { ToastContainer } from 'react-toastify';
import UserContainer from '../Modules/User/Container/UserContainer';
import UserRestriced from '../Modules/User/Component/UserRestriced';
import withTemplate from '../App/WithTemplate';

function Navigation() {
  const index = UserContainer;
  const dashboard = withTemplate(TemplateContainer, DashboardContainer);
  const event = withTemplate(TemplateContainer, EventContainer);
  const restriced = UserRestriced;
  return (
    <React.Fragment>
      <Helmet titleTemplate="Streamingku" defaultTitle="Streamingku">
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
          path={`${process.env.PUBLIC_URL}/user/:name`}
          component={index}
        />
        <Route
          exact={true}
          path={`${process.env.PUBLIC_URL}/restriced`}
          component={restriced}
        />
        <Route
          exact={true}
          path={`${process.env.PUBLIC_URL}/admin`}
          component={dashboard}
        />
        <Route
          exact={true}
          path={`${process.env.PUBLIC_URL}/admin/event`}
          component={event}
        />
      </Switch>
    </React.Fragment>
  );
}
export default withRouter(Navigation);
