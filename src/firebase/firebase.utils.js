import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCwBZN87kMGUd6U5v57l0Y37Raff-7OBRE",
  authDomain: "crown-clothing-db-6ad4b.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-6ad4b.firebaseio.com",
  projectId: "crown-clothing-db-6ad4b",
  storageBucket: "crown-clothing-db-6ad4b.appspot.com",
  messagingSenderId: "996628598222",
  appId: "1:996628598222:web:920bf33ae2dcab5d66af9f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;