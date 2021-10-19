import * as React from 'react';

import hoistNonReactStatics from 'hoist-non-react-statics';
const withTemplate = (Template, WrappedComponent) => {
  const AddedTemplate = class extends React.Component {
    public static WrappedComponent = WrappedComponent;
    public render() {
      return (
        <Template>
          <WrappedComponent {...this.props} />
        </Template>
      );
    }
  };
  return hoistNonReactStatics(AddedTemplate, WrappedComponent);
};

export default withTemplate;
