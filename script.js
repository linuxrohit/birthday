
document.addEventListener("DOMContentLoaded", function () {

  // 🎵 AUTOMATIC BACKGROUND MUSIC
  const music = document.getElementById("bgMusic");

  if (music) {
    music.volume = 0.6;

    setTimeout(function () {
      music.play().catch(function (error) {
        console.log("Browser blocked autoplay:", error);
      });
    }, 1000);
  }

  // 💗 AUTOMATIC PHOTO FLIP
  const photoCard = document.getElementById("photoCard");

  if (photoCard) {
    setInterval(function () {
      photoCard.classList.toggle("flipped");
    }, 5000);
  }

  // 💕 GIRLFRIEND PROPOSAL
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const response = document.getElementById("response");
  const proposalButtons = document.getElementById("proposalButtons");

  let noClicks = 0;

  if (yesBtn && noBtn && response && proposalButtons) {

    // ❤️ YES BUTTON
    yesBtn.addEventListener("click", function () {
      response.textContent =
        "YAYYYY, Jannu! ❤️ You just made me the happiest person ever! Love you! 💗";

      noBtn.style.display = "none";
      yesBtn.textContent = "My Girlfriend ❤️";
    });

    // 🙈 NO BUTTON
    noBtn.addEventListener("click", function () {
      noClicks++;

      if (noClicks >= 3) {
        noBtn.style.display = "none";
        response.textContent =
          "Hehe, the No button ran away! 🙈❤️ ";
        return;
      }

      response.textContent = noClicks === 1
        ? "Oops! You missed me! 😂💗"
        : "You caught me again?! Try one more time! 🙈❤️";

      // Make the No button jump to a new position
      noBtn.style.position = "absolute";

      const maxX = Math.max(
        0,
        proposalButtons.clientWidth - noBtn.offsetWidth
      );

      const maxY = Math.max(
        0,
        proposalButtons.clientHeight - noBtn.offsetHeight
      );

      noBtn.style.left = Math.random() * maxX + "px";
      noBtn.style.top = Math.random() * maxY + "px";
    });
  }

});
