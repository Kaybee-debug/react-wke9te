import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBPNThD3pATKaezkR6_bqJ4Y-lSD87hnqc",
    authDomain: "onlineshoppingapp-127be.firebaseapp.com",
    projectId: "onlineshoppingapp-127be",
    storageBucket: "onlineshoppingapp-127be.appspot.com",
    messagingSenderId: "702391031088",
    appId: "1:702391031088:web:71d76762ad35496b7164f5"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }