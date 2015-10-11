import React from "react";
import {Route, IndexRoute} from "react-router";
import {authStateReducer, authUiStateReducer} from "../auth/index";
import {routerStateReducer} from "redux-router";
import {ReduxRouter} from "redux-router";
import {combineReducers} from "redux";
import Main from "views/Main";
import Account from "views/Account";

/**
 * The React Router 1.0 routes for both the server and the client.
 */
export const routes = (
  <ReduxRouter>
    <Route path="/">
      <IndexRoute component={Main} />
      <Route path="account" component={Account} />
    </Route>
  </ReduxRouter>
);

export const reducer = combineReducers({
  auth:   authStateReducer,
  authUi: authUiStateReducer,
  router: routerStateReducer
});