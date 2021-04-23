// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJUodhE0GzyZI7ynMVS5HFXyv0P5v4gIY",
  authDomain: "clone-d1221.firebaseapp.com",
  databaseURL: "https://clone-d1221-default-rtdb.firebaseio.com",
  projectId: "clone-d1221",
  storageBucket: "clone-d1221.appspot.com",
  messagingSenderId: "88697441508",
  appId: "1:88697441508:web:29f4462407d2e88507f0f1",
  measurementId: "G-8C3YJYN9X6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
