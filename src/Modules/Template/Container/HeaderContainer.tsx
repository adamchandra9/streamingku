import * as SelectorComponent from '../../App/Selector/AppSelector';
import * as actionComponent from '../../App/Store/ComponentAction';

import { bindActionCreators, compose } from 'redux';

import HeaderComponent from '../Component/HeaderComponent';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function HeaderContainer(props) {
  const { componentAction } = props;
  const collapseSider = () => {
    componentAction.collapseSider();
  };

  return <HeaderComponent collapseSider={collapseSider} {...props} />;
}
const mapStateToProps = createStructuredSelector({
  siderIsCollapse: SelectorComponent.makeSiderIsColapseSelector(),
});

const mapDispatchToProps = dispatch => ({
  componentAction: bindActionCreators(actionComponent, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HeaderContainer);
