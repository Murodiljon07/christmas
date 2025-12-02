/* theme bnt collections */
const ThemeBtn = document.getElementById("theme-btn");
const ThemeBtnIcon = document.getElementById("theme-icon");

/* nev links collections */
const DropBarBtn = document.getElementById("drop-bar-btn");
const NavLinks = document.getElementById("nav-links");
const CloseDropBarBtn = document.getElementById("close-drop-bar-btn");

ThemeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-colors");

  const isDark = document.documentElement.classList.contains("dark-colors");

  if (isDark) {
    ThemeBtnIcon.classList.remove("bx-moon");
    ThemeBtnIcon.classList.add("bx-sun");
  } else {
    ThemeBtnIcon.classList.remove("bx-sun");
    ThemeBtnIcon.classList.add("bx-moon");
  }
});

DropBarBtn.addEventListener("click", () => {
  NavLinks.style.display = "flex";
});

CloseDropBarBtn.addEventListener("click", () => {
  NavLinks.style.display = "none";
});
