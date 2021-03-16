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

const setRandomNum = function() {
  const maxNum = 5;
  const minNum = 2;
  let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

  return randomNum;
}

let interval = 0;
let randomNum = setRandomNum();

const resetButton = function() {
  interval = 0;
  randomNum = setRandomNum();
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
  newText(buttonText[interval]);

  interval++
  console.log(randomNum);
  if (interval < randomNum) {
    setTimeout(changeText, 200);
  }

  // buttonText.forEach(line => {
  //   setInterval(() => {
  //     oldText();
  //     newText(line);
  //   }, 500);
  // })
  
  // buttonText.forEach(line => {
  //   setTimeout(() => oldText(this), 200);
  //   setTimeout(() => newText(line), 300);
  // });
}

const button = document.getElementById('lucky-button');
button.addEventListener('mouseenter', changeText);
button.addEventListener('mouseleave', resetButton);