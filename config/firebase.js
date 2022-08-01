import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB9kOrbneUBTCzKqwuWdvTRGvIhwR2y3fU",
  authDomain: "rotterdam-fb.firebaseapp.com",
  projectId: "rotterdam-fb",
  storageBucket: "rotterdam-fb.appspot.com",
  messagingSenderId: "311022343133",
  appId: "1:311022343133:web:78984770113aafebed5c34",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);