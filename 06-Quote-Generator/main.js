let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "The harder you work for something, the greater you'll feel when you achieve it. - Coder-Ali",
    "Dream bigger. Do bigger. - Coder-Ali",
    "Don't stop when you're tired. Stop when you're done. - Coder-Ali",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
];

let GenerateBtn = document.getElementById('Generate')
let showQuote = document.getElementById('show-quote')

 showQuote.innerHTML = quotes[5];

GenerateBtn.addEventListener('click' , () => {
    let randomIndex = Math.floor(Math.random() * quotes.length)
    let randomQuotes = quotes[randomIndex]
    showQuote.innerHTML = randomQuotes;

})