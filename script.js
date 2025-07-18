const lessons = [
  { id: 1, title: "What is JavaScript?", content: "JavaScript is a programming language used to create interactive effects inside web browsers." },
  { id: 2, title: "Setup Dev Environment", content: "You can write JavaScript in any text editor. Use Chrome or Firefox for testing." },
  { id: 3, title: "HTML <script> Tag", content: "The <script> tag is used to embed JavaScript in HTML." },
  { id: 4, title: "Variables", content: "Use var, let, or const to declare variables in JavaScript." },
  { id: 5, title: "Functions", content: "Functions are blocks of code that perform a specific task." },
  // Dodaj još po želji
];

const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");

lessons.forEach((lesson) => {
  const btn = document.createElement("button");
  btn.textContent = lesson.title;
  btn.addEventListener("click", () => {
    // Prikaz sadržaja
    content.innerHTML = `<h2>${lesson.title}</h2><p>${lesson.content}</p>`;

    // Aktivna klasa
    document.querySelectorAll(".sidebar button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });

  sidebar.appendChild(btn);
});
