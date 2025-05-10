const card = document.getElementById("card");
const confettiWrapper = document.getElementById("confetti-wrapper");
const colors = ["#e91e63", "#f06292", "#f48fb1", "#ad1457"];

function createHearts() {
  for (let i = 0; i < 70; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    heart.style.animationDuration = Math.random() * 5 + 2 + "s";
    heart.style.width = heart.style.height = Math.random() * 12 + 8 + "px";
    confettiWrapper.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }
}

card.addEventListener("click", () => {
  card.classList.toggle("open");
  createHearts();
});
