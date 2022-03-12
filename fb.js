// Import the functions you need from the SDKs you need
import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkkBmaS9aMPQmu_M-okHzaubzErRIDFg8",
  authDomain: "reading-424b6.firebaseapp.com",
  projectId: "reading-424b6", 
  storageBucket: "reading-424b6.appspot.com",
  messagingSenderId: "379461173023",
  appId: "1:379461173023:web:47d6fa147c121728367a2a"
};

if (firebase.apps.length == 0) {
  const app = firebase.initializeApp(firebaseConfig);
}

export const firebaseInstance = firebase
export const authService = firebase.auth()
export const dbService = firebase.firestore()
export const storageService = firebase.storage()