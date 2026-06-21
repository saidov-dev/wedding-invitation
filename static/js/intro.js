const hearts = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.className = 'heart';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = 12 + Math.random() * 16 + 'px';
    heart.style.animationDuration = 4 + Math.random() * 4 + 's';

    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);

// плавный редирект
document.getElementById("enter").onclick = () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = "/invite";
    }, 600);
};
