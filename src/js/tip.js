const tips = [
    "Start your day with some exercise",
    "Start your day with a hot drink",
    "No screen time until breakfast",
    "Eat a real breakfast",
    "Set goals for the day"
];

const randomTip = tips[Math.floor(Math.random() * tips.length)];

document.querySelector('.tip').append(randomTip);