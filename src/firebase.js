import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAbBfjx3jFpBSISgaDz3wq1Geb7Y6N8BdQ",
    authDomain: "slack-clone-2cee4.firebaseapp.com",
    projectId: "slack-clone-2cee4",
    storageBucket: "slack-clone-2cee4.appspot.com",
    messagingSenderId: "139979027294",
    appId: "1:139979027294:web:cfd10bb07053dff77bd5cf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();     // allow to access database
const auth = firebase.auth();           // for authentication
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
