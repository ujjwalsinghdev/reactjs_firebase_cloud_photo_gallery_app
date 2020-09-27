import * as firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCE6dV5e347jGzmoOWQ2u7dEi75q9PALHE",
  authDomain: "photo-gallery-app-308ab.firebaseapp.com",
  databaseURL: "https://photo-gallery-app-308ab.firebaseio.com",
  projectId: "photo-gallery-app-308ab",
  storageBucket: "photo-gallery-app-308ab.appspot.com",
  messagingSenderId: "282445734506",
  appId: "1:282445734506:web:94755daf4d1a1835876013"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore,timestamp }
