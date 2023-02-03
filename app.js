const container = document.querySelector(".container");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const btnPlay = document.querySelector(".play");
const audio = document.querySelector("audio");
const img = document.querySelector("img");
const title = document.querySelector(".title");
const vol = document.querySelector("#volume");
const songs = [
  "Ending - Isak Danielson",
  "Heather - Conan Gray",
  "Osmonlarda - Xamdam Sobirov",
  "U okna - HammAli & Navai",
];
let songsItem = 0;
btnPlay.addEventListener("click", () => {
  if (btnPlay.children[0].classList.contains("fa-play")) {
    audio.play();
    btnPlay.innerHTML = `
        <i class="fa-solid fa-pause"></i>
        `;
    container.classList.add("play");
  } else {
    audio.pause();
    btnPlay.innerHTML = `
    <i class="fas fa-play"></i>
        `;
    container.classList.remove("play");
  }
});

btnNext.addEventListener("click", () => {
  audio.src = `./musics/${songs[songsItem]}`.mp3;
  img.src =` ./album/${songs[songsItem]}`.jpg;
  title.textContent = ${songs[songsItem]};
  songsItem++;
  if (songsItem == songs.length) {
    songsItem = 0;
  }
});
btnPrev.addEventListener("click", () => {
  audio.src = `./musics/${songs[songsItem]}`.mp3;
  console.log("prew");
  img.src = `./album/${songs[songsItem]}`.jpg;
  title.textContent =` ${songs[songsItem]}`;
  songsItem--;
  if (songsItem <= 0) {
    songsItem = songs.length - 1;
  }
});
vol.addEventListener("input", (e) => {
  audio.volume = vol.value / 10;
});