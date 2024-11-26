function setClock() {
  const now = new Date();

  // Get the current hours, minutes, and seconds
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate the rotation for each hand
  const secondsRotation = (seconds / 60) * 360;
  const minutesRotation = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hoursRotation = (hours / 12) * 360 + (minutes / 60) * 30;

  // Apply the rotations
  document.querySelector('.second').style.transform = `rotate(${secondsRotation}deg)`;
  document.querySelector('.minute').style.transform = `rotate(${minutesRotation}deg)`;
  document.querySelector('.hour').style.transform = `rotate(${hoursRotation}deg)`;
}

// Update the clock every second
setInterval(setClock, 1000);

// Initialize the clock immediately
setClock();
