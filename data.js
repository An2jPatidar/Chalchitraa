// data.js
// Keep all your movie info in ONE place
const MOVIES =JSON.parse(localStorage.getItem("moviesData")) || [
  
  {
    id: "vash-level2",
    title: "Vash : Level 2",
    image: "/images/vash-level-2.jpeg",
    year:2025,
    genre: "Horror/Thriller",
    quality: "WEB-DL",
    description: "The story picks up 12 years after the first film, with a father (Atharv) trying to save his daughter (Arya) from the lingering effects of a black magician, while also dealing with personal loss.",
    downloads: [
      { label: "480p", url: "https://fsl.anime4u.co/Vash-Level.2.2025.480p.DS4K.WEB-DL.Hindi-Gujarati.ESub.x264-HDHub4u.Ms.mkv" },
      { label: "720p", url: "https://cdn.fsl-buckets.life/Vash-Level.2.2025.720p.10Bit.HEVC.DS4K.WEB-DL.Hindi.5.1-Gujarati.5.1.ESub.x265-HDHub4u.Ms.mkv?token=dee7737eec42e920eb700b9a770c70a3_136" },
      { label: "1080p", url: "https://cdn.fsl-buckets.life/Vash-Level.2.2025.1080p.DS4K.WEB-DL.Hindi.5.1-Gujarati.5.1.ESub.x264-HDHub4u.Ms.mkv?token=000ac5949c307f52523b65b8dd30991e_137" }
    ]
  },

  {
  id: "wednesday",
  title: "Wednesday",
  image: "/images/wednesday.jpg",
  year: 2023,
  genre: "Mystery/Drama",
  quality: "WEB-DL",
  description: "The darkly humorous adventures of Wednesday Addams at Nevermore Academy.",
  downloads: [
    { label: "480p", url: "https://cdn.fsl-buckets.work/Wednesday.S02.480p.WEB-DL.Hindi-English.ESub.x264-HDHub4u.Ms.zip?token=79018af7866d16f80c79c3ce1ca5a399_131" },
    { label: "720p", url: "https://cdn.fsl-buckets.work/Wednesday.S02.720p.WEB-DL.Hindi.5.1-English.5.1.ESub.x264-HDHub4u.Ms.zip?token=000ac5949c307f52523b65b8dd30991e_130" },
    { label: "1080p", url: "https://fsl.anime4u.co/Wednesday.S02.1080p.WEB-DL.Hindi.5.1-English.5.1.ESub.x264-HDHub4u.Ms.zip?token=1762454800125" }
  ]
},

  {
  id: "bad-bollywood",
  title: "The Bad Boys of Bollywood",
  image: "images/bad-bollywood.jpg",
  year: 2024,
  genre: "Crime/Drama",
  quality: "WEB-DL",
  description: "An unfiltered journey through the chaos, charm, and controversies of Bollywood’s dark side.",
  downloads: [
    { label: "480p", url: "https://fsl.anime4u.co/The.Ba---ds.of.Bollywood.S01.480p.Hindi.WEB-DL.ESub.x264-HDHub4u.Ms.zip?token=1762451594" },
    { label: "720p", url: "https://fsl.anime4u.co/The.Ba---ds.of.Bollywood.S01.720p.HEVC.Hindi.WEB-DL.5.1.ESub.x265-HDHub4u.Ms.zip?token=1762448196" },
    { label: "1080p", url: "https://fsl.anime4u.co/The.Ba---ds.of.Bollywood.S01.1080p.HEVC.Hindi.WEB-DL.5.1.ESub.x265-HDHub4u.Ms.zip?token=1762451768" }
  ]
  },
  {
    id: "the-witcher",
    title: "The-Witcher (season 4)",
    image: "/images/the-witcher.jpg",
    year: 2025,
    genre: "Adventure/Action",
    quality: "WEB-DL",
    description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    downloads: [
      { label: "480p", url: "https://fsl.gigabytes.click/The.Witcher.S04.480p.WEB-DL.Hindi-English.ESub.x264-HDHub4u.Ms.zip?token=79018af7866d16f80c79c3ce1ca5a399_123" },
      { label: "720p", url: "https://cdn.fsl-buckets.life/The.Witcher.S04.720p.10Bit.HEVC.WEB-DL.Hindi.5.1-English.5.1.x265-HDHub4u.Ms.zip?token=79018af7866d16f80c79c3ce1ca5a399_124" },
      { label: "1080p", url: "https://fsl.gigabytes.click/The.Witcher.S04.1080p.10Bit.HEVC.WEB-DL.Hindi.5.1-English.5.1.x265-HDHub4u.Ms.zip?token=dee7737eec42e920eb700b9a770c70a3_125" }
    ]
  },
  {
    id: "breaking-bad1",
    title: " Breaking Bad (Season 1)",
    image: "/images/breaking-bad.jpg",
    year: 2008,
    genre: "crime/thriller",
    quality: "WEB-DL",
    description: "Breaking Bad is absolutely, without a doubt, one of the greatest tv shows ever created…its damn near perfect! I know that people say that about a ton of different shows but Breaking Bad really is universally thought of as one of the greatest shows of all-time.",
    trailer: "#",
    downloads: [
        { label: "480p", url: "https://fsl.anime4u.co/Breaking.Bad.S01.720p.HEVC.BluRay.Hindi.ORG-English.ESub.x265-HDHub4u.Tv.zip?token=1762448070https://fsl.anime4u.co/Kantara-Chapter.1.2025.720p.10Bit.HEVC.WEB-DL.Hindi.Line-Kannada.ESub.x265-HDHub4u.Ms.mkv?token=1762422693" },
        { label: "720p", url: "https://fsl.anime4u.co/Breaking.Bad.S01.720p.HEVC.BluRay.Hindi.ORG-English.ESub.x265-HDHub4u.Tv.zip?token=1762448070https://fsl.anime4u.co/Kantara-Chapter.1.2025.720p.10Bit.HEVC.WEB-DL.Hindi.Line-Kannada.ESub.x265-HDHub4u.Ms.mkv?token=1762422693" },
        { label: "1080p", url: "https://pub-58c37aacc5ca4f78ba86b47195edec29.r2.dev/Breaking.Bad.S01.1080p.BluRay.Hindi.ORG.2.0-English.5.1.ESub.x264-HDHub4u.Tv.zip?token=1762444537111.say-no-to-piracy.store/Kantara-Chapter.1.2025.1080p.10Bit.HEVC.WEB-DL.Hindi.Line-Kannada.5.1.ESub.x265-HDHub4u.Ms.mkv?token=1762421258" }
    ]
  },   
  {
    id: "breaking-bad2",
    title: " Breaking Bad (Season 2)",
    image: "/images/breaking-bad.jpg",
    year: 2008,
    genre: "crime/thriller",
    quality: "WEB-DL",
    description: "Breaking Bad is absolutely, without a doubt, one of the greatest tv shows ever created…its damn near perfect! I know that people say that about a ton of different shows but Breaking Bad really is universally thought of as one of the greatest shows of all-time.",
    trailer: "#",
    downloads: [
        { label: "480p", url: "https://pub-58c37aacc5ca4f78ba86b47195edec29.r2.dev/Breaking.Bad.S02.720p.10Bit.HEVC.BluRay.Hindi.ORG-English.ESub.x265-HDHub4u.Tv.zip?token=1762449938144" },
        { label: "720p", url: "https://pub-58c37aacc5ca4f78ba86b47195edec29.r2.dev/Breaking.Bad.S02.720p.BluRay.Hindi.ORG.2.0-English.ESub.x264-HDHub4u.Tv.zip?token=1762453019147" },
        { label: "1080p", url: "https://fsl.anime4u.co/Breaking.Bad.S02.1080p.BluRay.Hindi.DD.2.0-English.5.1.ESub.x264-HDHub4u.Tv.zip?token=1762446435145"}
    ]
  },   
  
  {
    id: "kantara",
    title: "kantara",
    image: "/images/kantara.jpg",
    year: 2025,
    genre: "Action/Thriller",
    quality: "WEB-DL",
    description: "Kantara: Chapter 1 is an origin story detailing a tribal warrior's fight against a tyrannical kingdom for his people's land and divine traditions.",
    trailer: "#",
    downloads: [
        { label: "480p", url: "https://fsl.anime4u.co/Kantara-Chapter.1.2025.720p.10Bit.HEVC.WEB-DL.Hindi.Line-Kannada.ESub.x265-HDHub4u.Ms.mkv?token=1762422693" },
        { label: "720p", url: "https://fsl.anime4u.co/Kantara-Chapter.1.2025.720p.10Bit.HEVC.WEB-DL.Hindi.Line-Kannada.ESub.x265-HDHub4u.Ms.mkv?token=1762422693" },
        { label: "1080p", url: "https://lol.say-no-to-piracy.store/Kantara-Chapter.1.2025.1080p.10Bit.HEVC.WEB-DL.Hindi.Line-Kannada.5.1.ESub.x265-HDHub4u.Ms.mkv?token=1762421258" }
    ]
  },
  {
    id: "kurukshetra",
    title: "Kurukshetra (Season 1)",
    image: "/images/kurukshetra.jpg",
    year:2025,
    genre: "Animation/History",
    quality: "WEB-DL",
    description: "Mahabharata war through an anime-inspired visual style and exploring themes of duty, destiny, and morality from the perspectives of its warriors. ",
    downloads: [
      { label: "480p", url: "https://fsl.anime4u.co/Kurukshetra.S01.PART-2.480p.Hindi.WEB-DL.ESub.x264-HDHub4u.Ms.zip?token=1762449153" },
      { label: "720p", url: "https://fsl.anime4u.co/Kurukshetra.S01.PART-2.720p.Hindi.WEB-DL.5.1.ESub.x264-HDHub4u.Ms.zip?token=1762448927" },
      { label: "1080p", url: "https://cdn.fsl-buckets.work/Kurukshetra.S01.PART-2.1080p.HEVC.Hindi.WEB-DL.5.1.ESub.x265-HDHub4u.Ms.zip?token=dee7737eec42e920eb700b9a770c70a3_112" }
    ]
  },
   
{
    id: "thamma",
    title: "Thamma",
    image: "/images/thamma.jpg",
    year: 2025,
    genre: "Horror/comedy",
    quality: "CAM-Rip",
    description: "Thamma is a supernatural love story about a man who is transformed into a vampire (Betal) and must battle an ancient evil to save his love and humanity.",
    trailer: "#", // or a YouTube link
    downloads: [
      { label: "480p", url: "https://fsl.anime4u.co/Thamma.2025.480p.V2-HDTC.Hindi-Line.x264-HDHub4u.Ms.mkv?token=1762451143" },
      { label: "720p", url: "https://fsl.anime4u.co/Thamma.2025.720p.V2-HDTC.Hindi-Line.x264-HDHub4u.Ms.mkv?token=1762451545" },
      { label: "1080p", url: "https://fsl.anime4u.co/Thamma.2025.1080p.V2-HDTC.Hindi-Line.x264-HDHub4u.Ms.mkv?token=1762448169" }
    ]
  },
  {
    id: "coolie",
    title: "Coolie",
    image: "/images/coolie.jpg",
    year: 2025,
    genre: "Action/Thriller",
    quality: "WEB-DL",
    description: "A former union leader battles a gold smuggling crime syndicate for justice and revenge",
    trailer: "#",
    downloads: [
      { label: "480p", url: "https://fsl.anime4u.co/Coolie.2025.480p.DS4K.WEB-DL.Hindi.ORG-Tamil.ESub.x264-HDHub4u.Ms.mkv?token=1762422021118" },
      { label: "720p", url: "https://fsl.anime4u.co/Coolie.2025.720p.10bit.HEVC.DS4K.WEB-DL.Hindi.5.1-Tamil.ESub.x265-HDHub4u.Ms.mkv?token=1762420677" },
      { label: "1080p", url: "https://fsl.anime4u.co/Coolie.2025.1080p.10bit.HEVC.DS4K.WEB-DL.Hindi.5.1-Tamil.5.1.ESub.x265-HDHub4u.Ms.mkv?token=1762419525" }
    ]
  },
  {
    id: "lokah",
    title: "Lokah",
    image: "/images/lokah.jpg",
    year: 2025,
    genre: "Sci-Fi",
    quality: "WEB-DL",
    description: "When reality glitches, only a coder can reboot the world.",
    trailer: "#",
    downloads: [
      { label: "480p", url: "https://lol.say-no-to-piracy.store/Lokah.Chapter.1-Chandra.2025.480p.WEB-DL.Hindi-Malayalam.ESub.x264-HDHub4u.Ms.mkv" },
      { label: "720p", url: "https://cdn.fsl-buckets.life/Lokah.Chapter.1-Chandra.2025.720p.HEVC.WEB-DL.Hindi-Malayalam.ESub.x265-HDHub4u.Ms.mkv?token=e226c68905574b8e521f86aaba74a119_120" },
      { label: "1080p", url: "https://cdn.fsl-buckets.life/Lokah.Chapter.1-Chandra.2025.1080p.HEVC.WEB-DL.Hindi.5.1-Malayalam5.1.ESub.x265-HDHub4u.Ms.mkv?token=e226c68905574b8e521f86aaba74a119_123" }
    ]
  },
  {
    id: "bahubali-epic",
    title: "Bahubali : The Epic",
    image: "/images/bahubali-epic.jpg",
    year: 2025,
    genre: "Epic",
    quality: "CAM-rip",
    description: "The legend of Bahubali rises in a tale of kingdoms and destiny.",
    trailer: "#",
    downloads: [
      { label: "480p", url: "https://pub-58c37aacc5ca4f78ba86b47195edec29.r2.dev/Baahubali.The.Epic.2025.480p.HDTC.Hindi-Line.x264-HDHub4u.Ms.mkv?token=1762451582" },
      { label: "720p", url: "https://pub-58c37aacc5ca4f78ba86b47195edec29.r2.dev/Baahubali.The.Epic.2025.720p.HDTC.Hindi-Line.x264-HDHub4u.Ms.mkv?token=1762453488" },
      { label: "1080p", url: "https://pub-58c37aacc5ca4f78ba86b47195edec29.r2.dev/Baahubali.The.Epic.2025.1080p.HDTC.Hindi-Line.x264-HDHub4u.Ms.mkv?token=1762452232" }
    ]
  },
  {
    id: "idli-kadai",
    title: "Idli Kadai",
    image: "/images/idli-kadai.jpg",
    year: 2025,
    genre: "Comedy/Drama",
    quality: "WEB-DL",
    description: "A foodie’s quest to save his family’s legendary eatery.",
    trailer: "#",
    downloads: [
      { label: "480p", url: "https://fsl.anime4u.co/Idli.Kadai.2025.480p.DS4K.WEB-DL.Hindi-Tamil.ESub.x264-HDHub4u.Ms.mkv" },
      { label: "720p", url: "https://fsl.anime4u.co/Idli.Kadai.2025.720p.HEVC.DS4K.WEB-DL.Hindi-Tamil.ESub.x265-HDHub4u.Ms.mkv?token=1762365897" },
      { label: "1080p", url: "https://fsl.anime4u.co/Idli.Kadai.2025.1080p.DS4K.WEB-DL.Hindi.5.1-Tamil.5.1.ESub.x264-HDHub4u.Ms.mkv?token=1762359459" }
    ]
  },
  
  {
    id: "og",
    title: "They Call Him OG",
    image: "/images/og.jpg",
    year: 2025,
    genre: "Action/Thriller",
    quality: "WEB-DL",
    description: "Action crime drama that blends high-octane action sequences with a gangster narrative.",
    trailer: "#",
    downloads: [
        { label: "480p", url: "https://fsl.anime4u.co/They.Call.Him-OG.2025.480p.DS4K.WEB-DL.Hindi-Telugu.ESub.x264-HDHub4u.Ms.mkv.mkv" },
        { label: "720p", url: "https://fsl.anime4u.co/They.Call.Him-OG.2025.720p.HEVC.DS4K.WEB-DL.Hindi-Telugu.ESub.x265-HDHub4u.Ms.mkv?token=1762383324" },
        { label: "1080p", url: "https://fsl.anime4u.co/They.Call.Him-OG.2025.1080p.HEVC.DS4K.WEB-DL.Hindi.5.1-Telugu.5.1.ESub.x265-HDHub4u.Ms.mkv?token=1762383369" }
    ]
  },
  {
    id: "narasimha",
    title: "Narasimha",
    image: "/images/narasimha.jpg",
    year: 2025,
    genre: "Family/Drama",
    quality: "WEB-DL",
    description: "The film chronicles two incarnations of Lord Vishnu, Varaha and Narasimha.",
    trailer: "#",
    downloads: [
        { label: "480p", url: "https://lol.say-no-to-piracy.store/Mahavatar.Narsimha.2025.720p.HEVC.Hindi.WEB-DL.5.1.ESub.x265-HDHub4u.Ms.mkv?token=1762421957130" },
        { label: "720p", url: "https://fsl.anime4u.co/Mahavatar.Narsimha.2025.1080p.HEVC.Hindi.WEB-DL.5.1.ESub.x265-HDHub4u.Ms.mkv?token=1762419233135" },
        { label: "1080p", url: "https://fsl.anime4u.co/Mahavatar.Narsimha.2025.1080p.Hindi.WEB-DL.5.1.ESub.x264-HDHub4u.Ms.mkv?token=1762422766" }
    ]
  },
  {
    id: "saiyaara",
    title: "Saiyaara",
    image: "/images/saiyaara.jpg",
    year: 2025,
    genre: "Romance",
    quality: "WEB-DL",
    description: "Musical romance navigating love, loss, and memory.",
    trailer: "#",
    downloads: [
        { label: "480p", url: "https://fsl.anime4u.co/Saiyaara.2025.DS4K.720p.HEVC.Hindi.WEB-DL.ESub.x265-HDHub4u.Ms.mkv?token=1762446047"},
        { label: "720p", url: "https://fsl.anime4u.co/Saiyaara.2025.DS4K.720p.10Bit.HEVC.Hindi.WEB-DL.5.1.ESub.x265-HDHub4u.Ms..mkv?token=1762421608" },
        { label: "1080p", url: "https://lol.say-no-to-piracy.store/Saiyaara.2025.DS4K.1080p.10Bit.HEVC.Hindi.WEB-DL.5.1.ESub.x265-HDHub4u.Ms.mkv?token=1762417831" }
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
        <p style="color:#aaa;font-size:13px;">${m.year} • ${m.genre} • ${m.quality}</p>
      </div>
    </div>
  `).join("");

 
  // (Optional) click → go to details
  grid.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;

    // 👇 Current selected genre nikaal lo
    const g =
      sessionStorage.getItem("selectedGenre") ||
      new URLSearchParams(location.search).get("genre") ||
      "all";

    // 👇 Genre ke sath navigate karo
    window.location.href = `detail.html?m=${encodeURIComponent(id)}&genre=${encodeURIComponent(g)}`;
  });
});

}

// ---- Genre utilities ----
function parseGenres(movie) {
  return String(movie.genre || "")
    .toLowerCase()
    .split(/[\/,|]/)
    .map(s => s.trim())
    .filter(Boolean);
}

function setActiveGenreByValue(value) {
  const target = (value || "all").toLowerCase();
  let matched = null;
  document.querySelectorAll(".genre-btn").forEach(b => {
    const ok = (b.dataset.genre || "all").toLowerCase() === target;
    b.classList.toggle("active", ok);
    if (ok) matched = b;
  });
  return matched;
}

// apply + remember + update URL (no push)
function applyGenre(selected) {
  const val = (selected || "all").toLowerCase();

  // UI active state
  setActiveGenreByValue(val);

  // Filter + render
  if (val === "all") {
    renderMovies(MOVIES);
  } else {
    const filtered = MOVIES.filter(m => parseGenres(m).includes(val));
    renderMovies(filtered);
  }

  // Remember
  sessionStorage.setItem("selectedGenre", val);

  // Sync URL without reload
  const url = new URL(location.href);
  if (val === "all") url.searchParams.delete("genre");
  else url.searchParams.set("genre", val);
  history.replaceState({ genre: val }, "", url);
}

// ---- Wire up + restore state ----
document.addEventListener("DOMContentLoaded", () => {
  const bar = document.getElementById("genreBar");
  if (bar) {
    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".genre-btn");
      if (!btn) return;
      e.preventDefault();
      applyGenre(btn.dataset.genre || "all"); // ⚠️ yahi kaafi hai
    });
  }

  // Load initial from URL or session
  const urlGenre = new URLSearchParams(location.search).get("genre");
  const memGenre = sessionStorage.getItem("selectedGenre");
  const initial = (urlGenre || memGenre || "all").toLowerCase();
  applyGenre(initial); // 👈 ye hi first render karega
});

// Back/forward support
window.addEventListener("popstate", (ev) => {
  const g = (ev.state && ev.state.genre) || new URLSearchParams(location.search).get("genre") || "all";
  applyGenre(g);
});








// ----- Trending data (top 10). Use your own order/posters -----
const TRENDING = [
  { id:"kantara",         title:"Kantara",                 image:"/images/kantara.jpg" },
  { id:"og",              title:"They Call Him OG",      image:"/images/og.jpg" },         // change path if needed
  { id:"narasimha",       title:"Narasimha",             image:"/images/narasimha.jpg" },  // change path if needed
  { id:"bad-bollywood",   title:"The Bad Boys of Bollywood", image:"/images/bad-bollywood.jpg"},// change path if needed
  { id:"saiyaara",        title:"Saiyaara",                image:"/images/saiyaara.jpg" },    // change path if needed
  { id:"idli-kadai",      title:"Idli Kadai",            image:"/images/idli-kadai.jpg" },
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

function saveMovies(id, title, year) {
  localStorage.setItem("moviesData", JSON.stringify(MOVIES));
  let mv = {
    id : id,
    title : title,
    year : year
  }
  MOVIES.unshift(mv)
  // console.log("💾 Movies saved to localStorage:", MOVIES);
}