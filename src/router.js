import { viewLogin } from "./view/login.js";
import { viewRegister } from "./view/register.js";
import { viewHome } from "./view/home.js";
import { viewPosts } from "./view/post.js";

import { headerPost1 } from './view/home.js';

const viewTmp = router => {
  const root = document.getElementById("root");
  root.innerHTML = "";
  switch (router) {
    case "#/login":
      root.innerHTML = "";
      root.appendChild(viewLogin());
      break;
    case "#/register":
      root.appendChild(viewRegister());
      break;
    case "#/home":
      /* readPosts(call => {
        root.innerHTML = "";
        root.appendChild(viewHome(call));
        headerPost1(call);

      }); */
      root.appendChild(viewHome());
      // root.appendChild(viewHome());
      break;
    case "#/oportunidad":
      // readPosts((call) => {
      //   root.innerHTML = '';
      //   root.appendChild(viewHome(call));
      // });
      root.appendChild(viewOportunidad());
      break;
    // case '#/posts':
    //   readPosts((query) => {
    //     root.innerHTML = '';
    //     root.appendChild(viewPosts(query));
    //   });
    // root.innerHTML = '';
    // root.appendChild(viewPosts());
    // break;
    case "#/opotunidadesrh":
      root.appendChild(viewOportunidadesrh());
      break;
    case "#/postulantes":
      root.appendChild(viewPostulantes());
      break;
    case "#/profile":
      root.appendChild(viewProfile());
      break;
    case "#/mispostulaciones":
      root.appendChild(viewMisPostulaciones());
      break;
    case "#/detallesMisPostulacionesActuales":
    root.appendChild(viewDetallePostActual());
    
    break;
    default:
      root.innerHTML = "Hola";
      break;
  }
};

const changeTmp = hash => {
  if (hash === "#/" || hash === "" || hash === "#") {
    return viewTmp("#/login");
  }
  return viewTmp(hash);
};

export const init = () => {
  changeTmp(window.location.hash);
  window.addEventListener("hashchange", () => changeTmp(window.location.hash));
};
