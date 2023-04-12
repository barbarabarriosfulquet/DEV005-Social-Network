import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA-Xmacdp8LMiKlkgvcmrDNUdpZXvnJVXE',
  authDomain: 'viajeras-empoderadas.firebaseapp.com',
  projectId: 'viajeras-empoderadas',
  storageBucket: 'viajeras-empoderadas.appspot.com',
  messagingSenderId: '520521273210',
  appId: '1:520521273210:web:25b64b0df955b1847050c3',
  measurementId: 'G-G6DKR7THGX',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
