import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCmIRHiJAAYuZQz418nqaGY2a95oe6z3w8",
  authDomain: "crwn-db-369bc.firebaseapp.com",
  projectId: "crwn-db-369bc",
  storageBucket: "crwn-db-369bc.appspot.com",
  messagingSenderId: "902723315782",
  appId: "1:902723315782:web:1e7a62aa779f4ccda2c247",
  measurementId: "G-Y7H1RTDTLD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
