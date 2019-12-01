import { init } from './router.js';

window.addEventListener('load', () => {
  const firebaseConfig = {
  };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  init();
});
/* 
const buttonLogInEmail = loginContainer.querySelector('#login');
const username = loginContainer.querySelector("#dni1");
const password = loginContainer.querySelector('#password');

buttonLogInEmail.addEventListener('click', () => {
  if (username === '' || password === '') {
    document.getElementById('error').innerHTML = 'Ingresa los campos completos';
  } else {
  }
}); */