import { async } from 'regenerator-runtime';
import { saveMuro, loadPost } from './post.js';

function feed(navigateTo) {
  const section = document.createElement('section');
  const textContent = document.createElement('textarea');
  textContent.id = 'content';
  textContent.placeholder = 'Ingresa tu experiencia';
  const button = document.createElement('button');
  button.textContent = 'Guardar';
  const list = document.createElement('ul');
  
  const buttonGoBack = document.createElement('button');
  buttonGoBack.textContent = 'regresar';
 

loadPost();

window.addEventListener('DOMContentLoaded', async ()=>{
  const post = await loadPost()
 
})
  button.addEventListener('click', (event) => {
    event.preventDefault;
    const text = textContent.value;
    saveMuro(text);
    console.log(text);
  });

  buttonGoBack.addEventListener('click', () => {
    navigateTo('/');
  });
  section.append(textContent, button);
  return (section);
}
export default feed;
