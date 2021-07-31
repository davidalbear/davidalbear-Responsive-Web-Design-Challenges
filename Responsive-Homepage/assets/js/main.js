const $btn = document.querySelector(".navigation-toggle"),
  $navigation = document.querySelector(".nav"),
  $close = document.querySelector(".nav-close");

$btn.addEventListener("click", (e) => {
  $navigation.classList.toggle("open-nav");
});

$close.addEventListener("click", (e) => {
  $navigation.classList.toggle("open-nav");
});
