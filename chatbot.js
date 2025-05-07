const chatToggle = document.getElementById("chat-toggle");
const chatbox = document.getElementById("chatbox");
const chatInput = document.getElementById("chat-input");
const chatLog = document.getElementById("chat-log");


chatToggle.onclick = () => {
  chatbox.classList.toggle("hidden");
};

chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userInput = chatInput.value.trim();
    if (userInput) {
      addMessage("You", userInput);
      respond(userInput.toLowerCase());
      chatInput.value = "";
    }
  }
});

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatLog.appendChild(msg);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function respond(input) {
  let response = "You can ask me about my skills, past projects, or resume information";

  if (input.includes("skills")) {
    response = "I specialize in server management, hardware configuration, Active Directory, Troubleshooting, Intrusion Detection, Windows Server, Hyper-V,Hardware Configuration/Repair, Azure Directory, Server Management, Network Security";
  } else if (input.includes("project")) {
    response = "To see my recent projects, check out my Projects section for GitHub links!";
  } else if (input.includes("resume")) {
    response = "You can download my resume or scan the QR code for easier access, in the Resume section. As w";
  }

  setTimeout(() => {
    addMessage("Bot", response);
  }, 500);
}
