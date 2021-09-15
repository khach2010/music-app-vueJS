import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBn_nPCSmaO7tk6tzvn6Z5zuIcWBYpB7hI',
  authDomain: 'music-72bce.firebaseapp.com',
  projectId: 'music-72bce',
  storageBucket: 'music-72bce.appspot.com',
  appId: '1:256126910501:web:f3ac4b539be1f05012ffcc',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// assign the auth and firestore reference from firebase to variables
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  storage,
  commentsCollection,
};
