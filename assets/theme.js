function getStoredTheme() { //dark light theme
  try {
    return localStorage.getItem("theme");
  } catch (e) {
    return null;
  }
}

function setStoredTheme(value) {
  try {
    localStorage.setItem("theme", value);
  } catch (e) {
  }
}

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.querySelector("[data-theme-toggle]");
  if (btn) {
    btn.textContent = theme === "dark" ? "light" : "dark";
    btn.setAttribute("aria-label", "Switch to " + (theme === "dark" ? "light" : "dark") + " mode");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  applyTheme(currentTheme());

  const btn = document.querySelector("[data-theme-toggle]");
  if (btn) {
    btn.addEventListener("click", function () {
      const next = currentTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      setStoredTheme(next);
    });
  }
});
