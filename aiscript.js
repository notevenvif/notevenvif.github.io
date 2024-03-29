const chatWindow = document.getElementById('chat-window');
const inputBox = document.getElementById('input-box');
let chat_log = ["AyouBot: Hi there how can I help you?"];

function sendUserInput() {


console.log(chat_log)


const userInput = inputBox.value;
let context = chat_log.join("\n");
let prompt = `${context}\nUser: ${userInput}`;


console.log(prompt)


inputBox.value = '';

  appendMessage('You', userInput);

  fetch("https://api.openai.com/v1/engines/text-davinci-003/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${lmifta7hh()}`,
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 1024,
      temperature: 0.7,
    }),
  })
  .then((response) => response.json())
  .then((data) => {
    const generatedText = data.choices[0].text;
    appendMessage('AyouBot', generatedText.replace("AyouBot: ", "").replace("Bot: ", "").replace("AI: ", ""));
    if (prompt.length<=1024) {
      chat_log.push(`User: ${userInput}`)
      chat_log.push(generatedText)
    } else {
      chat_log.length = 0;
    }
  })
  .catch(error => console.log(error));
}
function lmifta7hh() {
  let wawaw = ["sk-TbaMhZB", "CT3BlbkFJWxC2", "Xwb7F8E3FRTDxcdS", "8EDFJvAf5SNo"]
  let libghina = wawaw[0] + wawaw[3] + wawaw[1] + wawaw[2]
  return libghina
}
function appendMessage(sender, message) {
  const messageElem = document.createElement('div');
  messageElem.style.transitionDuration = "0.5s";
  messageElem.style.borderLeft = "3px solid #474747";
  messageElem.style.backgroundColor = "#2e2e2e";
  messageElem.innerHTML = `<p class="user">${sender}:</p><p class="message">${message}</p>`;
  chatWindow.appendChild(messageElem);
  chatWindow.lastChild.scrollIntoView();
}

function buttonDisabler() {
  const button = document.getElementById("button");
  const input = document.getElementById("input-box");
  if (input.value.length > 5) {
    button.disabled = false;
    button.style.opacity = 1;
  } else {
    button.disabled = true;
    button.style.opacity = 0.5;
  }
}

const button = document.getElementById("button");
inputBox.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {


    const logo = document.getElementById('logo');
    if (logo.style.float != "left") {
      logo.classList.remove('logo');
      logo.classList.add('logoafter');
    }
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    button.click();
  }
});

const convoContainer = document.querySelector('.convo');
convoContainer.addEventListener('scroll', function() {
  if (convoContainer.scrollTop > 0) {
    convoContainer.classList.add('scroll-active');
  } else {
    convoContainer.classList.remove('scroll-active');
  }
});
