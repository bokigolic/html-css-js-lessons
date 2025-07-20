window.addEventListener("load", () => {
  console.log("Page fully loaded and ready");

  const loader = document.getElementById("loader");
  const main = document.querySelector("main");
  if (loader) loader.style.display = "none";
  if (main) main.style.opacity = 1;
});