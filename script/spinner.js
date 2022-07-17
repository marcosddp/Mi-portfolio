const loadingPage =  document.getElementById("loadingPage");
window.onload = function(){
    console.log("aaa")
  setTimeout(function(){
    loadingPage.style.opacity = "0.45";
    setTimeout(function(){
      loadingPage.style.display = "none";
      document.getElementById("body").classList.toggle("body--hidden");
    }, 1000);
  },3000);
}