// List of jokes
const jokes = [
  "Why don’t skeletons fight? They don’t have the guts.",
  "I’m not lazy, I’m on energy-saving mode.",
  "Why was the computer cold? It left its Windows open.",
  "I’m smiling… but only on the outside. 😜"
];

// Elements
const smiley = document.getElementById('smiley');
const jokeBox = document.getElementById('joke-box');

// State variables
let isDragging = false;
let offset = { x: 0, y: 0 };

// Random joke function
const tellJoke = () => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  jokeBox.innerText = randomJoke;

  // Change the smiley expression temporarily
  smiley.innerText = "😜";
  setTimeout(() => smiley.innerText = "😊", 2000);
};

// Dragging functionality
smiley.addEventListener('mousedown', (e) => {
  isDragging = true;
  offset.x = e.clientX - smiley.getBoundingClientRect().left;
  offset.y = e.clientY - smiley.getBoundingClientRect().top;
  smiley.style.cursor = "grabbing";
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const x = e.clientX - offset.x;
    const y = e.clientY - offset.y;
    window.moveTo(x, y); // Electron’s built-in `moveTo` for dragging
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  smiley.style.cursor = "grab";
});

// Smiley interactions
smiley.addEventListener('click', tellJoke);

// Idle behavior: Gets bored if ignored
let idleTimer = setTimeout(() => {
  smiley.innerText = "😒";
  jokeBox.innerText = "Why am I even here?";
}, 5000);

document.addEventListener('mousemove', () => {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    smiley.innerText = "😒";
    jokeBox.innerText = "Why am I even here?";
  }, 5000);
});
