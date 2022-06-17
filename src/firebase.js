// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaM4JzVm08SvotiAhrZKYbKOHYPapoeSk",
    authDomain: "goodgrocerinventory.firebaseapp.com",
    databaseURL: "https://goodgrocerinventory-default-rtdb.firebaseio.com",
    projectId: "goodgrocerinventory",
    storageBucket: "goodgrocerinventory.appspot.com",
    messagingSenderId: "675227721024",
    appId: "1:675227721024:web:6f5c7adeadfb7cd718eea5"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;