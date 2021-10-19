import * as Selectors from '../Modules/Auth/Selector/AuthSelector';

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import history from './History';

interface IProps {
  isAuthenticated;
  redirect;
}

export default function(ComposedComponent) {
  class AuthMiddleware extends React.Component<IProps> {
    public componentDidMount() {
      this._checkAndRedirect();
    }

    public componentDidUpdate() {
      this._checkAndRedirect();
    }

    public _checkAndRedirect() {
      const { isAuthenticated, redirect } = this.props;

      if (!isAuthenticated) {
        redirect();
      }
    }

    public render() {
      return (
        <div>
          {this.props.isAuthenticated ? (
            <ComposedComponent {...this.props} />
          ) : null}
        </div>
      );
    }
  }

  const mapStateToProps = createStructuredSelector({
    isAuthenticated: Selectors.makeTokenSelector()
  });
  const mapDispatchToProps = dispatch => ({
    redirect: () => history.push('/login')
  });

  return connect(mapStateToProps, mapDispatchToProps)(AuthMiddleware);
}
