// Vælg burger-ikon og menu
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

// Når burger-menuen klikkes
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});
