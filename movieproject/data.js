// data.js
// Keep all your movie info in ONE place
const MOVIES =JSON.parse(localStorage.getItem("moviesData")) || [
     
{
    id: "avengers-endgame",
    title: "Avengers: Endgame",
    image: "/images/avengers-endgame.jpg",
    year: 2019,
    genre: "Action/Sci-Fi",
    duration: "3h 2m",
    description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    downloads: [
      { label: "480p", url: "#" },
      { label: "720p", url: "#" },
      { label: "1080p", url: "#" }
    ]
  },  
{
    id: "thamma",
    title: "Thamma",
    image: "/images/thamma.jpg",
    year: 2024,
    genre: "Action",
    duration: "2h 18m",
    description: "A daring mission turns personal when Thamma uncovers a secret from his past.",
    trailer: "#", // or a YouTube link
    downloads: [
      { label: "480p", url: "#" },
      { label: "720p", url: "#" },
      { label: "1080p", url: "#" }
    ]
  },
  {
    id: "coolie",
    title: "Coolie",
    image: "/images/coolie.jpg",
    year: 1995,
    genre: "Drama",
    duration: "2h 45m",
    description: "A heartfelt story of grit and family set against the bustle of the railways.",
    trailer: "#",
    downloads: [
      { label: "480p", url: "#" },
      { label: "720p", url: "#" },
      { label: "1080p", url: "#" }
    ]
  },
  {
    id: "lokah",
    title: "Lokah",
    image: "/images/lokah.jpg",
    year: 2021,
    genre: "Sci-Fi",
    duration: "2h 02m",
    description: "When reality glitches, only a coder can reboot the world.",
    trailer: "#",
    downloads: [
      { label: "480p", url: "#" },
      { label: "720p", url: "#" },
      { label: "1080p", url: "#" }
    ]
  },
  {
    id: "bahubali-epic",
    title: "Bahubali : The Epic",
    image: "/images/bahubali-epic.jpg",
    year: 2015,
    genre: "Epic",
    duration: "2h 39m",
    description: "The legend of Bahubali rises in a tale of kingdoms and destiny.",
    trailer: "#",
    downloads: [
      { label: "480p", url: "#" },
      { label: "720p", url: "#" },
      { label: "1080p", url: "#" }
    ]
  },
  {
    id: "idli-kadai",
    title: "Idli Kadai",
    image: "/images/idli-kadai.jpg",
    year: 2020,
    genre: "Comedy",
    duration: "1h 52m",
    description: "A foodie’s quest to save his family’s legendary eatery.",
    trailer: "#",
    downloads: [
      { label: "480p", url: "https://fsl.anime4u.co/Idli.Kadai.2025.480p.DS4K.WEB-DL.Hindi-Tamil.ESub.x264-HDHub4u.Ms.mkv" },
      { label: "720p", url: "https://fsl.anime4u.co/Idli.Kadai.2025.720p.HEVC.DS4K.WEB-DL.Hindi-Tamil.ESub.x265-HDHub4u.Ms.mkv?token=1762365897" },
      { label: "1080p", url: "https://fsl.anime4u.co/Idli.Kadai.2025.1080p.DS4K.WEB-DL.Hindi.5.1-Tamil.5.1.ESub.x264-HDHub4u.Ms.mkv?token=1762359459" }
    ]
  },
  {
    id: "sooryavansham",
    title: "Sooryavansham",
    image: "/images/sooryavansham.jpg",
    year: 1999,
    genre: "Family/Drama",
    duration: "2h 49m",
    description: "An estranged son seeks honor and redemption.",
    trailer: "#",
    downloads: [
        { label: "480p", url: "#" },
        { label: "720p", url: "#" },
        { label: "1080p", url: "#" }
    ]
  },
  
];

// === Add new movie at the start (DEV use only; does NOT touch TRENDING) ===
function addMovieAtStart(movie) {
  if (!movie || !movie.id || !movie.title) {
    console.error("❌ Movie must have at least 'id' and 'title'.");
    return;
  }
  if (MOVIES.some(m => m.id === movie.id)) {
    console.warn(`⚠️ Movie with id '${movie.id}' already exists.`);
    return;
  }
  MOVIES.unshift(movie);
  localStorage.setItem("moviesData", JSON.stringify(MOVIES));
  if (typeof renderMovies === "function") renderMovies(MOVIES);
  console.log(`✅ '${movie.title}' added at the start of MOVIES.`);
}

// === Render all movies into #productGrid ===
function renderMovies(list) {
  const grid = document.getElementById("productGrid");
  if (!grid) {
    console.error("❌ Missing <div id='productGrid'></div> in HTML.");
    return;
  }
  grid.innerHTML = list.map(m => `
    <div class="product-card" data-id="${m.id}">
      <img src="${m.image}" alt="${m.title}">
      <div class="product-info">
        <h3>${m.title}</h3>
        <p style="color:#aaa;font-size:13px;">${m.year} • ${m.genre}</p>
      </div>
    </div>
  `).join("");

  // (Optional) click → go to details
  grid.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.id;
      window.location.href = `detail.html?m=${encodeURIComponent(id)}`;
    });
  });
}






// ----- Trending data (top 10). Use your own order/posters -----
const TRENDING = [
  { id:"idli-kadai",      title:"Idli Kadai",            image:"/images/idli-kadai.jpg" },
  { id:"og",              title:"They Call Him OG",      image:"/images/og.jpg" },         // change path if needed
  { id:"narasimha",       title:"Narasimha",             image:"/images/narasimha.jpg" },  // change path if needed
  { id:"bad-bollywood",   title:"The Bad Boys of Bollywood", image:"/images/bad-bollywood.jpg"},// change path if needed
  { id:"saiyaara",        title:"Saiyaara",                image:"/images/saiyaara.jpg" },    // change path if needed
  { id:"kantara",         title:"Kantara",                 image:"/images/kantara.jpg" },
  { id:"kurukshetra",     title:"Kurukshetra",             image:"/images/kurukshetra.jpg" },
  { id:"wednesday",       title:"Wednesday",               image:"/images/wednesday.jpg" },         // change path if needed
  { id:"the-witcher",     title:"The Witcher",             image:"/images/the-witcher.jpg" },  // change path if needed
  { id:"thamma",          title:"Thamma", image:"/images/thamma.jpg"},// change path if needed

  // ... add up to 10
];

// ----- Render Trending Row -----
function renderTrending(list){
  const track = document.getElementById("trendingTrack");
  if(!track) return;

  track.innerHTML = "";
  list.forEach((m, i) => {
    const card = document.createElement("div");
    card.className = "tcard";
    card.setAttribute("data-rank", i+1); // big number overlay
    card.innerHTML = `<img src="${m.image}" alt="${m.title}">`;
    card.addEventListener("click", () => {
      // Go to details page if you use it
      window.location.href = `detail.html?m=${encodeURIComponent(m.id || m.title)}`;
    });
    track.appendChild(card);
  });

  // Scroll controls
  const row = document.getElementById("trendingRow");
  const btnPrev = row.querySelector(".prev");
  const btnNext = row.querySelector(".next");
  const step = Math.round(track.clientWidth * 0.9);

  btnPrev.onclick = () => track.scrollBy({ left: -step, behavior: "smooth" });
  btnNext.onclick = () => track.scrollBy({ left:  step, behavior: "smooth" });
}

// ----- Init on load -----
document.addEventListener("DOMContentLoaded", () => {
  renderTrending(TRENDING);
});

 document.addEventListener("DOMContentLoaded", () => {
  renderMovies(MOVIES); });