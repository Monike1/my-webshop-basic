import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDXgrHZzxxIUrbThlJpUbEH-zwO2omVYXo',
  authDomain: 'my-webshop-basic-db.firebaseapp.com',
  databaseURL: 'https://my-webshop-basic-db.firebaseio.com',
  projectId: 'my-webshop-basic-db',
  storageBucket: 'my-webshop-basic-db.appspot.com',
  messagingSenderId: '187616039506',
  appId: '1:187616039506:web:eda613abeeed48c751458b'
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;