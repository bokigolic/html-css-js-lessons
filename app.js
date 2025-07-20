document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const loader = document.getElementById("loader");

  setTimeout(() => {
    if (loader) loader.style.display = "none";
    if (main) fadeIn(main);
  }, 800);

  document.querySelectorAll("a.next-button").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      fadeOut(main, () => window.location.href = link.href);
    });
  });

  document.querySelectorAll(".next-button").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotY = ((x / rect.width) - 0.5) * 20;
      const rotX = ((y / rect.height) - 0.5) * -20;
      card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
    card.addEventListener("mouseleave", () => card.style.transform = "");
  });
});

function fadeOut(el, cb) {
  el.style.transition = "opacity 0.4s ease";
  el.style.opacity = 0;
  setTimeout(cb, 400);
}

function fadeIn(el) {
  el.style.opacity = 0;
  el.style.transition = "opacity 0.6s ease";
  setTimeout(() => el.style.opacity = 1, 50);
}
