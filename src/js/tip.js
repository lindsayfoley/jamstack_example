const tips = [
    "Start your day with exercise",
    "But drink some lemon water first",
    "No screen time until breakfast",
    "Eat a real breakfast",
    "Set goals for the day"
];

const randomTip = tips[Math.floor(Math.random() * tips.length)];

document.querySelector('.tips').append(randomTip);