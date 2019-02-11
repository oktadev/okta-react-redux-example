import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Search from './search';
import Detail from './detail';

const App = () => (
  <div className="m-3">
    <Search />
    <div className="my-3">
      <Detail />
    </div>
  </div>
);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
