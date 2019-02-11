import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Search from './search';
import Detail from './detail';

const App = () => (
  <>
    <Search />
    <Detail />
  </>
);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
