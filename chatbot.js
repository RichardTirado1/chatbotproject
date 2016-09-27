var responses = {
	"What is your name?": "My name is Bobby",
	"How old are you?": "My birth is unknown",
	"Where are you from?": "I am from......",
	"Can you see me?": "yes you are charming",
	"What is your last name?": "I dont have one",
	"Are you human?": "trust me im not, if I was I wouldn't be here",
  "Who are you?": "I am Bobby",
  "Do you have feelings?": "Maybe",
  "Tell me three things about yourself?": "I am Bobby, I am Bobby, I am Bobby",
  "What is one detail you recall from your last chat?": "You asked me a question.",
}

function talkButton() {
  var userInput = $("#input").val();
  var answer = responses[userInput];

  $('#chat-area').prepend("Bobby: " + answer + "." + "</br>");
  $('#chat-area').prepend("You: " + userInput + "." + "</br>");
}
