import React, { useEffect } from 'react';
import './App.css';

import { Router } from '@reach/router';
import { Provider } from 'react-redux';

import { store } from 'common/reducers';

import { GettingStarted } from 'components/GettingStarted';
import { MonorepoIntro } from 'components/MonorepoIntro';


const App = () => (
  <Provider store={store}>
    <Router>
      <GettingStarted path='/' />
      <MonorepoIntro path='/intro/' />
    </Router>
  </Provider>
);

export default App;
