document.addEventListener("DOMContentLoaded", function() {

    // ===== CORAÇÕES =====
    const heartsContainer = document.querySelector(".hearts");

    if (heartsContainer) {
        function createHeart() {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "💖";

            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
            heart.style.fontSize = (Math.random() * 20 + 10) + "px";

            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6000);
        }

        setInterval(createHeart, 800);
    }

    // ===== PLAYER =====
    const music = document.getElementById("bgMusic");
    const playBtn = document.getElementById("playMusic");
    const pauseBtn = document.getElementById("pauseMusic");
    const restartBtn = document.getElementById("restartMusic");
    const volumeControl = document.getElementById("volumeControl");

    if (music) {
        music.volume = 0.5;
    }

    if (playBtn) {
        playBtn.addEventListener("click", () => music.play());
    }

    if (pauseBtn) {
        pauseBtn.addEventListener("click", () => music.pause());
    }

    if (restartBtn) {
        restartBtn.addEventListener("click", () => {
            music.currentTime = 0;
            music.play();
        });
    }

    if (volumeControl) {
        volumeControl.addEventListener("input", () => {
            music.volume = volumeControl.value;
        });
    }

});