import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDqCl2qbgcv_CunohWOdMkS_FApPPWdPSY",
    authDomain: "aliens-a79a7.firebaseapp.com",
    projectId: "aliens-a79a7",
    storageBucket: "aliens-a79a7.appspot.com",
    messagingSenderId: "450049953199",
    appId: "1:450049953199:web:b537c3ca1813b28707b35a"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }