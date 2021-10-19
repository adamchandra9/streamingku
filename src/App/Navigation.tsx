import "react-toastify/dist/ReactToastify.css";

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Helmet } from "react-helmet";
import LoginContainer from "./../Modules/Auth/Container/LoginContainer";
import ReduxToastr from "react-redux-toastr";
import StarterPage from "./../StarterPage";
import { ToastContainer } from "react-toastify";

export default class ApplicationComponent extends Component {
  protected login;
  protected index;

  render() {
    this.login = LoginContainer;
    this.index = StarterPage;
    return (
      <div>
        <Helmet titleTemplate="React Project" defaultTitle="React Project">
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
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
            path={`${process.env.PUBLIC_URL}/login`}
            component={this.login}
          />
          <Route
            exact={true}
            path={`${process.env.PUBLIC_URL}/`}
            component={this.index}
          />
        </Switch>
      </div>
    );
  }
}
