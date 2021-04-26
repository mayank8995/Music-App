const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
let progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

// Song titles
const songs = ['hey', 'summer', 'ukulele'];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

function loader() {

}

function nextSong() {
    songIndex++;
    if (songIndex < songs.length) {
        loadSong(songs[songIndex]);
        playSong();
    } else {
        songIndex = 0;
        loadSong(songs[songIndex]);
        playSong();
    }
}

function previousSong() {
    songIndex--;
    if (songIndex >= 0) {
        loadSong(songs[songIndex]);
        playSong();
    } else {
        songIndex = 0;
        loadSong(songs[songIndex]);
        playSong();
    }
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', previousSong);
nextBtn.addEventListener('click', nextSong);

audio.ontimeupdate = function () {
    if (progress.style.width.substring(0, progress.style.width.length - 2) > 208) {
        progress.style.width = `0px`;
        nextSong();
    }
    let currentTime = audio.currentTime;
    console.log("currentTime>>", currentTime);
    let progressBar = Math.floor(currentTime);
    console.log("progressBar>>>", progressBar);
    progress.style.width = `${progressBar}px`;
}
console.log("progress length>>", progress.offsetWidth);