//target the buttons
const sendButton = document.querySelector('#sendButton');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');
const messageOn = document.querySelector('#messageOn');
const messageSet = document.querySelector('#messageSet');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
  //collect the value of input
  let content = messageIn.value;

  if (content === '') {
    alert("Please enter valid input");
  } else {
    //place value in message output
    messageOut.innerHTML = content;
    // messageOn.innerHTML = content;
    // messageSet.innerHTML = content;
    //clear input box when mesage is sent
    messageIn.value = '';
    console.log(content);

  }

}