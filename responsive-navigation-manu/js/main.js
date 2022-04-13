// selecting all necessary dom element

const navMenu = document.querySelector("#nav-menu");
const openMenu = document.querySelector("#nav-open");
const closeMenu = document.querySelector("#nav-close");
const navItem = document.querySelectorAll(".nav-item");

navItem.forEach((element) => {
  element.addEventListener("click", () => {
    setTimeout(() => {
      navMenu.classList.remove("show");
    }, 500);
  });
});

openMenu.addEventListener("click", () => {
  navMenu.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// happy codding!!!!
// this project is made by Fahad in  13 April, 2022.
