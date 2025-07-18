const menu = document.getElementById("menu");
const content = document.getElementById("content");

const lessons = {
  html: [
    { title: "🔤 What is HTML?", page: "learn-html/lesson1.html" },
    { title: "🛠️ HTML Editors", page: "learn-html/lesson2.html" },
    { title: "📘 HTML Basic Examples", page: "learn-html/lesson3.html" },
    { title: "🔤 HTML Elements", page: "learn-html/lesson4.html" },
    { title: "📁 HTML Page Structure", page: "learn-html/lesson5.html" },
    { title: "📜 HTML History", page: "learn-html/lesson6.html" }
  ],
  css: [
    { title: "🎨 CSS Basics", page: "learn-css/lesson1.html" },
    { title: "🔍 Selectors", page: "learn-css/lesson2.html" }
  ],
  js: [
    { title: "📜 JavaScript Intro", page: "learn-js/lesson1.html" },
    { title: "🔢 Variables", page: "learn-js/lesson2.html" }
  ]
};

let currentSection = null;

menu.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName === "LI" && target.dataset.section) {
    const section = target.dataset.section;
    currentSection = section;
    showLessonList(section);
  }
});

function showLessonList(section) {
  menu.innerHTML = "";

  const back = document.createElement("li");
  back.textContent = "⬅ Back";
  back.style.fontWeight = "bold";
  back.addEventListener("click", () => location.reload());
  menu.appendChild(back);

  if (!lessons[section] || lessons[section].length === 0) {
    content.innerHTML = "<p>No lessons found for this section.</p>";
    return;
  }

  lessons[section].forEach((lesson) => {
    const li = document.createElement("li");
    li.textContent = lesson.title;
    li.dataset.page = lesson.page;

    li.addEventListener("click", async () => {
      highlightActive(li);
      content.innerHTML = "<p>Loading...</p>";
      try {
        const res = await fetch(lesson.page);
        if (!res.ok) throw new Error("Network error");
        const html = await res.text();
        content.innerHTML = html;
      } catch (err) {
        content.innerHTML = `<p>Failed to load content. <button onclick=\"location.reload()\">Reload</button></p>`;
        console.error(err);
      }
    });

    menu.appendChild(li);
  });
}

function highlightActive(clickedLi) {
  document.querySelectorAll(".sidebar li").forEach((el) => el.classList.remove("active"));
  clickedLi.classList.add("active");
}

// Optional: Restore scroll position or add localStorage logic here