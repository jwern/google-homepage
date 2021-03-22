const getLuckyText = function() {
  const text = document.getElementById('lucky-text');

  return text;
}

const newText = function(inputText) {
  setTimeout(() => {
    const text = getLuckyText();
    text.classList.remove('text-out');
    text.classList.add('text-in');
    text.textContent = `I'm Feeling ${inputText.text}`;
    text.href = `${inputText.link}`;
  }, 100);
}

const oldText = function() {
  const text = getLuckyText();
  text.classList.remove('text-in');
  text.classList.add('text-out');
}

const updateTextInterval = (() => {
  let interval = 0;
  const getInterval = () => interval;
  const increment = () => interval++;
  const reset = () => interval = 0;
  return { getInterval, increment, reset };
})();

const buttonText = (() => {
  const text = [
    { text: "Relaxed", link: "https://tane.us/ac/" },
    { text: "Nostalgic", link: "https://archive.org/web/" },
    { text: "Cute", link: "https://www.reddit.com/r/aww/" },
    { text: "Gamey", link: "https://pixelkin.org/game-picker/" },
    { text: "Scientific", link: "https://naturalhistory.si.edu/visit/virtual-tour" },
    { text: "Funny", link: "https://www.exocomics.com/" },
    { text: "Curious", link: "https://www.gutenberg.org/" },
  ];

  let randomizeText = () => {
    // Fishers-Yates shuffle algorithm
    for (let i = text.length - 1; i > 0; i--) {
      let rando = Math.floor(Math.random() * (i + 1));
      [text[i], text[rando]] = [text[rando], text[i]];
    }
  }
  const getText = () => text;

  return { getText, randomizeText };
})();

const randomNumCount = (() => {
  let randomNum;

  const setRandomNum = () => {
    const maxNum = buttonText.getText().length - 1;
    const minNum = 2;
    randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  }

  const getRandomNum = () => randomNum;

  return { setRandomNum, getRandomNum };
})();

const setTextDirection = function() {
  const randomNum = randomNumCount.getRandomNum();
  const text = getLuckyText();

  if (randomNum % 2 === 0) {
    text.style.animationDirection = "normal";
  } else {
    text.style.animationDirection = "reverse";
  }
}

// Global variable
let hoverTimeout;

const resetButton = function() {
  updateTextInterval.reset();
  randomNum = randomNumCount.setRandomNum();
  newText({text: "Lucky", link: "https://google.com"});
}

const changeText = function() {
  oldText();
  newText(buttonText.getText()[updateTextInterval.getInterval()]);
  updateTextInterval.increment();

  if (updateTextInterval.getInterval() < randomNumCount.getRandomNum()) {
    hoverTimeout = setTimeout(changeText, 200);
  }
}

const feelingRandom = function() {
  randomNumCount.setRandomNum();
  setTextDirection();
  buttonText.randomizeText();
  changeText();
}

const feelingLucky = function() {
  clearTimeout(hoverTimeout);
  resetButton();
}

const button = document.getElementById('lucky-button');
button.addEventListener('mouseenter', feelingRandom);
button.addEventListener('mouseleave', feelingLucky);