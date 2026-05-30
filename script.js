
const frogJokes = [
    "What do you call a frog with duct tape on its mouth? ... Un-ribbit-able!",
    "Where do frogs hang out when they want a drink? ... The croak-tail lounge.",
    "What happens when a frog parks illegally? ... It gets toad away!",
    "Why are frogs so happy? ... Because they eat whatever bugs them.",
    "What do you call a frog that lies? ... An am-fib-ian!",
    "What is a frog's favorite year? ... A leap year, obviously.",
    "What do stylish frogs wear? ... Jumpsuits.",
    "Where do frogs keep their money? ... In a river bank.",
    "What do you get when you cross a frog and a baseball player? ... A player who catches flies with his tongue.",
    "Why don't frogs drive? ... They prefer to hop a ride!",
    "What's a frog's favorite game? ... Leapfrog!",
    "What do frogs order at restaurants? ... French flies.",
    "Why did the frog go to the bank? ... To get a jump-start on his loan.",
    "get a froggy glass of water.",
];

const wiseOldQuotes = [
    "Look before you leap.",
    "A frog in a well cannot conceive of the ocean.",
    "You have to kiss a lot of frogs before you find your prince.",
    "Still waters run deep.",
    "Even a small frog can cast a large shadow in the setting sun.",
    "Patience is a bitter plant, but its fruit is sweet.",
    "A journey of a thousand miles begins with a single step.",
    "The frog does not drink up the pond in which it lives.",
    "The loudest croak does not make the wisest frog.",
    "get a froggy glass of water.",
];


const ancientFrogProverbs = [
    "The frog who chases two flies catches neither.",
    "Before the great leap, the wise frog bends his legs.",
    "Even the mightiest bullfrog began as a tadpole.",
    "The pond does not ask the frog why he croaks, it simply ripples.",
    "A frog's worth is not in his leap, but in where he lands.",
    "He who sits on the lily pad should not complain of wet feet.",
    "The patient frog eats well; the impatient frog eats nothing.",
    "Your loudest croak echoes longest in your own pond.",
    "When the heron comes, the wise frog does not ask why.",
    "The tadpole who fears the frog will never grow legs.",
    "To understand the water, you must first sit in it.",
    "The frog who never leaps never lands, but also never flies.",
    "Three things make a wise frog: silence, patience, and gratitude for the rain.",
    "get a froggy glass of water.",
    "Yesterday's rain fills today's puddles for tomorrow's tadpoles."
];


const frog = document.getElementById('frog');
const quoteDisplay = document.getElementById('quote-display');

let clickCount = 0; 

frog.addEventListener('click', () => {
    // CONFETTI (untouched)
    confetti({
        particleCount: 2000,
        spread: 300,
        origin: { y: 0.7 }
    });


    quoteDisplay.classList.remove('show');

    let chosenText = "";

  
    if (clickCount % 3 === 0) {
      
        const randomIndex = Math.floor(Math.random() * frogJokes.length);
        chosenText = "🐸 " + frogJokes[randomIndex] + " 🐸";
    } 
    else if (clickCount % 3 === 1) {
       
        const randomIndex = Math.floor(Math.random() * wiseOldQuotes.length);
        chosenText ="🐸 " + wiseOldQuotes[randomIndex] + " 🐸";
    }
    else {
        
        const randomIndex = Math.floor(Math.random() * ancientFrogProverbs.length);
        chosenText = "🐸 " + ancientFrogProverbs[randomIndex] + " 🐸";
    }

    clickCount++;

    setTimeout(() => {
        quoteDisplay.textContent = chosenText;
        quoteDisplay.classList.add('show');
    }, 120);
});