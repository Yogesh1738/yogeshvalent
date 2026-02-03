const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");
const noMessage = document.getElementById("noMessage");
const heartsContainer = document.querySelector(".hearts");

let escapeCount = 0;
let messageIndex = 0;
let messageTimeout;

/* Messages shown on No hover */
const noMessages = [
    "😳 Khuraak maaang rhi hai??",
    "😅 hai tere bass ki",
    "💔 chal na bawarchodi si",
    "🥺 main thappad maardunga abb",
    "💘 mat krr yrr ek hi dil hai kitni baar todegi",
    "😌 tu hattja hattja main tere ko bta rha"
];

/* 😈 No button hover */
noBtn.addEventListener("mouseover", () => {
    escapeCount++;

    // Move button randomly
    const x = Math.random() * 400 - 200;
    const y = Math.random() * 250 - 125;
    const scale = Math.max(0.7, 1 - escapeCount * 0.05);
    noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

    // Show rotating message
    noMessage.textContent = noMessages[messageIndex];
    noMessage.style.opacity = "1";

    messageIndex = (messageIndex + 1) % noMessages.length;

    clearTimeout(messageTimeout);
    messageTimeout = setTimeout(() => {
        noMessage.style.opacity = "0";
    }, 1500);
});

/* 💘 Yes button celebration */
yesBtn.addEventListener("click", () => {
    response.textContent = "💖 Yay! You just made my day 😍💘";

    for (let i = 0; i < 25; i++) {
        createHeartBurst();
    }
});

/* 💕 Floating hearts */
function createFloatingHeart() {
    const heart = document.createElement("span");
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    heart.style.fontSize = 16 + Math.random() * 20 + "px";

    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}

setInterval(createFloatingHeart, 400);

/* 💥 Heart burst on Yes */
function createHeartBurst() {
    const heart = document.createElement("span");
    heart.textContent = "💘";
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = "22px";
    heart.style.transform = `translate(${Math.random() * 300 - 150}px, ${Math.random() * 300 - 150}px)`;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
}

/* ✨ Sparkle cursor trail */
document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.textContent = "✨";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
});
