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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}


// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;