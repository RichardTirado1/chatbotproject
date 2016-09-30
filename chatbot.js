var t = new Date();

var fallBacks = ["Sorry, I dont understand that", "No hablo english", "Hi my name is Bobby", "What are you saying?", "WhaAAAAAAAAAAAAATTTTTTTT????"];

var responses = {
	"what is your name?": "My name is Bobby",
	"how old are you?": "My birth is unknown",
	"where are you from?": "I am from........",
	"can you see me?": "yes you are charming",
	"what is your last name?": "I dont have one",
	"are you human?": "trust me im not, if I was I wouldn't be here",
  "who are you?": "I am Bobby",
  "do you have feelings?": "Maybe",
  "tell me three things about yourself?": "I am Bobby, I am Bobby, I am Bobby",
  "what is one detail you recall from our last chat?": "You asked me a question.",
  "what time is it?": "It is " + t.toLocaleTimeString(),
}

function talkButton() {
  var randomNumber =  Math.floor((Math.random() * fallBacks.length));

  var userInput = $("#input").val();
  var userInputLowerCase = userInput.toLowerCase();
  var answer = responses[userInput];

  if(answer === undefined) {
  $('#chat-area').prepend("Bobby: " + fallBacks[randomNumber] + "." + "</br>");
   }
  else {
  $('#chat-area').prepend("Bobby: " + answer + "." + "</br>");
  }
  $('#chat-area').prepend("You: " + userInput + "</br>");
  }

$(document).keyup(function(event){
   if(event.keyCode == 13){
       talkButton();
   }
 });
