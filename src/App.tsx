import { persistor, store } from "./App/ConfigureStore";

import { ConnectedRouter } from "connected-react-router";
import LanguageProvider from "./Modules/Internationalization/index";
import Modal from "react-modal";
import Navigation from "./App/Navigation";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import history from "./App/History";
import { translationMessages } from "./Modules/Internationalization/i18n";

export default function App(props) {
  Modal.setAppElement("#root");
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageProvider messages={translationMessages}>
          <ConnectedRouter history={history}>
            <Navigation {...props} />
          </ConnectedRouter>
        </LanguageProvider>
      </PersistGate>
    </Provider>
  );
}
