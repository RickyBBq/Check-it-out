document.getElementById("valentineButton").addEventListener("click", function() {
    const flowerContainer = document.getElementById("flower-container");
    const message = document.getElementById("valentineMessage");
    const credit = document.getElementById("credit");

    // Remove old flowers before adding new ones
    flowerContainer.innerHTML = '';

    // Create flower animation (Md Usman Ansari's style)
    const flower = document.createElement("div");
    flower.classList.add("flower-animation");

    flowerContainer.appendChild(flower);

    // Show message and credit after animation
    setTimeout(() => {
        message.classList.remove("hidden");
        message.style.opacity = "1";
        credit.classList.remove("hidden");
        credit.style.opacity = "1";
    }, 3000);
});
