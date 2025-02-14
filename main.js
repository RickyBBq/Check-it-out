// Floating glowing hearts animation
function createHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = (3 + Math.random() * 2) + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
setInterval(createHearts, 1000);

// Function to start everything when clicking the button
function startValentine() {
    bloomFlowers();
    playMusic();
}

// Function to make flowers appear
function bloomFlowers() {
    let flowerContainer = document.getElementById("flowerContainer");
    flowerContainer.innerHTML = ""; // Clears previous flowers

    for (let i = 0; i < 7; i++) {
        let flower = document.createElement("div");
        flower.classList.add("flower");

        // Random positioning within the screen
        let randomX = Math.random() * (window.innerWidth - 50);
        let randomY = 100 + Math.random() * (window.innerHeight - 200);
        
        flower.style.left = `${randomX}px`;
        flower.style.top = `${randomY}px`;

        flowerContainer.appendChild(flower);

        setTimeout(() => {
            flower.style.opacity = "1";
        }, 100);
    }

    // Show the romantic message after flowers bloom
    setTimeout(() => {
        document.getElementById("hiddenMessage").style.display = "block";
    }, 2000);
}

// Function to play the Valentine song
function playMusic() {
    let song = document.getElementById("valentineSong");
    song.play();
}
