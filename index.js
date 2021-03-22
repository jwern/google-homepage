/* Feeling Lucky Button: */

const getLuckyText = function() {
  const text = document.getElementById('lucky-text');

  return text;
}

// Scroll in new text and URL from randomized list
const newText = function(inputText) {
  // Timeout is set to the same length as the slideout animation duration
  setTimeout(() => {
    const text = getLuckyText();
    text.classList.remove('text-out');
    text.classList.add('text-in');
    text.textContent = `I'm Feeling ${inputText.text}`;
    text.href = `${inputText.link}`;
  }, 100);
}

// Scroll out current / previous text before scrolling in new text
const oldText = function() {
  const text = getLuckyText();
  text.classList.remove('text-in');
  text.classList.add('text-out');
}

// Interval object to track where we are in the text rotation
const updateTextInterval = (() => {
  let interval = 0;
  const getInterval = () => interval;
  const increment = () => interval++;
  const reset = () => interval = 0;
  return { getInterval, increment, reset };
})();

// Customized list of button text & URLs
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

  // Randomizes buttonText array
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

// Random number generator used to determine how many links we show on rotation
// as well as the direction the text scrolls
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

// Uses random number generator randomNumCount to determine text scroll direction
const setTextDirection = function() {
  const randomNum = randomNumCount.getRandomNum();
  const text = getLuckyText();

  if (randomNum % 2 === 0) {
    text.style.animationDirection = "normal";
  } else {
    text.style.animationDirection = "reverse";
  }
}

// Global variable set in changeText and cleared in resetButton
let hoverTimeout;

// On mouseleave, reset the button to its original text & URL
// also reset textInterval in preparation for next hover
const resetButton = function() {
  updateTextInterval.reset();
  // randomNum = randomNumCount.setRandomNum();
  newText({text: "Lucky", link: "https://google.com"});
}

// Scrolls from old text to new text for length of randomized interval
const changeText = function() {
  oldText();
  newText(buttonText.getText()[updateTextInterval.getInterval()]);
  updateTextInterval.increment();

  // hoverTimeout is set to slideout + slidein duration total 
  // This allows enough time for text to change between updates
  // Timeout is a named global variable so we can clear it in resetButton upon mouseleave
  if (updateTextInterval.getInterval() < randomNumCount.getRandomNum()) {
    hoverTimeout = setTimeout(changeText, 200);
  }
}

// On lucky button hover, set our randomized elements and then
// call changeText() to scroll through these elements
const feelingRandom = function() {
  randomNumCount.setRandomNum();
  setTextDirection();
  buttonText.randomizeText();
  changeText();
}

// On leaving lucky button, stop scrolling text 
// and reset to original text/URL
const feelingLucky = function() {
  clearTimeout(hoverTimeout);
  resetButton();
}

const button = document.getElementById('lucky-button');
button.addEventListener('mouseenter', feelingRandom);
button.addEventListener('mouseleave', feelingLucky);


/* Search Input */

const searchForInput = function(input) {
  const query = input.replace(/\s/g, "+");
  window.open(`https://www.google.com/search?q=${query}`, "_self");
}

const getSearchInput = function(submitEvent) {
  submitEvent.preventDefault();
  const input = Object.fromEntries(new FormData(submitEvent.target).entries()).searchInput;
  submitEvent.target.reset();
  searchForInput(input);
}

const searchForm = document.getElementById('search');
searchForm.addEventListener('submit', e => getSearchInput(e));