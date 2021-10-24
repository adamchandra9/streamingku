import * as SelectorComponent from '../../App/Selector/AppSelector';
import * as SelectorEvent from '../../Event/Selector/EventSelector';
import * as actionComponent from '../../App/Store/ComponentAction';

import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';

import UserComponent from '../Component/UserComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import history from '../../../App/History';

function UserContainer(props) {
  const { list } = props;
  useEffect(
    () => {
      let name = null;
      for (const iterator of list) {
        for (const element of iterator.participant) {
          if (element.name === props.match.params.name) {
            name = element.name;
          }
        }
      }
      if (name === null) {
        history.push('/restriced');
      }
    }, // eslint-disable-next-line
    []
  );
  return <UserComponent />;
}
const mapStateToProps = createStructuredSelector({
  isLoading: SelectorComponent.makeIsLoading(),
  list: SelectorEvent.makeListEventSelector(),
});

const mapDispatchToProps = dispatch => ({
  componentAction: bindActionCreators(actionComponent, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(UserContainer);
