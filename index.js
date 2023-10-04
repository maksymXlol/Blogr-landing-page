let burgerMenu = document.querySelector(".burger-btn");
let dropList = document.querySelector(".droplist");
burgerMenu.addEventListener("click", click);
function click() {
  dropList.classList.toggle("visible");
}
