const newText = function(buttonText) {
  setTimeout(() => {
    const text = document.getElementById('lucky-text');
    text.classList.remove('text-out');
    text.classList.add('text-in');
    text.value = `${buttonText}`;
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

const buttonHoverStatus = (() => {
  let buttonHover = false;

  const getHoverState = () => buttonHover;
  const setHoverTrue = () => buttonHover = true;
  const setHoverFalse = () => buttonHover = false;

  return { getHoverState, setHoverTrue, setHoverFalse };
})();

const resetButton = function() {
  updateTextInterval.reset();
  randomNum = randomNumCount.setRandomNum();
  newText("I'm Feeling Lucky");
}

const changeText = function() {
  const buttonText = [
    "I'm Feeling Saucy", 
    "I'm Feeling Spicy", 
    "I'm Feeling Hungry",
    "I'm Feeling Sleepy",
    "I'm Feeling Icky",
    "I'm Feeling Bored"
  ];

  oldText();
  newText(buttonText[updateTextInterval.getInterval()]);
  updateTextInterval.increment();

  if (buttonHoverStatus.getHoverState() && updateTextInterval.getInterval() < randomNumCount.getRandomNum()) {
    setTimeout(changeText, 200);
  } else if (!buttonHoverStatus.getHoverState()) {
    resetButton();
  }
}

const feelingRandom = function() {
  buttonHoverStatus.setHoverTrue();
  randomNumCount.setRandomNum();
  changeText();
}

const feelingLucky = function() {
  buttonHoverStatus.setHoverFalse();
  resetButton();
}

const button = document.getElementById('lucky-button');
button.addEventListener('mouseenter', feelingRandom);
button.addEventListener('mouseleave', feelingLucky);