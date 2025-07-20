document.querySelectorAll("a[href]").forEach(link => {
  if (!link.classList.contains("next-button")) return;
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector("main").style.opacity = 0;
    setTimeout(() => window.location.href = href, 400);
  });
});

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
