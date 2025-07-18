const menu = document.getElementById("menu");
const content = document.getElementById("content");

const lessons = {
  html: [
    { title: "Intro to HTML", page: "learn-html/lesson1.html" },
    { title: "HTML Elements", page: "learn-html/lesson2.html" },
    { title: "HTML Forms", page: "learn-html/lesson3.html" }
  ],
  css: [
    { title: "CSS Basics", page: "learn-css/lesson1.html" },
    { title: "Selectors", page: "learn-css/lesson2.html" }
  ],
  js: [
    { title: "JavaScript Intro", page: "learn-js/lesson1.html" },
    { title: "Variables", page: "learn-js/lesson2.html" }
  ]
};

// Klik na sekciju (html/css/js)
menu.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName === "LI" && target.dataset.section) {
    const section = target.dataset.section;
    showLessonList(section);
  }
});

function showLessonList(section) {
  // Clear current menu
  menu.innerHTML = "";

  // Back button
  const back = document.createElement("li");
  back.textContent = "⬅ Back";
  back.style.fontWeight = "bold";
  back.addEventListener("click", () => location.reload());
  menu.appendChild(back);

  // List of lessons
  lessons[section].forEach((lesson) => {
    const li = document.createElement("li");
    li.textContent = lesson.title;
    li.dataset.page = lesson.page;

    li.addEventListener("click", async () => {
      highlightActive(li);
      try {
        const res = await fetch(lesson.page);
        const html = await res.text();
        content.innerHTML = html;
      } catch (err) {
        content.innerHTML = "<p>Failed to load content.</p>";
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
