// Dark mode toggle. Theme is applied early (see the inline script in
// <head> of each page) to avoid a flash of the wrong theme; this file
// just wires up the toggle button once the DOM is ready.

function getStoredTheme() {
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
    // localStorage unavailable (private browsing, embedded preview, etc).
    // Theme still switches for the current page load, it just won't persist.
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
