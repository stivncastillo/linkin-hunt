import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../redux/reducers';

export default function configureStore(initialState, history) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(logger),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore);
  const store = createStoreWithMiddleware(rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../redux/reducers', () => {
      const nextRootReducer = require('../redux/reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
