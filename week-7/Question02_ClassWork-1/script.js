"use strict";

// DOM Manipulating

// General

const audioImage = document.querySelector(".audio__image--poster");
const audioContent = document.querySelector(".audio__content");
const audioFavorite = document.querySelector(".audio__controls--like");
const audio = document.querySelector("#audio");
const audioTotalTime = document.querySelector(".audio__progress--total");
const audioCurrentTime = document.querySelector(".audio__progress--current");
const audioProgressIndicator = document.querySelector(
  ".audio__progress--indicator"
);

// Audio Controls

const audioRepeat = document.querySelector(".audio__controls--repeat");
const audioBack = document.querySelector(".audio__controls--back");
const audioPause = document.querySelector(".audio__controls--pause");
const audioPlay = document.querySelector(".audio__controls--play");
const audioForward = document.querySelector(".audio__controls--forward");
const audioList = document.querySelector(".audio__controls--list");

// Audio Volume

const audioVolume = document.querySelector(".audio__controls--volume");
const audioVolumeIndicator = document.querySelector(
  ".audio__volume--indicator"
);
const audioVolumeText = document.querySelector(".audio__volume--text");

// PLAY MUSIC

let playMode = false;
let repeatMode = false;
let volumeMute = false;

const showCurrentTime = () => {
  const min = String(Math.floor(audio.currentTime / 60)).padStart(2, 0);
  const sec = String((audio.currentTime % 60).toFixed(0)).padStart(2, 0);
  audioCurrentTime.textContent = `${min}:${sec}`;
};

const showTotalTime = () => {
  const min = String(Math.floor(audio.duration / 60)).padStart(2, 0);
  const sec = String((audio.duration % 60).toFixed(0)).padStart(2, 0);
  audioTotalTime.textContent = `${min}:${sec}`;
};

audioPlay.addEventListener("click", () => {
  // show pause and hide play icon

  audioPause.classList.toggle("active");
  audioPlay.classList.toggle("active");

  // PLAY MODE ON

  playMode = true;

  // PLAY

  audio.play();

  // show total time

  showTotalTime();

  // show current time

  showCurrentTime();

  audioProgressIndicator.max = Math.floor(audio.duration);

  const progressCurrentTime = () => {
    if (!playMode) {
      clearInterval(progressTimer);
    }

    // start progress bar

    showCurrentTime();

    audioProgressIndicator.value = audio.currentTime.toFixed(0);
  };

  const progressTimer = setInterval(progressCurrentTime, 1000);
});

// PAUSE MUSIC

audioPause.addEventListener("click", () => {
  // show play and hide pause icon

  audioPause.classList.toggle("active");
  audioPlay.classList.toggle("active");

  // PAUSE

  audio.pause();

  // stop progress bar (PLAY MODE OFF)

  playMode = false;
});

audioProgressIndicator.addEventListener("input", () => {
  audio.currentTime = audioProgressIndicator.value;
  showCurrentTime();
});

// REPEAT MUSIC

audioRepeat.addEventListener("click", () => {
  if (!repeatMode) {
    audio.loop = true;
    repeatMode = true;
  } else {
    audio.loop = false;
    repeatMode = false;
  }

  audioRepeat.classList.toggle("active__icon");
});

// VOLUME KEY

audioVolume.addEventListener("click", () => {
  if (!volumeMute) {
    audio.muted = true;
    audioVolume.name = "volume-mute";
    volumeMute = true;
  } else {
    audio.muted = false;
    audioVolume.name = "volume-high";
    volumeMute = false;
  }
});

audioVolumeIndicator.addEventListener("input", () => {
  audio.volume = audioVolumeIndicator.value / 100;
  audioVolumeText.textContent = audioVolumeIndicator.value;
  let bulletPosition = audioVolumeIndicator.value / audioVolumeIndicator.max;
  audioVolumeText.style.left = bulletPosition * 135 + "px";

  audioVolumeText.style.opacity = 1;
});

audioVolumeIndicator.addEventListener("mouseup", () => {
  audioVolumeText.style.opacity = 0;
});

audioFavorite.addEventListener("click", () => {
  // console.log(audio.ended);
  // console.log(audio.children);
  // console.log(audio.playbackRate);
});

window.addEventListener("DOMContentLoaded", () => {
  audioProgressIndicator.value = 0;
  audioVolumeIndicator.value = 100;
  showTotalTime();
});
