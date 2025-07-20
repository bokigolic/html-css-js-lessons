document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");

  includes.forEach(async el => {
    const file = el.getAttribute("data-include");
    if (file) {
      try {
        const resp = await fetch(file);
        const html = await resp.text();
        el.outerHTML = html;
      } catch (err) {
        console.error(`Include failed for ${file}`, err);
      }
    }
  });
});
