const chapters = [
  "1 Nephi 1",
  "1 Nephi 2",
  "1 Nephi 3",
  "1 Nephi 4",
  "1 Nephi 5",
  "1 Nephi 6",
  "1 Nephi 7",
  "1 Nephi 8",
  "1 Nephi 9",
  "1 Nephi 10"
];

let currentList = [...chapters];

const chapterList = document.getElementById("chapter-list");
const sortAscBtn = document.getElementById("sort-asc");
const sortDescBtn = document.getElementById("sort-desc");
const resetBtn = document.getElementById("reset");

function renderList(list) {
  chapterList.innerHTML = "";
  list.forEach(chapter => {
    const li = document.createElement("li");
    li.textContent = chapter;
    chapterList.appendChild(li);
  });
}

sortAscBtn.addEventListener("click", () => {
  const sorted = [...currentList].sort((a, b) => a.localeCompare(b));
  renderList(sorted);
});

sortDescBtn.addEventListener("click", () => {
  const sorted = [...currentList].sort((a, b) => b.localeCompare(a));
  renderList(sorted);
});

resetBtn.addEventListener("click", () => {
  renderList(currentList);
});

// Footer date setup
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Initial render
renderList(currentList);



