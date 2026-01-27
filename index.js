const bouquet = document.getElementById('bouquet');
const btn = document.getElementById('btn');
const leftMsg = document.getElementById('leftMsg');
const rightMsg = document.getElementById('rightMsg');

const messagesLeft = [
  'Te pienso 💭',
  'Eres magia ✨',
  'Mi calma 🤍',
  'Siempre tú 💖'
];

const messagesRight = [
  'Te quiero 🌹',
  'Mi razón 😍',
  'Mi lugar 💕',
  'Solo tú 💘'
];

let count = 0;

btn.addEventListener('click', () => {
  count++;

  bouquet.style.transform =
    'rotate(' + (count % 2 === 0 ? 5 : -5) + 'deg) scale(1.07)';

  setTimeout(() => {
    bouquet.style.transform = 'rotate(0) scale(1)';
  }, 300);

  leftMsg.textContent =
    messagesLeft[count % messagesLeft.length];
  rightMsg.textContent =
    messagesRight[count % messagesRight.length];

  leftMsg.classList.add('show');
  rightMsg.classList.add('show');

  setTimeout(() => {
    leftMsg.classList.remove('show');
    rightMsg.classList.remove('show');
  }, 1600);
});
