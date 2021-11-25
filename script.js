function playSound(key, type) {
  const charCode = getCharCode(key, type);
  const audio = document.querySelector(`audio[data-key="${charCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  const currentkey = document.querySelector(`.key[data-key="${charCode}"]`)

  currentkey.classList.add("playing")
}


function getCharCode(key, type) {
  if (type == "click") {
    return clickAudio(key)
  }
  else if (type == "press") {
    return pressAudio(key)
  }
}

function pressAudio(key) {
  const keyCode = key.keyCode;
  return keyCode;
}

function clickAudio(key) {
  const keyCode = key.path[1].getAttribute("data-key");
  return keyCode;
}

function removeTransition(e) {
  if (e.propertyName !== 'background-color') return;

  this.classList.remove("playing")
}


window.addEventListener("keydown", function (key) {
  const type = "press";
  playSound(key, type);
});

window.addEventListener("click", function (key) {
  const type = "click";
  playSound(key, type);
});


// ANIMATION (REMOVE BACKGROUND)
const currentKey = document.querySelectorAll(".key");


function removeTransition(e) {
  if (e.propertyName !== 'background-color') return;

  this.classList.remove("playing")
}


currentKey.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
})



