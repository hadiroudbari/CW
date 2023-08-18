"use strict";

// DOM Manipulating

// General

const audioImage = document.querySelector(".audio__image--poster");
const audioContentName = document.querySelector(".audio__content--name");
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

// AUDIO LIST

const audioList = document.querySelector(".audio__controls--list");
const audioListBox = document.querySelector(".audio__list--box");

// Audio Volume

const audioVolume = document.querySelector(".audio__controls--volume");
const audioVolumeIndicator = document.querySelector(
  ".audio__volume--indicator"
);
const audioVolumeText = document.querySelector(".audio__volume--text");

// Audio Speed

const audioSpeedIcon = document.querySelector(".audio__speed--icon");
const audioSpeedIndicator = document.querySelector(".audio__speed--indicator");
const audioSpeedText = document.querySelector(".audio__speed--text");

// PLAY MUSIC

let playMode = false;
let repeatMode = false;
let volumeMute = false;
let favoriteMusics = [];
let musicNumber = 0;
let endMusic = false;

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

const loadData = () => {
  showTotalTime();
  showCurrentTime();
  audioProgressIndicator.max = Math.floor(audio.duration);
  checkFavorite();
};

const playMusic = () => {
  // PLAY MODE ON
  const sourceArray = Array.from(audio.children);

  sourceArray.forEach((item) => {
    item.attributes["data-play"].value = "false";
  });

  sourceArray[musicNumber].attributes["data-play"].value = "true";

  playMode = true;

  // PLAY

  audio.play();

  const progressCurrentTime = () => {
    if (!playMode) {
      clearInterval(progressTimer);
    }

    // start progress bar

    showCurrentTime();

    audioProgressIndicator.value = audio.currentTime.toFixed(0);

    if (audio.ended) {
      audioPause.classList.remove("active");
      audioPlay.classList.add("active");
      nextMusic();
    }

    if (endMusic) {
      clearInterval(progressTimer);
    }
  };

  const progressTimer = setInterval(progressCurrentTime, 1000);
};

audioPlay.addEventListener("click", () => {
  // show pause and hide play icon

  audioPause.classList.toggle("active");
  audioPlay.classList.toggle("active");

  playMusic();
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
  audioVolumeText.style.left = audioVolumeIndicator.value * 1.35 + "px";

  audioVolumeText.style.opacity = 1;
});

audioVolumeIndicator.addEventListener("mouseup", () => {
  audioVolumeText.style.opacity = 0;
});

// SPEED KEY

audioSpeedIcon.addEventListener("click", () => {
  audio.playbackRate = 1;
  audioSpeedIndicator.value = 100;
});

audioSpeedIndicator.addEventListener("input", () => {
  audio.playbackRate = audioSpeedIndicator.value / 100;
  audioSpeedText.textContent = (audioSpeedIndicator.value / 100).toFixed(1);
  audioSpeedText.style.left = (audioSpeedIndicator.value - 50) * 0.9 + "px";

  audioSpeedText.style.opacity = 1;
});

audioSpeedIndicator.addEventListener("mouseup", () => {
  audioSpeedText.style.opacity = 0;
});

// LIKE KEY

const checkFavorite = () => {
  const sourceArray = Array.from(audio.children);

  const currentAudio = sourceArray.find((source) => {
    return source.attributes["data-play"].value === "true";
  });

  if (currentAudio.attributes["data-favorite"].value === "true") {
    audioFavorite.style.color = "red";
    audioFavorite.name = "heart";
  } else {
    audioFavorite.style.color = "white";
    audioFavorite.name = "heart-outline";
  }
};

audioFavorite.addEventListener("click", () => {
  const sourceArray = Array.from(audio.children);

  const currentAudio = sourceArray.find((source) => {
    return source.attributes["data-play"].value === "true";
  });

  if (currentAudio.attributes["data-favorite"].value === "false") {
    currentAudio.attributes["data-favorite"].value = "true";
    favoriteMusics.push(currentAudio);
  } else {
    currentAudio.attributes["data-favorite"].value = "false";
    if (favoriteMusics.indexOf(currentAudio) > -1) {
      favoriteMusics.splice(favoriteMusics.indexOf(currentAudio), 1);
    }
  }

  checkFavorite();
});

