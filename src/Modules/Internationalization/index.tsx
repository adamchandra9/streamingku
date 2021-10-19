/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import * as React from 'react';

import { DEFAULT_LOCALE } from './i18n';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectLocale } from './selectors';

interface IProps {
  locale?: string;
  messages: object;
}

export class LanguageProvider extends React.PureComponent<IProps> {
  public render() {
    return (
      <IntlProvider
        locale={this.props.locale}
        key={this.props.locale}
        messages={this.props.messages[this.props.locale || DEFAULT_LOCALE]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale
}));

export default connect(mapStateToProps)(LanguageProvider);
