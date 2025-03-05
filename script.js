document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('#typing-text');
    const texts = [
        "MADE BY XAYLI802", 
        "🌐XAYLI IS ON TOP🌐", 
        "HTML & CSS & JAVASCRIPT🔨", 
        "FOLLOW ME ON GITHUB🌐", 
        "🗣️LIFE IS ROBLOX", 
        "🌐..🔨..💬..👁️..🔒", 
        "FREE & BETTER 🔨"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        if (!textElement) return;
        const currentText = texts[textIndex];
        textElement.innerHTML = currentText.substring(0, charIndex) + "<span>|</span>";

        if (!isDeleting) {
            charIndex++;
            if (charIndex > currentText.length) {
                setTimeout(() => isDeleting = true, 1000);
            }
        } else {
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        }
        setTimeout(typeText, isDeleting ? 100 : 150);
    }

    typeText();
});

// Music Player
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");

function updatePlayPauseButton() {
    playPauseBtn.innerHTML = audio.paused ? "▶" : "⏸";
}

playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    updatePlayPauseButton();
});

// Fetch Discord Server Info
document.addEventListener('DOMContentLoaded', function () {
    const serverName = document.getElementById('server-name');
    fetch("https://discord.com/api/v10/invites/uZycxUKcUD")
        .then(response => response.json())
        .then(data => {
            serverName.textContent = data.guild.name;
        });
});