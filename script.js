var quotes = [{
	"a": "Albert Einstein",
	"q": "Strive not to be a success, but rather to be of value."
}, {
	"a": "Anthony Robbins",
	"q": "If you do what you've always done, you'll get what you've always gotten."
}, {
	"a": "John Dewey",
	"q": "If we teach today as we taught yesterday, we rob our children of tomorrow."
}, {
	"a": "Nelson Mandela",
	"q": "Education is the most powerful weapon which you can use to change the world."
}, {
	"a": "Martin Luther King, Jr.",
	"q": "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education."
}, {
	"a": "Mark Zuckerberg",
	"q": "In fifteen years we'll be teaching programming just like reading and writing...and wondering why we didn't do it sooner."
}, {
	"a": "Marissa Mayer",
	"q": "I always did something I was a little not ready to do.  I think that's how you grow."
}, {
	"a": "John Dewey",
	"q": "Education is not preparation for life; education is life itself."
}, {
	"a": "Aristotle",
	"q": "The root of education is bitter, but the fruit is sweet."
}, {
	"a": "Benjamin Franklin",
	"q": "An investment in knowledge pays the best interest."
}, {
	"a": "Michael Jordan",
	"q": "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed."
}];

var quote = document.getElementById('quote-holder');
var author = document.getElementById('author-holder');
var a = document.getElementById('tweet');
var tweet = "https://twitter.com/home/?status=";

var holder = Math.floor(Math.random() * quotes.length);

quote.innerHTML = quotes[holder].q;
author.innerHTML = quotes[holder].a;
a.href = tweet + quotes[holder].q + " - " + quotes[holder].a;

$("#update").click(function(){
  var newHolder = Math.floor(Math.random() * quotes.length);
  var otherHolder = Math.floor(Math.random() * quotes.length);
  var currentQuote = $("#quote-holder").val;
  if(currentQuote == quotes[newHolder].q){
    quote.innerHTML = quotes[otherHolder].q; 
    author.innerHTML = quotes[otherHolder].a;
    a.href = tweet + quotes[otherHolder].q + "-" + quotes[otherHolder].a;
  } else{
    quote.innerHTML = quotes[newHolder].q; 
    author.innerHTML = quotes[newHolder].a;
    a.href = tweet + quotes[newHolder].q + "-" + quotes[newHolder].a;
  }
});
