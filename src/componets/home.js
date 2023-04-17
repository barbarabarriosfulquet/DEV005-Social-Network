function home(nav) {
  const section = document.createElement('section');

  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('id', 'imgLogo');
  imgLogo.setAttribute('src', './imagenes/logo.png');
  imgLogo.setAttribute('alt', 'Viajeras Empoderadas');

  const form = document.createElement('form');
  const title = document.createElement('h1');
  title.setAttribute('id', 'title');
  title.textContent = 'Viajeras Empoderadas';

  const mail = document.createElement('input');
  mail.setAttribute('id', 'mail');
  mail.placeholder = 'Correo electronico';

  const name = document.createElement('input');
  name.setAttribute('id', 'name');
  name.placeholder = 'Nombre completo';

  const user = document.createElement('input');
  user.setAttribute('id', 'user');
  user.placeholder = 'Nombre  de usuario';

  const password = document.createElement('input');
  password.setAttribute('id', 'password');
  password.placeholder = 'Contraseña';

  const confirmarPass = document.createElement('input');
  confirmarPass.setAttribute('id', 'confirmarPass');
  confirmarPass.placeholder = 'Confirmar contraseña';

  const container = document.createElement('div');

  const register = document.createElement('button');
  register.setAttribute('id', 'register');
  register.type = 'sumit';
  register.textContent = 'Registrarse';

  const back = document.createElement('button');
  back.setAttribute('id', 'back');
  back.type = 'sumit';
  back.textContent = 'Inicio';

  back.addEventListener('click', () => {
    nav('/');
  });

  container.append(name, user, mail, password, confirmarPass, register);
  // eslint-disable-next-line max-len
  form.append(name, user, mail, password, confirmarPass, container, register, back);
  section.append(imgLogo, title, form);
  return section;
}

export default home;
