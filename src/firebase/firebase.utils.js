import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCNL3R-KZNrNUrqmfzJrNrcXNKx2MfCTsk",
    authDomain: "crwn-db-2c855.firebaseapp.com",
    databaseURL: "https://crwn-db-2c855.firebaseio.com",
    projectId: "crwn-db-2c855",
    storageBucket: "crwn-db-2c855.appspot.com",
    messagingSenderId: "359812084366",
    appId: "1:359812084366:web:bb13a3f545ef89a7e0cfdf"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;