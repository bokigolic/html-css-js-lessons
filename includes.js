document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll("[data-include]");

  includes.forEach(el => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Could not load ${file}`);
        return response.text();
      })
      .then(html => {
        el.outerHTML = html;
      })
      .catch(err => {
        console.error(err);
        el.outerHTML = `<div style="color:red;">Error loading: ${file}</div>`;
      });
  });
});
