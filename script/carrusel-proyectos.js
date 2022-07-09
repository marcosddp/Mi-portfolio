const back = document.getElementById("menu__back");
const next = document.getElementById("menu__next");
const proyectosContainer = document.querySelector(".proyectos__container");
const proyectos = proyectosContainer.querySelectorAll(".container__proyecto");
let posicion = 0;
const cantProyecto = proyectos.length;
const cPorciento = 100 / cantProyecto;
let operacion = posicion * -50;
//calc((-1055.7px  - 450px ) * 2)

function menuStart(go) {
  posicion += go;
  console.log(posicion);
  if (posicion > cantProyecto - 1) {
    proyectosContainer.style.transform = `translateX( 0% )`;
    return 0;
  } else if (posicion > -1) {
    op1 = posicion * -cPorciento;
    op2 = 450 * posicion;

    proyectosContainer.style.transform = `translateX( calc( ${op1}% -  ${op2}px ) )`;

    return posicion;
  } else if (posicion == -1) {

    

    posicion = cantProyecto - 1;
    op1 = posicion * -cPorciento;
    op2 = 450 * posicion;

    proyectosContainer.style.transform = `translateX( calc( ${op1}% -  ${op2}px ) )`;

   
    return posicion;
  }

  return posicion;
}

back.addEventListener("click", () => {
  posicion = menuStart(-1);
});

next.addEventListener("click", () => {
  posicion = menuStart(1);
});
