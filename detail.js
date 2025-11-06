// detail.js
function getMovieIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("m"); // ?m=<id>
}

function renderMovie(movie) {
  const root = document.getElementById("movieDetail");
  if (!movie) {
    root.innerHTML = `<p style="color:#e50914;">Movie not found.</p>`;
    return;
  }

  root.innerHTML = `
    <div class="poster">
      <img src="${movie.image}" alt="${movie.title}">
    </div>
    <div class="meta">
      <h1>${movie.title}</h1>
      <div class="sub">${movie.year} • ${movie.genre} • ${movie.duration}</div>
      <div class="desc">${movie.description}</div>
      <div class="dl-grid">
        ${movie.downloads.map(d => `
          <a class="btn btn-primary" href="${d.url}" target="_blank" rel="noopener">
            Download ${d.label}
          </a>
        `).join("")}
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const id = getMovieIdFromURL();
  const movie = MOVIES.find(m => m.id === id);
  renderMovie(movie);
});