// NEXT

function nextMusic() {
  audioProgressIndicator.value = 0;
  const sourceArray = Array.from(audio.children);

  if (musicNumber === sourceArray.length - 1) {
    endMusic = true;
    return;
  } else {
    endMusic = false;
  }

  musicNumber++;

  [sourceArray[0].src, sourceArray[musicNumber].src] = [
    sourceArray[musicNumber].src,
    sourceArray[0].src,
  ];

  audioImage.src = sourceArray[musicNumber].attributes["data-img"].value;
  audioContentName.textContent =
    sourceArray[musicNumber].attributes["data-song"].value;

  audio.load();

  audioPause.classList.add("active");
  audioPlay.classList.remove("active");

  audio.addEventListener("loadedmetadata", loadData);

  playMusic();
}

audioForward.addEventListener("click", nextMusic);

// PREVIOUS

const previousMusic = () => {
  audioProgressIndicator.value = 0;
  const sourceArray = Array.from(audio.children);

  [sourceArray[0].src, sourceArray[musicNumber].src] = [
    sourceArray[musicNumber].src,
    sourceArray[0].src,
  ];

  if (musicNumber > 0) {
    musicNumber--;
  }

  audioImage.src = sourceArray[musicNumber].attributes["data-img"].value;
  audioContentName.textContent =
    sourceArray[musicNumber].attributes["data-song"].value;

  audio.load();

  audioPause.classList.add("active");
  audioPlay.classList.remove("active");

  audio.addEventListener("loadedmetadata", loadData);

  playMusic();
};

audioBack.addEventListener("click", previousMusic);

// LIST

const createListItems = () => {
  audioListBox.innerHTML = "";

  const sourceArray = Array.from(audio.children);

  sourceArray.forEach((item) => {
    const html = `
              <div class="audio__list--item" id="${item.attributes["data-song"].value}">
                <img src="${item.attributes["data-img"].value}" alt="${item.attributes["data-song"].value}" />
                <div class="audio__list--content">
                  <p>${item.attributes["data-song"].value}</p>
                  <p>${item.attributes["data-singer"].value} | Best Music</p>
                </div>
              </div>
    `;
    audioListBox.innerHTML += html;
  });
};

audioList.addEventListener("click", () => {
  audioListBox.classList.toggle("show__list");
  audioList.classList.toggle("active__icon");
});

const selectToPlayFromAudioList = () => {
  const listItems = document.querySelectorAll(".audio__list--item");

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      audioProgressIndicator.value = 0;
      const sourceArray = Array.from(audio.children);

      const currentSrc = sourceArray.find((source, index) => {
        if (source.attributes["data-song"].value === item.id) {
          musicNumber = index;
          return source.attributes["data-song"].value === item.id;
        }
      });

      console.log(currentSrc);

      if (musicNumber === 0) {
        sourceArray[0].src =
          "https://dl3.behmusic.com/music/1399/11/Irani/Shadmehr%20Aghili%20-%20Avaz%20Nemishi.mp3";
      } else if (musicNumber === 1) {
        sourceArray[0].src =
          "http://www.s4.topseda.ir/99/05/20/Shadmehr%20Aghili%20-%20Ghazi.mp3";
      } else if (musicNumber === 2) {
        sourceArray[0].src =
          "https://dl.naslmusic.ir/music/1401/01/Shadmehr%20Aghili%20-%20Bi%20Ehsas%20(320-Naslemusic).mp3";
      }

      audioImage.src = sourceArray[musicNumber].attributes["data-img"].value;
      audioContentName.textContent =
        sourceArray[musicNumber].attributes["data-song"].value;

      audio.load();

      audioPause.classList.add("active");
      audioPlay.classList.remove("active");

      audio.addEventListener("loadedmetadata", loadData);

      playMusic();
      return;
    });
  });
};

// INIT FUNCTION

const init = () => {
  audioProgressIndicator.value = 0;
  audioVolumeIndicator.value = 100;
  audioSpeedIndicator.value = 100;
  showTotalTime();
  audio.addEventListener("loadedmetadata", loadData);
  createListItems();
  selectToPlayFromAudioList();
};

window.addEventListener("DOMContentLoaded", init);
