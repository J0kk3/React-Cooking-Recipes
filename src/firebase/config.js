import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig =
{
    apiKey: "AIzaSyCCtLJMMN0YZlVSefcAMrq3YUrb-0eMjjc",
    authDomain: "cooking-ninja-site-e7c79.firebaseapp.com",
    projectId: "cooking-ninja-site-e7c79",
    storageBucket: "cooking-ninja-site-e7c79.appspot.com",
    messagingSenderId: "208547179281",
    appId: "1:208547179281:web:145c37f5c324b4f1ddbab0"
};

//Init Firebase
firebase.initializeApp( firebaseConfig );

//Init Services
const projectFirestore = firebase.firestore();

export { projectFirestore };