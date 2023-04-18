function Login(nav) {
  const section = document.createElement('section');

  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('id', 'imgLogo');
  imgLogo.setAttribute('src', './imagenes/logo.png');
  imgLogo.setAttribute('alt', 'Viajeras Empoderadas');

  const mail = document.createElement('input');
  mail.setAttribute('id', 'mail');
  mail.placeholder = 'Correo electronico';

  const password = document.createElement('input');
  password.setAttribute('id', 'password');
  password.placeholder = 'Contraseña';

  const start = document.createElement('button');
  start.setAttribute('id', 'start');
  start.type = 'sumit';
  start.textContent = 'Iniciar sesión';

  const register1 = document.createElement('button');
  register1.setAttribute('id', 'register1');
  register1.type = 'sumit';
  register1.textContent = 'Registrarse';

  register1.addEventListener('click', () => {
    nav('/home');
  });

  const login = document.createElement('div');
  const imgGoogle = document.createElement('img');
  imgGoogle.setAttribute('id', 'imgGoogle');
  imgGoogle.setAttribute('src', '../imagenes/google.png');
  imgGoogle.setAttribute('alt', 'Logo Google');
  const registerGoogle = document.createElement('button');
  registerGoogle.setAttribute('id', 'LoginGoogle');
  registerGoogle.textContent = 'Ingresar con Google';

  const LoginFacebook = document.createElement('div');
  const imgFacebook = document.createElement('img');
  imgFacebook.setAttribute('id', 'imgFacebook');
  imgFacebook.setAttribute('src', '../imagenes/facebook.png');
  const registerFacebook = document.createElement('button');
  registerFacebook.setAttribute('id', 'LoginFace');
  registerFacebook.textContent = 'Ingresar con Facebook';
  

  const LoginFacebook = document.createElement('div');
  const imgFacebook = document.createElement('img');
  imgFacebook.setAttribute('id', 'imgFacebook');
  imgFacebook.setAttribute('src', '../imagenes/facebook.png');
  const registerFacebook = document.createElement('button');
  registerFacebook.setAttribute('id', 'LoginFace');
  registerFacebook.textContent = 'Ingresar con Facebook';

  login.append(imgGoogle, registerGoogle);
  LoginFacebook.append(imgFacebook, registerFacebook);
  section.append(imgLogo, mail, password, start, register1, login, LoginFacebook);
  return section;
}

export default Login;
