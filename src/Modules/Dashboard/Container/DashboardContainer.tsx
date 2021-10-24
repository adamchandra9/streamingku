import * as SelectorComponent from '../../App/Selector/AppSelector';
import * as SelectorEvent from '../../Event/Selector/EventSelector';
import * as actionComponent from '../../App/Store/ComponentAction';
import * as actionEvent from '../../Event/Store/EventAction';

import { bindActionCreators, compose } from 'redux';

import DashboardComponent from '../Component/DashboardComponent';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getFormValues } from 'redux-form';

function DashboardContainer(props) {
  const { list, formValues, eventAction } = props;
  const listEvent: any = [];
  for (const iterator of list) {
    const data: any = iterator;
    iterator.name = iterator.eventName;
    listEvent.push(data);
  }
  const handleSubmit = () => {
    if (formValues && formValues.event) {
      for (const iterator of list) {
        if (formValues.event === iterator.id) {
          eventAction.setDetailevent(iterator);
        }
      }
    }
  };
  return (
    <DashboardComponent
      listEvent={listEvent}
      handleSubmit={handleSubmit}
      {...props}
    />
  );
}
const mapStateToProps = createStructuredSelector({
  isLoading: SelectorComponent.makeIsLoading(),
  list: SelectorEvent.makeListEventSelector(),
  detailEvent: SelectorEvent.makeDetailEventSelector(),
  formValues: getFormValues('dashboard'),
});

const mapDispatchToProps = dispatch => ({
  componentAction: bindActionCreators(actionComponent, dispatch),
  eventAction: bindActionCreators(actionEvent, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(DashboardContainer);
