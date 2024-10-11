// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRpHGV4F-9cN_1RMsI6leLmIFn770AXcs",
  authDomain: "boxwood-pillar-366409.firebaseapp.com",
  projectId: "boxwood-pillar-366409",
  storageBucket: "boxwood-pillar-366409.appspot.com",
  messagingSenderId: "756682291861",
  appId: "1:756682291861:web:b1ff2b6f74161db3b0799c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();