import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase.js';
import { start } from '../lib/login.js';

function home(navigateTo) {
  const container = document.createElement('div');
  const imgContainer = document.createElement('img');
  imgContainer.setAttribute('id', 'imgContainer');
  imgContainer.setAttribute('src', './imagenes/viaje4.jpg');
  imgContainer.setAttribute('alt', 'Viajeras Empoderadas');

  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('id', 'imgLogo');
  imgLogo.setAttribute('src', './imagenes/logo.png');
  imgLogo.setAttribute('alt', 'Viajeras Empoderadas');

  const form = document.createElement('form');
  const tittle = document.createElement('h1');
  const inputEmail = document.createElement('input');
  inputEmail.id = 'email';
  const inputPassword = document.createElement('input');
  inputPassword.id = 'password';
  const buttonInit = document.createElement('button');
  buttonInit.id = 'buttonInit';

  const containerGoogle = document.createElement('div');
  containerGoogle.id = 'containerGoogle';
  const buttonGoogle = document.createElement('button');
  buttonGoogle.id = 'buttonGoogle';
  buttonGoogle.type = 'button';

  const imgGoogle = document.createElement('img');
  imgGoogle.id = 'imgGoogle';
  imgGoogle.setAttribute('src', './imagenes/google.png');
  imgGoogle.setAttribute('alt', 'Logo de Google');

  const containerFace = document.createElement('div');
  containerFace.id = 'containerFace';
  const buttonFace = document.createElement('button');
  buttonFace.id = 'buttonFace';
  buttonFace.type = 'button';

  const imgFace = document.createElement('img');
  imgFace.id = 'imgFace';
  imgFace.setAttribute('src', './imagenes/facebook.webp');
  imgFace.setAttribute('alt', 'Logo de Google');

  const paragraph = document.createElement('p');

  const buttonRecord = document.createElement('button');
  buttonRecord.id = 'record';

  tittle.textContent = ' Viajeras Empoderadas';
  inputEmail.placeholder = ' Correo Electrónico';
  inputPassword.placeholder = 'Contraseña';
  buttonInit.textContent = 'Iniciar Sesión';
  buttonGoogle.textContent = 'Ingresar con Google';
  buttonFace.textContent = 'Ingresar con Facebook';
  paragraph.textContent = 'Has olvidado tu contraseña?';
  buttonRecord.textContent = 'Regìstrate';

  inputPassword.addEventListener('input', () => {
    const password = inputPassword.value;
    const maskedPassword = '*'.repeat(password.length);
    inputPassword.value = maskedPassword;
  });

  buttonInit.addEventListener('click', (e) => {
    e.preventDefault();
    // const email = document.getElementById('inputEmail').value;
    // const password = document.getElementById('inputPassword').value;
    start(inputEmail.value, inputPassword.value)
      .then((user) => {
        console.log(user);
        navigateTo('/feed');
      }).catch((error) => {
        console.error('tienes un error', error);
      });
  });

  buttonGoogle.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(credential);
        navigateTo('/feed');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
        console.log(error);
      });
  });

  buttonFace.addEventListener('click', async () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(credential);
        navigateTo('/feed');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email);
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
        console.log(error);
      });
  });

  buttonRecord.addEventListener('click', () => {
    navigateTo('/login');
  });

  containerGoogle.append(imgGoogle, buttonGoogle);
  containerFace.append(imgFace, buttonFace);
  container.append(imgContainer, imgLogo, tittle);
  // eslint-disable-next-line max-len
  form.append(container, inputEmail, inputPassword, buttonInit, containerGoogle, containerFace, paragraph, buttonRecord);
  return form;
}
export default home;
