import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBLCXvDUfHmisNH7TnfxCcCo1cEq1t4-3c',
  authDomain: 'twitter-clone-xo.firebaseapp.com',
  projectId: 'twitter-clone-xo',
  storageBucket: 'twitter-clone-xo.appspot.com',
  messagingSenderId: '1065014874974',
  appId: '1:1065014874974:web:ef183699aa47022dcd75cf',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
