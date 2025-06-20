import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVk0tIVGxewOc0YwfceoXVoDJ0CrY4sBM",
  authDomain: "your-auth-domain",
  projectId: "photobooth-e70af",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "72278672128",
  appId: "your-app-id",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;