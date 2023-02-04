const audio = document.querySelector("audio");
const container = document.querySelector(".container");
const bntPlay = document.querySelector(".play");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const images = document.querySelector(".cover");
const vol = document.querySelector("#volume");
const songs = [
  "Ending - Isak Danielson",
  "Heather - Conan Gray",
  "Osmonlarda - Xamdam Sobirov",
  "U okna - HammAli & Navai",
];
let SongIndex = 0;

btnNext.addEventListener("click", () => {
  SongIndex++;
  if (SongIndex === songs.length) {
    SongIndex = 0;
  }

  playAudio();
});
btnPrev.addEventListener("click", () => {
  SongIndex--;
  if (SongIndex < 0) {
    SongIndex = songs.length - 1;
  }

  playAudio();
});
vol.addEventListener("input", () => {
  audio.volume = vol.value / 10;
});
bntPlay.addEventListener("click", () => {
  if (bntPlay.children[0].classList.contains("fa-play")) {
    audio.play();
    bntPlay.innerHTML = `
        <i class="fa-solid fa-pause"></i>
        `;
    container.classList.add("play");
  } else {
    audio.pause();
    bntPlay.innerHTML = `
    <i class="fas fa-play"></i>
        `;
    container.classList.remove("play");
  }
});
function playAudio() {
  audio.src = `musics/${songs[SongIndex]}.mp3`;
  images.src = `./album/${songs[SongIndex]}.jpg`;
  if (!bntPlay.children[0].classList.contains("fa-play")) {
    audio.play();
  }
}
