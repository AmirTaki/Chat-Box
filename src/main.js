const messageList = document.querySelector(".chat-box") ;
const input = document.querySelector('.chat-input input');
const sendButton = document.querySelector(".chat-input button")

const responses = {
    Greeting: [
        "Hello there!",
        "Hi! How can I help you today?"
    ],
    Farewell : [
      "Good bye!",
      "Bye! Have a great day!",  
    ],
    Default : [
       "I'm afrid I don't have an answer for that. Can you try asking something else?", 
    ],

}

sendButton.addEventListener("click", ()=> {
    if(input.value !== ""){
        const message = document.createElement('div');
        message.classList.add('chat-message', 'user-message')     
        message.innerHTML  = `<div class = "chat-message-text">${input.value}</div>` 
        messageList.appendChild(message)

        input.addEventListener('keyup', (e)=>{
            if(e.key === "Enter") {
                sendButton.click();
            }
        })
        const inputText = input.value.toLowerCase();
        let intent = "Default" 
        if(inputText.includes("hello") || inputText.includes("hi")){
            intent =  "Greeting"
        }
        else if (inputText.includes("bye") || inputText.includes('goodbye')){
            intent = "Farewell"
        }
        input.value = "";
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * responses[intent].length);
            const responsesText = responses[intent][randomIndex]
            const botMessage = document.createElement('div')
            botMessage.classList.add('chat-message', 'bot-message')
            botMessage.innerHTML = `<div class = "chat-message-text">${responsesText}</div>` 
            messageList.appendChild(botMessage)

            messageList.scrollTop = messageList.scrollHeight;

        }, 1000)
    }  

})