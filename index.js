const newText = function(buttonText) {
  setTimeout(() => {
    const text = document.getElementById('lucky-text');
    text.classList.remove('text-out');
    text.classList.add('text-in');
    text.value = `${buttonText}`;
  }, 200);
}

const oldText = function() {
  const text = document.getElementById('lucky-text');
  text.classList.remove('text-in');
  text.classList.add('text-out');
}

let interval = 0;

const resetButton = function() {
  interval = 0;
  const text = document.getElementById('lucky-text');
  text.value = "I'm Feeling Lucky";
}

const changeText = function() {
  const buttonText = ["First text", "Second text", "Third text"];
  
  oldText();
  newText(buttonText[interval]);

  interval++
  console.log(interval);
  if (interval < buttonText.length) {
    setTimeout(changeText, 400);
  } else {
    setTimeout(resetButton, 1000);
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