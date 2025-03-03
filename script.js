@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

body {
    background: linear-gradient(135deg, #1a0731, #000);
    color: white;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    padding: 20px;
}

/* Profile Section */
.profile-container {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

.profile-pic {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 15px rgba(138, 43, 226, 0.6);
}

.username {
    font-size: 2.2rem;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.9);
}

/* Typing Animation */
#typing-text {
    font-size: 1.3rem;
    color: #ff66b2;
    font-weight: bold;
    text-shadow: 0 0 12px #ff66b2;
}

/* Server Section */
.server-container {
  margin-top: 20px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 0 6px rgba(106, 0, 255, 0.6),  
              0 0 12px rgba(150, 50, 255, 0.4); /* Softer neon glow */
  transition: 0.3s ease-in-out;
}


.join-btn {
    background: #00ff99;
    color: black;
    font-size: 1rem;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

/* Music Player */
.music-container {
  margin-top: 20px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 0 5px rgba(90, 0, 214, 0.5),  
              0 0 10px rgba(120, 30, 230, 0.3); /* Subtle neon glow */
  transition: 0.3s ease-in-out;
}

#playPause {
  border: none;
 background: black;
 text-shadow: 0 0 10px rgba(255, 255, 255, 0.9);
}
/* Loading Screen */
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1000;
    transition: opacity 0.5s ease, visibility 0.5s ease;
}

.hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
}


.badges {
    background: rgba(0, 0, 0, 0.75); /* Slightly darker for better contrast */
    border-radius: 8px; /* Smoother rounded edges */
    padding: 5px 8px; /* More balanced padding */
    display: flex; /* Ensures proper alignment */
    gap: 5px; /* Space between badges */
    align-items: center; /* Aligns badges vertically */
    justify-content: center; /* Centers them if needed */
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.15); /* Subtle outer glow */
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.8); /* Softer text glow */
}


.loading-text {
    font-size: 1.3rem;
    color: #ff66b2;
    font-weight: bold;
    text-shadow: 0 0 12px #ff66b2;
}
