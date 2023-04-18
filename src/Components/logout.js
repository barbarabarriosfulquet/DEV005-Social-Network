import { signOut } from 'firebase/auth';
import { async } from 'regenerator-runtime';
import { auth } from './firebase.js';

function logout(navigateTo) {

  const signOut = document.createElement('button');
  logout.addEventListener('click', async () => {
    await signOut(auth);
    console.log('Users logout');
  });
}
export default logout;
