var responses = {
	"What is your name?": "My name is Bobby",
	"How old are you?": "My birth is unknown",
	"Where are you from?": "I am from......",
	"Can you see me?": "yes you are charming",
	"What is your last name?": "I dont have one",
	"Are you human?": "trust me im not, if I was I wouldn't be here",
  "Who are you?": "I am Bobby",
  "Do you have feelings?": "maybe",
  "Tell me three things about yourself?": "I am Bobby, I am Bobby, I am Bobby",
  "What is one detail you recall from your last chat?": "",
}

function talkButton() {
  document.getElementById("chat-area").textContent =
  document.getElementById("input").value;

  var userInput = $("#input").val();
  console.log("userInput is " + userInput);
  var answer = responses[userInput];
  document.getElementById("chat-area").textContent = answer;

  $('#chat-area').prepend("Bobby: " + ".");
  $('#chat-area').prepend("You: " + userInput + "." + "</br>");
}
