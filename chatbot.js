function randomNumberGenerator()
{
  Math.floor((Math.random() * myArray.length));
}
var t = new Date();

//document.getElementById("#input").keyup(function(talkButton) {
  //  if (event.keyCode == 13) {
    //    document.getElementById("#talkButton").click();
    //}
//});
var fallBacks = ["Sorry, I dont understand that", "No hablo english", "Hi my name is Bobby", "What are you saying?"];

var responses = {
	"What is your name?": "My name is Bobby",
	"How old are you?": "My birth is unknown",
	"Where are you from?": "I am from........",
	"Can you see me?": "yes you are charming",
	"What is your last name?": "I dont have one",
	"Are you human?": "trust me im not, if I was I wouldn't be here",
  "Who are you?": "I am Bobby",
  "Do you have feelings?": "Maybe",
  "Tell me three things about yourself?": "I am Bobby, I am Bobby, I am Bobby",
  "What is one detail you recall from our last chat?": "You asked me a question.",
  "What time is it?": "It is " + t.toLocaleTimeString(),
}

function talkButton() {
  var userInput = $("#input").val();
  var answer = responses[userInput];

  if(answer === undefined) {
  $('#chat-area').prepend("Bobby: " + fallBacks[0] + "." + "</br>");
}
  else {
    $('#chat-area').prepend("Bobby: " + answer + "." + "</br>");
  }
  $('#chat-area').prepend("You: " + userInput + "." + "</br>");
}
