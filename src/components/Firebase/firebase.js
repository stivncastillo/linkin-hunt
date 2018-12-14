import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';
import { firebase as firebaseConfig } from '../../config/config';

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);

    this.auth = firebase.auth();
  }
}

export default Firebase;
