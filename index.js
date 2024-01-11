const $barsMobile = document.getElementById("mobi__menu");
const $CloseMenu = document.getElementById("close-mobi__menu");
const $menuBox = document.getElementById("menu__box");
const $overlay = document.getElementById("overlay");

$barsMobile.addEventListener("click", function (event) {
  event.preventDefault();
  $menuBox.classList.add("opent__menu");
  $barsMobile.classList.add("none__display");
  $CloseMenu.classList.add("active__display");
  $overlay.classList.add("active__display");
});

$CloseMenu.addEventListener("click", function (event) {
  event.preventDefault();
  closeMenuMobi();
});
$overlay.addEventListener("click", function (event) {
  event.preventDefault();
  closeMenuMobi();
});

function closeMenuMobi() {
  $menuBox.classList.remove("opent__menu");
  $barsMobile.classList.remove("none__display");
  $CloseMenu.classList.remove("active__display");
  $overlay.classList.remove("active__display");
}
