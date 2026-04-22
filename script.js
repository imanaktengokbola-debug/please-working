// Ensure DOM is loaded
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const title = document.querySelector(".title");

const music = document.getElementById("bg-music");

let noCount = 0;

const messages = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Renaz please...",
  "Don't do this",
  "Aku akan nangis...",
  "Last..."
];

function generateMessage(index) {
  return messages[Math.min(index, messages.length - 1)];
}

// Start music when user clicks anywhere
document.addEventListener("click", () => {
  music.play();
}, { once: true });

// YES BUTTON
yesButton.addEventListener("click", function () {
  catImg.src = "img/cat-yes.jpg";
  title.textContent = "YAY ❤️";
  document.querySelector(".buttons").classList.add("hidden");
});

// NO BUTTON
noButton.addEventListener("click", function () {
  noCount++;

  const imageIndex = Math.min(noCount, 5);
  catImg.src = `img/cat-${imageIndex}.jpg`;

  noButton.textContent = generateMessage(noCount);

  const scale = 1 + noCount * 0.2;
  yesButton.style.transform = `scale(${scale})`;
});
