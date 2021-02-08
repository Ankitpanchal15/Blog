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

  var provider = new firebase.auth.GoogleAuthProvider();

  const signInWithPopup = () => {
    firebase.auth()
  .signInWithRedirect(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  };

  const signOut = firebase.auth().signOut().then(() => {
                    // Sign-out successful.
                  }).catch((error) => {
                    // An error happened.
                  });


  


  export  {db,auth,storage, timestamp, signInWithPopup}



