import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDJlEEvJdwleDMmPYihsEtuDotGvdUmEio",
    authDomain: "crwn-db-da244.firebaseapp.com",
    databaseURL: "https://crwn-db-da244.firebaseio.com",
    projectId: "crwn-db-da244",
    storageBucket: "crwn-db-da244.appspot.com",
    messagingSenderId: "774870917001",
    appId: "1:774870917001:web:041bf6ea88457c63a64b58",
    measurementId: "G-DXBPXJ67C0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;