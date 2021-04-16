// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyAuR9YeenqWG1DmqQgM5WKi0gHk2cVdBQ0",
//   authDomain: "react-todo-5f217.firebaseapp.com",
//   projectId: "react-todo-5f217",
//   storageBucket: "react-todo-5f217.appspot.com",
//   messagingSenderId: "620297284422",
//   appId: "1:620297284422:web:fe441a6cd013a8a9745347",
//   measurementId: "G-WNL35PQ5VJ",
// };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAcL1Cv8CRvPlobjXjRoXxghaJxxfLt304",
  authDomain: "todo-a4e5a.firebaseapp.com",
  projectId: "todo-a4e5a",
  storageBucket: "todo-a4e5a.appspot.com",
  messagingSenderId: "27228168554",
  appId: "1:27228168554:web:6f89ebd4c9791782434513",
});

const db = firebaseApp.firestore();

export default db;
