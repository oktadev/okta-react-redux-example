import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback, withAuth } from '@okta/okta-react';

import { Provider } from 'react-redux';
import store from './store';

import Search from './Search';
import Detail from './Detail';

const App = withAuth(({ auth }) => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    auth.isAuthenticated().then(isAuthenticated => {
      if (isAuthenticated !== authenticated) {
        setAuthenticated(isAuthenticated);
      }
    });
  });

  return (
    <div className="m-3">
      {authenticated ? (
        <>
          <div className="mb-3">
            <button className="btn btn-primary" onClick={() => auth.logout()}>
              Logout
            </button>
          </div>
          <Search />
          <div className="my-3">
            <Detail />
          </div>
        </>
      ) : authenticated === null ? (
        <h4>Loading...</h4>
      ) : (
        <button className="btn btn-primary" onClick={() => auth.login()}>
          Login to search TV Shows
        </button>
      )}
    </div>
  );
});

export default () => (
  <Provider store={store}>
    <Router>
      <Security
        issuer={`${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`}
        client_id={process.env.REACT_APP_OKTA_CLIENT_ID}
        redirect_uri={`${window.location.origin}/implicit/callback`}
      >
        <Route path="/" exact component={App} />
        <Route path="/implicit/callback" component={ImplicitCallback} />
      </Security>
    </Router>
  </Provider>
);
