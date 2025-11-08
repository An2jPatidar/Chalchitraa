// app.js
// Uses globals from data.js: MOVIES, parseGenres, applyGenre (if defined)

// ---------- helpers ----------
function getActiveGenre() {
  const urlGenre = new URLSearchParams(location.search).get("genre");
  return (urlGenre || sessionStorage.getItem("selectedGenre") || "all").toLowerCase();
}

function getFilteredListByGenre() {
  const g = getActiveGenre();
  if (g === "all") return MOVIES;
  return MOVIES.filter(m => (typeof parseGenres === "function")
    ? parseGenres(m).includes(g)
    : String(m.genre || "").toLowerCase().includes(g)
  );
}

// ---------- render grid ----------
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
        <p style="color:#aaa;font-size:13px;">${movie.year} • ${movie.genre} • ${movie.quality}</p>
      </div>
    `;
    // keep current genre while navigating
    card.addEventListener("click", () => {
      const g = getActiveGenre();
      window.location.href = `detail.html?m=${encodeURIComponent(movie.id)}&genre=${encodeURIComponent(g)}`;
    });
    grid.appendChild(card);
  });
}

// ---------- search (within current genre) ----------
function handleSearch(currentPageRenderer) {
  const input = document.querySelector("input[type='text']");
  const q = (input?.value || "").toLowerCase().trim();
  const base = getFilteredListByGenre();
  const list = q ? base.filter(m => m.title.toLowerCase().includes(q)) : base;

  // when searching, show page 1 of the filtered list
  currentPageRenderer(list, 1, true); // third arg = "isCustomList"
}

// ---------- pagination ----------
document.addEventListener("DOMContentLoaded", () => {
  const cardsPerPage = 16;
  const grid = document.getElementById("productGrid");
  const pagination = document.getElementById("pagination");
  if (!grid || !pagination) return;

  let currentPage = 1;
  // when search is active we pass a custom list
  let customList = null;

  function getWorkingList() {
    return customList || getFilteredListByGenre();
  }

  function getTotalPages(list) {
    return Math.ceil(list.length / cardsPerPage) || 1;
  }

  function showPage(page, listArg, fromSearch = false) {
    const list = listArg || getWorkingList();
    const totalPages = getTotalPages(list);

    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    currentPage = page;

    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const moviesToShow = list.slice(start, end);

    renderMovies(moviesToShow);
    setupPagination(page, totalPages, list);

    // if this render was triggered by typing/search, remember that list
    customList = fromSearch ? list : (customList && list === customList ? customList : null);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setupPagination(activePage, totalPages, list) {
    pagination.innerHTML = "";

    const mkBtn = (label, disabled, onClick) => {
      const b = document.createElement("button");
      b.textContent = label;
      b.disabled = !!disabled;
      b.addEventListener("click", onClick);
      return b;
    };

    pagination.appendChild(mkBtn("« Prev", activePage === 1, () => showPage(activePage - 1, list)));

    for (let i = 1; i <= totalPages; i++) {
      const btn = mkBtn(String(i), false, () => showPage(i, list));
      if (i === activePage) btn.classList.add("active");
      pagination.appendChild(btn);
    }

    pagination.appendChild(mkBtn("Next »", activePage === totalPages, () => showPage(activePage + 1, list)));
  }

  // ----- integrate with addMovieAtStart so page 1 stays 16 -----
  const originalAddMovieAtStart = window.addMovieAtStart;
  if (typeof originalAddMovieAtStart === "function") {
    window.addMovieAtStart = function (movie) {
      originalAddMovieAtStart(movie);

      // keep only 16 on first page (global order already updated by data.js)
      const list = getWorkingList();
      localStorage.setItem("moviesData", JSON.stringify(MOVIES));
      showPage(1, list);
    };
  }

  // ----- wire search -----
  const btn = document.querySelector(".btn.btn-red") || document.querySelector(".btn-red");
  const input = document.querySelector("input[type='text']");
  const triggerSearch = () => handleSearch(showPage);
  btn?.addEventListener("click", triggerSearch);
  input?.addEventListener("keydown", e => e.key === "Enter" && triggerSearch());

  // ----- patch applyGenre so pagination follows genre changes -----
  if (typeof window.applyGenre === "function") {
    const orig = window.applyGenre;
    window.applyGenre = function (g) {
      orig(g);              // updates sessionStorage + URL and re-renders
      customList = null;    // clear any search list
      showPage(1);          // then paginate from the active genre
    };
  }

  // ----- initial render: use current genre (DO NOT call renderMovies(MOVIES)) -----
  showPage(1);
});
