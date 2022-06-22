const navMobile = document.getElementById("header__nav-mobile");
const fog=document.getElementById("fog");
const hamburgerButton = document.getElementById("header__hamburger");
console.log(navMobile);
hamburgerButton.addEventListener("click", () => {
 console.log(navMobile);
 navMobile.classList.toggle("hidden");
 fog.classList.toggle("hidden");
});

console.log(window.innerWidth)

function only768(x) {
    if (x.matches) { // If media query matches
      navMobile.classList.add("hidden") 
      fog.classList.add("hidden")
    }
  }

var listener768 = window.matchMedia("(min-width: 768px)")
only768(listener768 ) // Call listener function at run time
listener768.addListener(only768) // Attach listener function on state changes