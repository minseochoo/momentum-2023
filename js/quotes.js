const quotes = [
  {
    quote: "Music is my life.",
    author: "unknown",
  },
  {
    quote: "Life is an unbroken succession of false situations.",
    author: "Thornton Wilder",
  },
  {
    quote: "Act as if it were impossible to fail.",
    author: "Dorothea Brande",
  },
  {
    quote: "Age is foolish and forgetful when it underestimates youth.",
    author: "J. K. Rowling",
  },
  {
    quote: "There is no remedy for love but to love more.",
    author: "Henry David Thoreau",
  },
  {
    quote:
      "I do not know what the future holds, but I know who holds the future.",
    author: "Oprah Winfrey",
  },
  {
    quote: "Strive for excellence, not perfection.",
    author: "H. Jackson Brown Jr.",
  },
  {
    quote: "If you don't risk anything you risk even more.",
    author: "Erica Jong",
  },
  {
    quote: "What makes the engine go? Desire, desire, desire.",
    author: "Stanley Kunitz",
  },
  {
    quote:
      "Pride is a powerful narcotic, but it doesn't do much for the auto-immune system.",
    author: "Stuart Stevens",
  },
];

const qoute = document.querySelector("#quote span");
const author = document.querySelector("#author span");

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQoute.quote;

author.innerText = todaysQoute.author;
