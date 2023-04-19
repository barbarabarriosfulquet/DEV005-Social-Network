import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { async } from 'regenerator-runtime';
import { auth } from './firebase.js';

function home(navigateTo) {
  const container = document.createElement('div');
  const imgContainer = document.createElement('img');
  imgContainer.setAttribute('id', 'imgContainer');
  imgContainer.setAttribute('src', './imagenes/viaje.jpg');
  imgContainer.setAttribute('alt', 'Viajeras Empoderadas');

  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('id', 'imgLogo');
  imgLogo.setAttribute('src', './imagenes/logo.png');
  imgLogo.setAttribute('alt', 'Viajeras Empoderadas');

  const form = document.createElement('form');
  const tittle = document.createElement('h1');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonInit = document.createElement('button');
  buttonInit.id = 'buttonInit';

  const containerGoogle = document.createElement('div');
  containerGoogle.id = 'containerGoogle';
  const buttonGoogle = document.createElement('button');
  buttonGoogle.id = 'buttonGoogle';

  const imgGoogle = document.createElement('img');
  imgGoogle.id = 'imgGoogle';
  imgGoogle.setAttribute('src', './imagenes/google.png');
  imgGoogle.setAttribute('alt', 'Logo de Google');

  const containerFace = document.createElement('div');
  containerFace.id = 'containerFace';
  const buttonFace = document.createElement('button');
  buttonFace.id = 'buttonFace';

  const imgFace = document.createElement('img');
  imgFace.id = 'imgFace';
  imgFace.setAttribute('src', './imagenes/facebook.png');
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

  buttonGoogle.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(credential);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
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
