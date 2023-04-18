import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { async } from 'regenerator-runtime';
import { auth } from './firebase.js';

function loginGoogle(navigateTo) {
  const section = document.createElement('section');
  const buttonGoogle = document.createElement('button');

  buttonGoogle.addEventListener('click', async () => {
    const google = new GoogleAuthProvider();

    try {
      const credential = await signInWithPopup(auth, google);
      console.log(credential);
    } catch (error) {
      console.log('error');
    }
  });
  function loginGoogle(navigateTo) {
    const section = document.createElement('section');
    const buttonGoogle = document.createElement('button');
  
    buttonGoogle.addEventListener('click', async () => {
      const google = new GoogleAuthProvider();
  
      try {
        const credential = await signInWithPopup(auth, google);
        console.log(credential);
      } catch (error) {
        console.log('error');
      }
    });
    buttonGoogle.addEventListener('click', () => {
      navigateTo('/');
    });
    section.append(buttonGoogle);
  section.append(buttonGoogle);
  return section;
}
}
export default loginGoogle;
