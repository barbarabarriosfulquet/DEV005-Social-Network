function register(navigateTo) {
  const form = document.createElement('form');
  const tittle = document.createElement('h1');
  const inputEmail = document.createElement('input');
  inputEmail.id = 'inputEmail';
  const inputPassword = document.createElement('input');
  inputPassword.id = 'inputPassword';
  const buttonInit = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  buttonGoogle.id = 'LoginGoogle';
  const paragraph = document.createElement('p');
  const buttonRecord = document.createElement('button');
  const imgLogo = document.createElement('img');
  
  imgLogo.setAttribute('id', 'imgLogo');
  imgLogo.setAttribute('src', './imagenes/logo.png');
  imgLogo.setAttribute('alt', 'Viajeras Empoderadas');
  tittle.textContent = 'Viajeras Empoderadas';
  inputEmail.placeholder = 'Correo Electrónico';
  inputPassword.placeholder = 'Contraseña';
  buttonInit.textContent = 'Iniciar Sesión';
  buttonGoogle.textContent = 'Ingresar con Google';
  paragraph.textContent = 'Has olvidado tu contraseña?';
  buttonRecord.textContent = 'Regìstrate';
 
  buttonGoogle.addEventListener('click', () => {
    navigateTo('/loginGoogle');
  });
  buttonRecord.addEventListener('click', () => {
    navigateTo('/login');
  });

  const login = document.createElement('div');
  const imgGoogle = document.createElement('img');
  imgGoogle.setAttribute('id', 'imgGoogle');
  imgGoogle.setAttribute('src', '../imagenes/google.png');
  imgGoogle.setAttribute('alt', 'Logo Google');
 
  const LoginFacebook = document.createElement('div');
  const imgFacebook = document.createElement('img');
  imgFacebook.setAttribute('id', 'imgFacebook');
  imgFacebook.setAttribute('src', '../imagenes/facebook.png');
  const registerFacebook = document.createElement('button');
  registerFacebook.setAttribute('id', 'LoginFace');
  registerFacebook.textContent = 'Ingresar con Facebook';

  login.append(imgGoogle);
  LoginFacebook.append(imgFacebook, registerFacebook);
  form.append(imgLogo, tittle, inputEmail, inputPassword, buttonInit, login,buttonGoogle, LoginFacebook,paragraph,buttonRecord);
  return form;
}
export default register;
