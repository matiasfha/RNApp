/* global __DEV__ */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducer from './reducers';

const middlewares = [thunk];
let finalMiddlwares;
if (__DEV__) {
  const { createLogger } = require(`redux-logger`); // eslint-disable-line global-require
  const logger = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error
  });

  middlewares.push(logger);
  finalMiddlwares = composeWithDevTools(applyMiddleware(...middlewares));
} else {
  finalMiddlwares = applyMiddleware(...middlewares);
}

const store = createStore(reducer, finalMiddlwares);

export default store;
