import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCKBmWVAivR1kahjE4PvxRyDEXIEkJeiEc",
    authDomain: "karol-budowlanka.firebaseapp.com",
    databaseURL: "https://karol-budowlanka.firebaseio.com",
    projectId: "karol-budowlanka",
    storageBucket: "karol-budowlanka.appspot.com",
    messagingSenderId: "797322482249",
    appId: "1:797322482249:web:e30c6ba70fb5d78ca16598",
    measurementId: "G-X8PWJJ04X5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});
  firebase.analytics();

  export default firebase;