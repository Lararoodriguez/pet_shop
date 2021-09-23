import firebase from "firebase/app";
import '@firebase/firestore';

const app = firebase.initializeApp ({
  apiKey: "AIzaSyCxMeqibQAbrDiUW4ecVZOwv726mB_MnFk",
  authDomain: "pet-shop-coderhouse.firebaseapp.com",
  projectId: "pet-shop-coderhouse",
  storageBucket: "pet-shop-coderhouse.appspot.com",
  messagingSenderId: "605372841092",
  appId: "1:605372841092:web:9a9a838126c758e33296d1"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}