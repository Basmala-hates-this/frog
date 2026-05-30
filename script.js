
const frogJokes = [
    "What do you call a frog with duct tape on its mouth? ... Un-ribbit-able!",
    "Where do frogs hang out when they want a drink? ... The croak-tail lounge.",
    "What happens when a frog park illegally? ... It gets toad away!",
    "Why are frogs so happy? ... Because they eat whatever bugs them.",
    "What do you call a frog that lies? ... An am-fib-ian!",
    "What is a frog's favorite year? ... A leap year, obviously.",
    "What do stylish frogs wear? ... Jumpsuits.",
    "Where do frogs keep their money? ... In a river bank.",
    "What do you get when you cross a frog and a baseball player? ... A player who catches flies with his tongue."
];


const wiseSayings = [
    "Look before you leap.",
    "A frog in a well cannot conceive of the ocean.",
    "You have to kiss a lot of frogs before you find your prince.",
    "The mind is everything. What you think, you become.",
    "Still water runs deep.",
    "Do not wish for a light load, wish for a strong back.",
    "Patience is a bitter plant, but its fruit is sweet.",
    "A journey of a thousand miles begins with a single step.",
    "Even a small frog can cast a large shadow in the setting sun."
];

const frog = document.getElementById('frog');
const quoteDisplay = document.getElementById('quote-display');


let isFrogTurn = true; 

frog.addEventListener('click', () => {
   
    confetti({
        particleCount: 1100,
      spread: 200,
      origin: { y: 0.7 }
    });

   
    quoteDisplay.classList.remove('show');

    let chosenText = "";

    if (isFrogTurn) {
        const randomIndex = Math.floor(Math.random() * frogJokes.length);
        chosenText = frogJokes[randomIndex];
    } else {
        const randomIndex = Math.floor(Math.random() * wiseSayings.length);
        chosenText = wiseSayings[randomIndex];
    }

  
    isFrogTurn = !isFrogTurn;

   
    setTimeout(() => {
        quoteDisplay.textContent = chosenText;
        quoteDisplay.classList.add('show');
    }, 120);
});