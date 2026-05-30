// Backup array of old sayings, frog jokes, and wisdom if API lags
const backupQuotes = [
    "It is Wednesday, my dudes.",
    "Don't worry, be hoppy.",
    "You cannot catch the fly if you become the fly.",
    "Unbothered. Moisturized. Happy. In My Lane.",
    "Look before you leap!",
    "A frog in a well cannot conceive of the ocean.",
    "You've got to kiss a lot of frogs before you find your prince.",
    "Time flies like an arrow; fruit flies like a banana.",
    "Croak loudly, carry a big stick.",
    "We are all just tadpoles in the soup of life."
];

const frog = document.getElementById('frog');
const quoteDisplay = document.getElementById('quote-display');

frog.addEventListener('click', async () => {
    // 1. Instantly trigger confetti on click (no waiting for API)
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Fade out text temporarily while fetching new text
    quoteDisplay.classList.remove('show');

    try {
        // 2. Fetch from a live, free joke API
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        
        if (!response.ok) throw new Error('API down');
        
        const data = await response.json();
        
        // Combine setup and punchline for a clean display
        setTimeout(() => {
            quoteDisplay.textContent = `${data.setup} ... ${data.punchline}`;
            quoteDisplay.classList.add('show');
        }, 100);

    } catch (error) {
        // 3. Fallback smoothly to old sayings if internet drops/slows down
        const randomIndex = Math.floor(Math.random() * backupQuotes.length);
        setTimeout(() => {
            quoteDisplay.textContent = backupQuotes[randomIndex];
            quoteDisplay.classList.add('show');
        }, 100);
    }
});