const firebaseConfig = {
    apiKey: "AIzaSyB6zCwnEOqUlZHZS0tZ2FsKF9R3mrx260o",
  authDomain: "hanzi-bfe48.firebaseapp.com",
  projectId: "hanzi-bfe48",
  storageBucket: "hanzi-bfe48.firebasestorage.app",
  messagingSenderId: "529782962646",
  appId: "1:529782962646:web:d822c20cbf438e73b4cc77",
  measurementId: "G-E8RXN866B1"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
