import { createStore, compose, applyMiddleware } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import logger from 'redux-logger';
import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';
import { firebase as firebaseConfig } from './config';
import rootReducer from '../redux/reducers';

export default function configureStore(initialState, history) {
  // Initialize Firebase instance
  firebase.initializeApp(firebaseConfig);

  const reduxFirebaseConfig = {
    userProfile: 'users',
    // useFirestoreForProfile: true,
    enableLogging: false,
  };

  const createStoreWithMiddleware = compose(
    reactReduxFirebase(firebase, reduxFirebaseConfig),
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
