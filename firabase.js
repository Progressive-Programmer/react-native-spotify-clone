import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDs_-zSlPBR5dcMWYrRwkH78H0xBM46yvE",
    authDomain: "spotify-clone-in.firebaseapp.com",
    projectId: "spotify-clone-in",
    storageBucket: "spotify-clone-in.appspot.com",
    messagingSenderId: "728725639238",
    appId: "1:728725639238:web:904dfd461d7e58b058fa47"
  };

  let app;

 if (firebase.apps.length === 0){
     app = firebase.initializeApp(firebaseConfig);
 } else {
    app = firebase.app()
 }

 const db = app.firestore();
 const auth = firebase.auth();

 export {db, auth};