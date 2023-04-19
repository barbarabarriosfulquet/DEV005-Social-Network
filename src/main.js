import home from './Components/home.js';
import login from './Components/login.js';
import logout from './Components/logout.js';
import feed from './Components/feed.js';
import error404 from './Components/error404.js';

const root = document.getElementById('root');
// creando rutas
const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/error404', component: error404 },
  { path: '/logout', component: logout },
  { path: '/feed', component: feed },
];
// de tal manera puedo disparar que usuario esta autenticado
// onAuthStateChanged(auth, async(user)=>{
// if(user){

// }else{

// }
// })
const defaultRoute = '/';

function navigateTo(hans) {
  const route = routes.find((routeFind) => routeFind.path === hans);
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error404');
  }
}
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
