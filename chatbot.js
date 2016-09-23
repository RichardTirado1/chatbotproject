var userInput = {
	"what is your name": My name is Bobby,
	"how old are you": My birth is unknown,
	"hello": Hi,
	"goodmorning": its a bad morning,
	"what is your last name": I dont have one,
	"goodbye": bye,
}

function talkButton() {
  document.getElementById("chat-area").textContent =
  document.getElementById("input").value;

  var userInput = $("#chat-area").val();
  console.log("userInput is " + userInput);

}
