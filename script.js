const endDate = new Date("2024-12-31T23:59:59").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML =
            `${days}j ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("timer").innerHTML = "Temps écoulé !";
    }
}

setInterval(updateTimer, 1000);

updateTimer();
