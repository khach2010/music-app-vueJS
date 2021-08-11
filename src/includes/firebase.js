import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  // your firebase app SDK here
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// assign the auth and firestore reference from firebase to variables
const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db }
