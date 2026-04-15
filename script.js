// Ensure DOM is loaded
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const title = document.querySelector(".title");

let noCount = 0;

// Messages for No button
const messages = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Renaz please...",
  "Don't do this 😭",
  "Aku akan nangis...",
  "Last..."
];

function generateMessage(index) {
  return messages[Math.min(index, messages.length - 1)];
}

// YES BUTTON
yesButton.addEventListener("click", function () {
  catImg.src = "img/cat-yes.jpg"; // make sure this exists
  title.textContent = "YAY!!! ❤️";
  document.querySelector(".buttons").classList.add("hidden");
});

// NO BUTTON
noButton.addEventListener("click", function () {
  noCount++;

  // Change image (fallback if missing images)
  const imageIndex = Math.min(noCount, 5);
  catImg.src = `img/cat-${imageIndex}.jpg`;

  // Update button text
  noButton.textContent = generateMessage(noCount);

  // Make YES button bigger
  const scale = 1 + noCount * 0.2;
  yesButton.style.transform = `scale(${scale})`;
});

// DEBUG (you can remove later)
console.log("Script loaded successfully");
