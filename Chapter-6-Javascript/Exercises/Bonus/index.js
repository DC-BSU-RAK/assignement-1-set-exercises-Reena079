// Select DOM elements
const rgbDisplay = document.getElementById('rgb-display');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const livesDisplay = document.getElementById('lives');
const scoreDisplay = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

// Game variables
let correctColor = '';
let lives = 3;
let score = 0;

// Start a new round
function startRound() {
  // Clear previous content
  feedback.textContent = '';

  // 
  correctColor = getRandomRGB();
  rgbDisplay.textContent = correctColor.toUpperCase();

  // Generate options
  const options = generateOptions(correctColor);

  // Clear all the contents and add new ones
  optionsContainer.innerHTML = '';
  options.forEach(color => {
    const div = document.createElement('div');
    div.className = 'color-option';
    div.style.backgroundColor = color;
    div.addEventListener('click', () => handleGuess(color));
    optionsContainer.appendChild(div);
  });
}

// Generate a random RGB color option
function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Generate a list of RGB color options with one of them being correct
function generateOptions(correct) {
  const options = [correct];
  while (options.length < 3) {
    const newColor = getRandomRGB();
    if (!options.includes(newColor)) options.push(newColor);
  }
  return shuffle(options);
}

// Shuffle a list
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Handle the user's guess
function handleGuess(selectedColor) {
  if (selectedColor === correctColor) {
    feedback.textContent = 'Correct!';
    score++;
    scoreDisplay.textContent = score;
    setTimeout(startRound, 1000);
  } else {
    feedback.textContent = 'Wrong!';
    lives--;
    livesDisplay.textContent = lives;
    if (lives <= 0) {
      endGame();
    }
  }
}

// End the game
function endGame() {
  feedback.textContent = `Game Over! Final Score: ${score}`;
  optionsContainer.innerHTML = '';
  restartBtn.classList.remove('hidden');
}

// Restart the game
restartBtn.addEventListener('click', () => {
  lives = 3;
  score = 0;
  livesDisplay.textContent = lives;
  scoreDisplay.textContent = score;
  restartBtn.classList.add('hidden');
  startRound();
});

// Start the game on load
startRound();
