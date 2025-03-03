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
        if (!textElement) return; // Prevent errors if element is missing
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


document.getElementById("volumeToggle").addEventListener("click", function () {
    let audio = document.getElementById("audio");
    if (audio.muted) {
        audio.muted = false;
        this.textContent = "🔊";
    } else {
        audio.muted = true;
        this.textContent = "🔇";
    }
});


const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const seekBar = document.getElementById("seekBar");
const currentTimeEl = document.getElementById("currentTime");
const totalTimeEl = document.getElementById("totalTime");
const volumeBar = document.getElementById("volumeBar");

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

audio.addEventListener("timeupdate", () => {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
    currentTimeEl.textContent = formatTime(audio.currentTime);
});

seekBar.addEventListener("input", () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
});

audio.addEventListener("loadedmetadata", () => {
    totalTimeEl.textContent = formatTime(audio.duration);
});

volumeBar.addEventListener("input", () => {
    audio.volume = volumeBar.value;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

// Hide loading screen on click & start music
const loadingScreen = document.querySelector(".loading-screen");
loadingScreen.addEventListener("click", () => {
    loadingScreen.classList.add("hidden");
    startMusic();
});

// Auto-hide loading screen after 10s
setTimeout(() => {
    loadingScreen.classList.add("hidden");
}, 60000);

// Ensure music plays after first user interaction
let hasPlayed = false;

function startMusic() {
    if (!hasPlayed) {
        audio.play().then(() => {
            hasPlayed = true;
            updatePlayPauseButton(); // Update emoji when music starts
            removeInteractionListeners();
        }).catch(() => {
            console.log("Autoplay blocked, waiting for user interaction.");
        });
    }
}

// Remove event listeners after music starts
function removeInteractionListeners() {
    document.removeEventListener("click", startMusic);
    document.removeEventListener("scroll", startMusic);
    document.removeEventListener("mousemove", startMusic);
    document.removeEventListener("touchstart", startMusic);
}

// Add event listeners for first interaction
document.addEventListener("click", startMusic);
document.addEventListener("scroll", startMusic);
document.addEventListener("mousemove", startMusic);
document.addEventListener("touchstart", startMusic, { passive: true }); // Fix for mobile

// Update button emoji when audio is manually paused
audio.addEventListener("pause", updatePlayPauseButton);
audio.addEventListener("play", updatePlayPauseButton);




// loading text animation 


document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('.loading-text');
    const texts = [
        "CLICK ME👻", 
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
        if (!textElement) return; // Prevent errors if element is missing
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



// discord server data


document.addEventListener('DOMContentLoaded', function () {
    const serverImage = document.getElementById('server-image');
    const serverName = document.getElementById('server-name');
    const serverInfo = document.getElementById('server-info');

    const inviteLink = 'https://discord.gg/uZycxUKcUD';  // Replace with your invite link

    function fetchServerInfo() {
        const inviteCode = inviteLink.split('/').pop(); // Extract the invite code from the URL

        fetch(`https://discord.com/api/v10/invites/${inviteCode}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch server info');
            }
            return response.json();
        })
        .then(data => {
            // Update the page with the server's data
            serverName.textContent = data.guild.name;
            serverImage.src = data.guild.icon 
                ? `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}.png` 
                : 'default-image-url'; // Provide a default image URL if needed
            serverInfo.textContent = `Server has ${data.approximate_member_count} members`; // Approximate member count
        })
        .catch(error => {
            console.error('Error fetching server info:', error);
            serverName.textContent = 'Failed to load server info';
            serverInfo.textContent = 'Please try again later.';
        });
    }

    fetchServerInfo();  // Fetch the server info when the page loads
});