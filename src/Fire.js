import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage'


  var firebaseConfig = {
      apiKey: 'your api key goes here',
    authDomain: 'your_app.firebaseapp.com',
    databaseURL: 'https://your_app.firebaseio.com', // This is Dummy Data File of Firebase
    projectId: 'your_app',
    storageBucket: 'your_app.appspot.com',
    messagingSenderId: '1234567890'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const  db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
 


  export  {db,auth,storage, timestamp}



