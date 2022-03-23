import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKqDLwSuq9jCn3LIcQeSbY5bOjZaQiFo0",
  authDomain: "discord-redux-d65f6.firebaseapp.com",
  projectId: "discord-redux-d65f6",
  storageBucket: "discord-redux-d65f6.appspot.com",
  messagingSenderId: "1092321184164",
  appId: "1:1092321184164:web:94cf0e36bf80674a99d931",
  measurementId: "G-5SVGLT989M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig) //  firebase config ayarlarıyla app i başlatır
const db = firebaseApp.firestore()  // grab firestore and store it in db variable
const auth = firebase.auth()        // grab auth and store it in auth variable
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }  // both are explicit imports
export default db          // db yi auth ile provider a göre daha sık kullanacagım için default exportladım.