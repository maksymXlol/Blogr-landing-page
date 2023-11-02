// let burgerMenu = document.querySelector(".burger-btn");
// let dropList = document.querySelector(".droplist");
// burgerMenu.addEventListener("click", click);
// function click() {
//   dropList.classList.toggle("visible");
// }

let header = document.querySelector(".header");

window.addEventListener("scroll", (event) => {
  if (window.scrollY >= header.clientHeight) {
    header.classList.add("slide");
  } else {
    header.classList.remove("slide");
  }
});

document.addEventListener("click", (event) => {
  let dropdownBtn = event.target.closest("[data-dropdown-btn]");

  if (dropdownBtn) {
    let dropdownTarget = dropdownBtn.getAttribute("data-dropdown-target");

    let targetElement = document.querySelector(
      `[data-dropdown-id=${dropdownTarget}]`
    );
    let targetOpen =
      targetElement.getAttribute("data-dropdown-open") === "true"
        ? "false"
        : "true";
    targetElement.setAttribute("data-dropdown-open", targetOpen);
    dropdownBtn.setAttribute("data-dropdown-open", targetOpen);
  }
});
