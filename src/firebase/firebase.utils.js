import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

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
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exist) {
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


export default firebase;