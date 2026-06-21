const weddingDate = new Date("2026-08-08T00:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    const el = document.getElementById("countdown-value");
    if (!el) return;

    if (diff <= 0) {
        el.textContent = "Сегодня 💍";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    el.textContent = `${days} дн · ${hours} ч · ${minutes} мин`;
}

updateCountdown();
setInterval(updateCountdown, 60000);

