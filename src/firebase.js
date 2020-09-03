// npm i firebase
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8eT9GP3uRDYJsiuyYL3Bn9fx7a2fUAZA",
  authDomain: "my-whatsapp-magic.firebaseapp.com",
  databaseURL: "https://my-whatsapp-magic.firebaseio.com",
  projectId: "my-whatsapp-magic",
  storageBucket: "my-whatsapp-magic.appspot.com",
  messagingSenderId: "803120546724",
  appId: "1:803120546724:web:83e0de4a2b418100c0b731",
  measurementId: "G-12PBE6E13M"
};

// ----------------------------------------------------------
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
// ----------------------------------------------------------
