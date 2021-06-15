import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { caterersReducer, userReducer, shoppingCartReducer } from "./store";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
/**
 * Material UI default theme override
 * currently overrides default color primary/secondary to Caev red
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "rgb(240, 113, 110)",
      main: "rgb(239, 83, 80)",
      dark: "rgb(227, 14, 9)"
    },
    secondary: {
      main: "#f44336"
    }
  }
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['shoppingCartReducer', 'userReducer'],
  stateReconciler: autoMergeLevel2
}


const rootReducer = combineReducers({
  caterersReducer: caterersReducer,
  userReducer: persistReducer(persistConfig, userReducer),
  shoppingCartReducer: persistReducer(persistConfig, shoppingCartReducer),
});


const store = createStore(rootReducer, (applyMiddleware(thunk)));
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <App />{" "}
      </PersistGate>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
