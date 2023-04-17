import login from './componets/register.js';
import home from './componets/home.js';

const root = document.querySelector('#root');

const routes = [
  { path: '/', component: login },
  { path: '/home', component: home },
];

const defaultRoute = '/';

function nav(hash) {
  const route = routes.find((item) => item.path === hash);
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(nav));
  }
}

window.onpopstate = () => {
  nav(window.location.pathname);
};

nav(window.location.pathname || defaultRoute);
