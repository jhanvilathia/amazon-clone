import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDv8YL85ss0mA9iKj2sHbfyWYuPiYDLdCM",
  authDomain: "clone-bfd30.firebaseapp.com",
  projectId: "clone-bfd30",
  storageBucket: "clone-bfd30.appspot.com",
  messagingSenderId: "255445497592",
  appId: "1:255445497592:web:27a2280e6e348fe44d2d0d",
  measurementId: "G-7XGC8MT93T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
