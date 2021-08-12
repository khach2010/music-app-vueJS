import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// assign the auth and firestore reference from firebase to variables
const auth = firebase.auth()
const db = firebase.firestore()
const userCollection = db.collection('users')

export { auth, db, userCollection }
