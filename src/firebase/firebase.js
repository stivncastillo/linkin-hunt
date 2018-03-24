import * as firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyAn-LZD8RvVjSdiU9tkl8ZzLdvtk4th59U",
    authDomain: "linkinhunt-ccab2.firebaseapp.com",
    databaseURL: "https://linkinhunt-ccab2.firebaseio.com",
    projectId: "linkinhunt-ccab2",
    storageBucket: 'linkinhunt-ccab2.appspot.com',
    messagingSenderId: "872627233356",
};

const devConfig = {
    apiKey: "AIzaSyAn-LZD8RvVjSdiU9tkl8ZzLdvtk4th59U",
    authDomain: "linkinhunt-ccab2.firebaseapp.com",
    databaseURL: "https://linkinhunt-ccab2.firebaseio.com",
    projectId: "linkinhunt-ccab2",
    storageBucket: 'linkinhunt-ccab2.appspot.com',
    messagingSenderId: "872627233356",
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if (! firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const database = firebase.database();

export {
    auth,
    database
};