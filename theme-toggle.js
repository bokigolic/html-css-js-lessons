document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-theme");

  // Apply saved theme from localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const newTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
  });
});
