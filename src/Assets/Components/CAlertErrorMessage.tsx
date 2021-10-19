import { Alert } from 'antd';
import { FormattedMessage } from 'react-intl';
import React from 'react';

interface IProps {
  errorDataForm;
  isShow;
  styleContainer?;
}
export default function CAlertErrorMessage(props: IProps) {
  const { errorDataForm, isShow, styleContainer } = props;
  const errorList = Object.keys(errorDataForm).map((item, index) => {
    return <li key={item}>{`${errorDataForm[item]}`}</li>;
  });
  const errorMessage = () => {
    return (
      <React.Fragment>
        <h3 className="errorListTitle">
          <FormattedMessage id="errorAlertTitle" />
        </h3>
        <ul className="errorListDesc">{errorList}</ul>
      </React.Fragment>
    );
  };
  if (isShow) {
    return (
      <Alert message={errorMessage()} type="error" style={styleContainer} />
    );
  } else return null;
}
