import {
  controllerLogin,
  controllerFacebook,
  controllerGoogle,
  changeRoute,
} from '../controller.js';
/* export const changeRoute = (route) => {
  window.location.hash = route;
}; */

export const viewLogin = () => {
  const loginContainer = document.createElement('div');
  loginContainer.innerHTML = '';
  const loginTemplate = `  
  <!--<img class="logo" src="../img/circlenutri.png" alt="circulo nutricional"/>-->
  <form id="screen-login" class="flex-form">
    <img src="../img/logoAy.png" alt="logo de la web food kids"/>
    <label class="text-label">Usuario</label>
    <input class="inputs" type="email" name="correo" id="user">
    <label class="text-label">Contraseña</label>
    <input class="inputs" type="password" name="contrasena" id="password" >
    <p class="error" id="error"></p>
    <label class="registro"><a class="bold" href="#/register" id="registrate">¿Olvidaste tu contraseña?</a></label>
    <button class= "btn-login" name="button" type="submit" id="login">INICIAR SESIÓN</button>
    <p>¿No tienes una cuenta?&nbsp;<a href="#/register"><span id="register" class="register-href">Registrate aquí</span></a></p>
    
    </form>`;

  loginContainer.innerHTML = loginTemplate;
  loginContainer.classList.add('center');

  const buttonLogInEmail = loginContainer.querySelector('#login');
  const buttonLogInFacebbok = loginContainer.querySelector('#fb');
  const buttonLogInGoogle = loginContainer.querySelector('#goog');

  // buttonLogInEmail.addEventListener('click', controllerLogin);

  // buttonLogInFacebbok.addEventListener('click', controllerFacebook);
  // buttonLogInGoogle.addEventListener('click', controllerGoogle);
const username = loginContainer.querySelector('#user').value;
console.log(username);
const password = loginContainer.querySelector('#password').value;
console.log(password);

buttonLogInEmail.addEventListener('click', () => {
    if (username === '' || password === '') {
      document.getElementById('error').innerHTML = 'Ingresa los campos completos';
      changeRoute('#/home');
    } else if(username === 'ayllu@gmail.com' && password === 'pass') {
      alert('changemee');
      console.log('estoy aqui');
      changeRoute('#/home');
    }
  });

  return loginContainer;
};
