import { getDocs, addDoc, collection } from 'firebase/firestore';

import { db } from './firebase.js';

export const saveMuro = async (texto) => await addDoc(collection(db, 'muro'), {
  content: texto,
});
export const loadPost = async () => {
  const querySnapshopt = await getDocs(collection(db, 'muro'));
  const post = querySnapshopt.docs.map((doc) => doc.data);
  console.log(post);
};
