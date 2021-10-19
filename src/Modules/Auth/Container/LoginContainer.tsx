import * as SelectorsComponent from "../../App/Selector/AppSelector";
import * as actions from "../../App/Store/ComponentAction";

import { bindActionCreators, compose } from "redux";

import LoginComponent from "../Component/LoginComponent";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { actions as toastrActions } from "react-redux-toastr";

function LoginContainer(props) {
  const submitLogin = () => {
    console.log("Enter Login Function");
  };
  return <LoginComponent submitLogin={submitLogin} {...props} />;
}

const mapStateToProps = createStructuredSelector({
  isLoading: SelectorsComponent.makeIsLoading()
});

const mapDispatchToProps = dispatch => ({
  componentAction: bindActionCreators(actions, dispatch),
  toastR: bindActionCreators(toastrActions.showConfirm, dispatch)
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(LoginContainer);
