// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWvLEbW-1JKsKn4awkheVlAGi9Dht-X4I",
    authDomain: "ema-john-simple-69214.firebaseapp.com",
    projectId: "ema-john-simple-69214",
    storageBucket: "ema-john-simple-69214.appspot.com",
    messagingSenderId: "208293548950",
    appId: "1:208293548950:web:6c726a91bf03136d2c03b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;