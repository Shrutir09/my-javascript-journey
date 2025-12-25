let btn = document.getElementById("themeToggle");

let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.body.className = savedTheme;
} else {
  document.body.className = "light-theme";
}

btn.addEventListener("click", () => {
  if (document.body.className === "light-theme") {
    document.body.className = "dark-theme";
    localStorage.setItem("theme", "dark-theme");
  } else {
    document.body.className = "light-theme";
    localStorage.setItem("theme", "light-theme");
  }
});

