const btnE1 = document.getElementById("btn");
const quoteE1 = document.getElementById("quote");
const authorE1 = document.getElementById("author");

const apiURL = "http://api.quotable.io/random";

async function getQuote() {

    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteE1.innerText = quoteContent;
    authorE1.innerText = "~by " + quoteAuthor;

    console.log(data);
}



btnE1.addEventListener("click", getQuote);