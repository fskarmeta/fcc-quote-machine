let quotes = [{
        name: "Mahatma Ghandi",
        quote: '"Happiness is when what you think, what you say, and what you do are in harmony."',
        url: '"https://www.educima.com/dibujo-para-colorear-mahatma-gandhi-dm30409.jpg"'
    },
    {
        name: "Martin Luther King",
        quote: '"Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness."',
        url: '"https://gacetaintercultural.files.wordpress.com/2009/01/martin-luther-king-jr.jpg"'
    },
    {
        name: "Winston Churchil",
        quote: '"It has been said that Democracy is the worst form of government except all those other forms that have been tried from time to time.',
        url: "https://img2.freepng.es/20190711/zkr/kisspng-sutherlands-portrait-of-winston-churchill-we-shal-belmond-mount-nelson-hotel-history-1-years-of-pi-5d27d2ac07fbc6.6569139215628909240327.jpg"
    }
]

function random() {
    return Math.floor(Math.random() * quotes.length)
}

let number = random()

let quote = quotes[number].quote
let name = quotes[number].name
let url = quotes[number].url

console.log(quote)
console.log(name)
console.log(url)