import { controllerRegister, modalMessage } from '../controller.js';

export const viewRegister = () => {
  const registerContainer = document.createElement('div');
  const registerTemplate = `  
    <img class="logo" src="../img/circlenutri.png" alt="logo de la web foods kids"/>
    <form id="screen-register" class="flex-form margin-form">
    <img src="../img/logoAy.png" alt="logo de la web food kids"/>
      <label class="text-label">Nombre</label>
      <input class="inputs" type="text" name="nombre" id="dni">
      <label class="text-label">Email</label>
      <input class="inputs" type="email" name="Correo Institucional" id="email">
      <label class="text-label">Contraseña</label>
      <input class="inputs" type="password" name="password" id="password">
      <!--<p class="obligatorio">Campos obligatorios (*)</p>-->
      <p class="error" id="error"></p>
      <a class="bold" href="#/login">¿Ya tienes una cuenta? </a>
      <button class="btn-login" name="button" type="submit" id="registrar">REGISTRO</button>
      <a class="bold" href="#/login"> Ó ingresa </a>
      <div class="flex-form">
      <div class="div-icon">
        <span id="facebook"><i class="fa fa-facebook iconfb" aria-hidden="false"></i></span>
        <span id="google"><i class="fa fa-google iconGoogle" aria-hidden="false"></i></span>
      </div>
    </div>
    </form>`;
  registerContainer.innerHTML = registerTemplate;
  registerContainer.classList.add('center');
  const buttonLog = registerContainer.querySelector('#registrar');

  buttonLog.addEventListener('click', () => {
    controllerRegister();
  });
  return registerContainer;
};
