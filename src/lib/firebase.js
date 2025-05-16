import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "socialnetwork-6e3ea.firebaseapp.com",
  projectId: "socialnetwork-6e3ea",
  storageBucket: "socialnetwork-6e3ea.firebasestorage.app",
  messagingSenderId: "851346044940",
  appId: "1:851346044940:web:9b8391a1e02868eed59629"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage(app)