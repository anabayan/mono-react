import React from "react";
import "./App.css";

import { Router, RouteComponentProps } from "@reach/router";
import { Provider } from "react-redux";

import { store } from "common";

import { GettingStarted } from "./components/GettingStarted";
import { MonorepoIntro } from "./components/MonorepoIntro";

const App = () => (
  <Provider store={store}>
    <Router>
      <RouterPage path="/" pageComponent={<GettingStarted />} />
      <RouterPage path="/intro/" pageComponent={<MonorepoIntro />} />
    </Router>
  </Provider>
);

export default App;

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
