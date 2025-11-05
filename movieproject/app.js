// app.js
// Uses MOVIES from data.js

function renderMovies(list) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `<p style="color:#e50914;text-align:center;width:100%;">No movies found 😢</p>`;
    return;
  }

  list.forEach(movie => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <div class="product-info">
        <h3>${movie.title}</h3>
      </div>
    `;
    // Click card → go to detail page with ?m=<id>
    card.addEventListener("click", () => {
      window.location.href = `detail.html?m=${encodeURIComponent(movie.id)}`;
    });
    grid.appendChild(card);
  });
}

// Optional search (matches your current HTML)
function handleSearch() {
  const input = document.querySelector("input[type='text']");
  const q = (input?.value || "").toLowerCase().trim();
  const filtered = q
    ? MOVIES.filter(m => m.title.toLowerCase().includes(q))
    : MOVIES;
  renderMovies(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  renderMovies(MOVIES);
  const btn = document.querySelector(".btn btn-red, .btn.btn-red") || document.querySelector(".btn-red");
  const input = document.querySelector("input[type='text']");
  btn?.addEventListener("click", handleSearch);
  input?.addEventListener("keydown", e => e.key === "Enter" && handleSearch());
});
