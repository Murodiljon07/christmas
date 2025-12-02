const ModeBtn = document.getElementById("nav-bar-mode-btn");
const ModeBtnTextCon = document.getElementsByClassName("bx-moon");
const DarkBtn = document.getElementById("nav-bar-menu-btn");

ModeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
