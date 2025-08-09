import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const config = {
    apiKey: "AIzaSyCe2EyP0PQnfiuQ12PzlKI-nd3jwXA53sU",
    authDomain: "netflix-clone-dd954.firebaseapp.com",
    projectId: "netflix-clone-dd954",
    storageBucket: "netflix-clone-dd954.firebasestorage.a+pp",
    messagingSenderId: "304048131923",
    appId: "1:304048131923:web:b6ed021e019e087418dba6"
};

const firebase = initializeApp(config);

// const auth = getAuth(firebase);
// const provider = new GoogleAuthProvider();
// const db = getFirestore(firebase);
// const storage = getStorage(firebase);

export { firebase };