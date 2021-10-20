import * as SelectorComponent from '../../App/Selector/AppSelector';
import * as actionComponent from '../../App/Store/ComponentAction';

import { bindActionCreators, compose } from 'redux';

import React from 'react';
import SiderComponent from '../Component/SiderComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function SiderContainer(props) {
  return <SiderComponent {...props} />;
}
const mapStateToProps = createStructuredSelector({
  siderIsCollapse: SelectorComponent.makeSiderIsColapseSelector(),
});

const mapDispatchToProps = dispatch => ({
  componentAction: bindActionCreators(actionComponent, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(SiderContainer);
