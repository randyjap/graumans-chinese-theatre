import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import TheaterContainer from './theater/theater_container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('theater');
    }
  };

  return (
    <Provider store={ store }>
      <MuiThemeProvider>
        <Router history={ hashHistory } >
          <Route path="/" component={ App } >
            <IndexRoute component={ GreetingContainer } onEnter={ _redirectIfLoggedIn } />
            <Route path="login" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
            <Route path="signup" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
            <Route path="theater" component={ TheaterContainer } onEnter={ _ensureLoggedIn } />
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

export default Root;
