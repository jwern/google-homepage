const newText = function(inputText) {
  console.log(inputText);
  setTimeout(() => {
    const text = document.getElementById('lucky-text');
    text.classList.remove('text-out');
    text.classList.add('text-in');
    text.value = `${inputText}`;
  }, 100);
}

const oldText = function() {
  const text = document.getElementById('lucky-text');
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

const randomNumCount = (() => {
  let randomNum;

  const setRandomNum = () => {
    const maxNum = 5;
    const minNum = 2;
    randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  }

  const getRandomNum = () => randomNum;

  return { setRandomNum, getRandomNum };
})();

// const buttonHoverStatus = (() => {
//   let buttonHover = false;

//   const getHoverState = () => buttonHover;
//   const setHoverTrue = () => buttonHover = true;
//   const setHoverFalse = () => buttonHover = false;

//   return { getHoverState, setHoverTrue, setHoverFalse };
// })();

const buttonText = (() => {
  const text = [
    "I'm Feeling Saucy", 
    "I'm Feeling Spicy", 
    "I'm Feeling Hungry",
    "I'm Feeling Sleepy",
    "I'm Feeling Icky",
    "I'm Feeling Bored"
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

let hoverTimeout;

const resetButton = function() {
  updateTextInterval.reset();
  randomNum = randomNumCount.setRandomNum();
  newText("I'm Feeling Lucky");
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