// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuFdg0laVwwmhpLXmsZF_iDyUrNpCd4yY",
  authDomain: "canvapro-1a838.firebaseapp.com",
  projectId: "canvapro-1a838",
  storageBucket: "canvapro-1a838.appspot.com",
  messagingSenderId: "573991336246",
  appId: "1:573991336246:web:805d0dc6d4fb01f0351b97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;