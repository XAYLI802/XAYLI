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



// background animation




const deg = (a) => Math.PI / 180 * a;
const rand = (v1, v2) => Math.floor(v1 + Math.random() * (v2 - v1));

const opt = {
  particles: window.innerWidth > 500 ? 1000 : 500,
  noiseScale: 0.009,
  angle: Math.PI / 180 * -90,
  h1: rand(0, 360),
  h2: rand(0, 360),
  s1: rand(20, 90),
  s2: rand(20, 90),
  l1: rand(30, 80),
  l2: rand(30, 80),
  strokeWeight: 1.2,
  tail: 82,
};

const Particles = [];
let time = 0;

document.body.addEventListener("click", () => {
  opt.h1 = rand(0, 360);
  opt.h2 = rand(0, 360);
  opt.s1 = rand(20, 90);
  opt.s2 = rand(20, 90);
  opt.l1 = rand(30, 80);
  opt.l2 = rand(30, 80);
  opt.angle += deg(rand(60, 60)) * (Math.random() > 0.5 ? 1 : -1);

  for (let p of Particles) {
    p.randomize();
  }
});

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lx = x;
    this.ly = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.hueSemen = Math.random();
    this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
    this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
    this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
    this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
  }

  randomize() {
    this.hueSemen = Math.random();
    this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
    this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
    this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
    this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
  }

  update() {
    this.follow();
    this.vx += this.ax;
    this.vy += this.ay;
    
    const p = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    const a = Math.atan2(this.vy, this.vx);
    const m = Math.min(this.maxSpeed, p);
    this.vx = Math.cos(a) * m;
    this.vy = Math.sin(a) * m;
    
    this.x += this.vx;
    this.y += this.vy;
    this.ax = 0;
    this.ay = 0;

    this.edges();
  }

  follow() {
    let angle = noise(this.x * opt.noiseScale, this.y * opt.noiseScale, time * opt.noiseScale) * Math.PI * 0.5 + opt.angle;
    this.ax += Math.cos(angle);
    this.ay += Math.sin(angle);
  }

  updatePrev() {
    this.lx = this.x;
    this.ly = this.y;
  }

  edges() {
    if (this.x < 0) {
      this.x = width;
      this.updatePrev();
    }
    if (this.x > width) {
      this.x = 0;
      this.updatePrev();
    }
    if (this.y < 0) {
      this.y = height;
      this.updatePrev();
    }
    if (this.y > height) {
      this.y = 0;
      this.updatePrev();
    }
  }

  render() {
    stroke(`hsla(${this.hue}, ${this.sat}%, ${this.light}%, .5)`);
    line(this.x, this.y, this.lx, this.ly);
    this.updatePrev();
  }
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(60); // Ensures smooth animation at 60 FPS

  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);  // Make sure the canvas is positioned correctly
  cnv.style("z-index", "-1");  // Ensure it's behind other elements
  cnv.style("position", "fixed");  // Fix it to the background
  cnv.style("top", "0");
  cnv.style("left", "0");

  for (let i = 0; i < opt.particles; i++) {
    Particles.push(new Particle(Math.random() * width, Math.random() * height));
  }
  strokeWeight(opt.strokeWeight);
}
function draw() {
  time++;
  background(0, 100 - opt.tail);

  for (let p of Particles) {
    p.update();
    p.render();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
