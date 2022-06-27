const navMobile = document.getElementById("header__nav-mobile");
const fog = document.getElementById("fog");
const hamburgerButton = document.getElementById("header__hamburger");
const iHamburger = hamburgerButton.querySelectorAll("i");

hamburgerButton.addEventListener("click", () => {
  navMobile.classList.toggle("hidden");
  fog.classList.toggle("hidden");
  hamburgerButton.classList.toggle("menu-open");
  hamburgerButton.classList.toggle("menu-close");
});

fog.addEventListener("click", () => {
  navMobile.classList.toggle("hidden");
  fog.classList.toggle("hidden");
  hamburgerButton.classList.toggle("menu-open");
  hamburgerButton.classList.toggle("menu-close");
});

function only768(x) {
  if (x.matches) {
    navMobile.classList.add("hidden");
    fog.classList.add("hidden");
  }
}
/*
function animationhamburger() {
  const animacion = hamburgerButton.animate(
    [{ transform: "TranslateY(50%)" }],
    {
      easing: "linear",
      iterations: 10,
      duration: 2000,
    }
  );

  return animacion.finished;
}


animationhamburger()*/

var listener768 = window.matchMedia("(min-width: 768px)");
only768(listener768);
listener768.addListener(only768);
