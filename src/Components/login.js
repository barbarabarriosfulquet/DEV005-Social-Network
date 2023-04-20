import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

function login(navigateTo) {
  const tittle = document.createElement('h1');
  tittle.id = 'login';

  const imgContainer = document.createElement('img');
  imgContainer.setAttribute('id', 'imgContainer');
  imgContainer.setAttribute('src', './imagenes/viaje.jpg');
  imgContainer.setAttribute('alt', 'Viajeras Empoderadas');

  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('id', 'imgLogo');
  imgLogo.setAttribute('src', './imagenes/logo.png');
  imgLogo.setAttribute('alt', 'Viajeras Empoderadas');

  const paragraph = document.createElement('p');
  const form = document.createElement('section');
  const inputEmail = document.createElement('input');
  inputEmail.id = 'inputEmail';
  const name = document.createElement('input');
  name.id = 'name';
  const user = document.createElement('input');
  user.id = 'user';
  const inputPassword = document.createElement('input');
  inputPassword.id = 'inputPassword';
  const confirmarPass = document.createElement('input');
  confirmarPass.id = 'corfirmarPass';
  const buttonLogin = document.createElement('button');
  buttonLogin.id = 'buttonLogin';

  const buttonGoBack = document.createElement('button');
  buttonGoBack.id = 'buttonGoBack';

  tittle.textContent = 'Login';
  paragraph.textContent = 'Regístrate para conocer mas mujeres empoderadas con ganas de viajar y conocer sus experiencias de primera mano';

  tittle.textContent = 'Viajeras empoderadas';
  inputEmail.placeholder = 'Correo Electrónico';
  name.placeholder = 'Nombre completo';
  user.placeholder = 'Nombre  de usuario';
  inputPassword.placeholder = 'Contraseña';
  confirmarPass.placeholder = 'Confirmar contraseña';
  buttonLogin.textContent = 'Registrate';
  buttonGoBack.textContent = 'Regresar';

  inputPassword.addEventListener('input', () => {
    const password = inputPassword.value;
    const maskedPassword = '*'.repeat(password.length);
    inputPassword.value = maskedPassword;
  });

  confirmarPass.addEventListener('input', () => {
    const passConfirmar = confirmarPass.value;
    const maskedPass = '*'.repeat(passConfirmar.length);
    confirmarPass.value = maskedPass;
  });

  buttonLogin.addEventListener('click', async (event) => {
    event.preventDefault();
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    console.log(user.value);
    console.log(name.value);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
    } catch (error) {
      console.log(error.message);
      console.log(error.code);
      if (error.code === 'auth/email-already-in-use') {
        alert('el correo ya esta en uso');
      } else if (error.code === 'auth/invalid-email') {
        alert('correo invalido');
      } else if (error.code === 'auth/weak-password') {
        alert('contraseña debil');
      } else if (error.code) {
        alert('las cosas no van bien');
      }
    }
  });
  buttonGoBack.addEventListener('click', () => {
    navigateTo('/');
  });

  // eslint-disable-next-line max-len
  form.append(imgContainer, imgLogo, tittle, paragraph, inputEmail, name, user, inputPassword, confirmarPass, buttonLogin, buttonGoBack);
  return form;
}
export default login;
