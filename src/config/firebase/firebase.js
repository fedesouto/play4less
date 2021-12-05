import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_UQMJ17GuoLfHJMhXFWAN5htSP7HJYro",
    authDomain: "play4less-68ee1.firebaseapp.com",
    projectId: "play4less-68ee1",
    storageBucket: "play4less-68ee1.appspot.com",
    messagingSenderId: "24019891505",
    appId: "1:24019891505:web:1cc243c63c62d42604ac10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);