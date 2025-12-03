/* theme btn */
const ThemeBtn = document.getElementById("theme-btn");
const ThemeBtnIcon = document.getElementById("theme-icon");

/* nav links */
const DropBarBtn = document.getElementById("drop-bar-btn");
const NavLinks = document.getElementById("nav-links");
const CloseDropBarBtn = document.getElementById("close-drop-bar-btn");

/* like btn */
const LikeGiftBtn = document.querySelectorAll(".liked-gift-btn");

/* Theme button */
ThemeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-colors");

  ThemeBtnIcon.classList.toggle("bx-moon");
  ThemeBtnIcon.classList.toggle("bx-sun");
});

/* mobile nav */
DropBarBtn.addEventListener("click", () => {
  NavLinks.style.top = "0";
});
CloseDropBarBtn.addEventListener("click", () => {
  NavLinks.style.top = "-400px";
});

/* like gift btn */
LikeGiftBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const heart = btn.querySelector("i");
    heart.classList.toggle("bxs-heart");
  });
});
