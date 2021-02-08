import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage'


  var firebaseConfig = {
    apiKey: "AIzaSyDc0oxLp082Tp5XCSnfSHK4pIAfzEm6_Qg",
    authDomain: "blog-5c2d1.firebaseapp.com",
    projectId: "blog-5c2d1",
    storageBucket: "blog-5c2d1.appspot.com",
    messagingSenderId: "481033112802",
    appId: "1:481033112802:web:1a0010b582320823d262bb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const  db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
 


  export  {db,auth,storage, timestamp}



