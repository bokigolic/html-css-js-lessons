// app.js

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.display = "none";
    fadeIn(main);
  }, 1000); // simulate loading delay

  // Page transition
  document.querySelectorAll("a[href]").forEach(link => {
    if (!link.classList.contains("next-button")) return;
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      fadeOut(main, () => window.location.href = href);
    });
  });

  // 3D hover effect
  document.querySelectorAll(".next-button").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 20;
      const rotateX = ((y / rect.height) - 0.5) * -20;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0)";
    });
  });
});

function fadeOut(el, callback) {
  el.style.opacity = 1;
  el.style.transition = "opacity 0.4s ease";
  el.style.opacity = 0;
  setTimeout(callback, 400);
}

function fadeIn(el) {
  el.style.opacity = 0;
  el.style.transition = "opacity 0.6s ease";
  setTimeout(() => {
    el.style.opacity = 1;
  }, 50);
}

window.onload = function () {
  const main = document.querySelector("main");
  if (main) {
    main.style.opacity = 1;
  }

  // Ako koristiš loader
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
};
