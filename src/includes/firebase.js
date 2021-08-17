import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// assign the auth and firestore reference from firebase to variables
const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const userCollection = db.collection('users')

export { auth, db, userCollection, storage }
