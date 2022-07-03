const navMobile = document.getElementById("header__nav-mobile");
const fog = document.getElementById("fog");
const hamburgerButton = document.getElementById("header__hamburger");
const iHamburger = hamburgerButton.querySelectorAll("i");
const body=document.getElementById("body")

function menuToggleHidden() {
  navMobile.classList.toggle("hidden");
  fog.classList.toggle("hidden");
  body.classList.toggle("overflow-active")
  hamburgerButton.classList.toggle("menu-open");
  hamburgerButton.classList.toggle("menu-close");
}

hamburgerButton.addEventListener("click", () => {
  menuToggleHidden();
});

fog.addEventListener("click", () => {
  menuToggleHidden();
});

function only768(x) {
  if (x.matches) {
    navMobile.classList.add("hidden");
    fog.classList.add("hidden");
    hamburgerButton.classList.remove("menu-open");
    hamburgerButton.classList.add("menu-close");
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
