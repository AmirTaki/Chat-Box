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

}

sendButton.addEventListener("click", ()=> {
    if(input.value !== ""){
        const message = document.createElement('div');
        message.classList.add('chat-message', 'user-message')      
    }  
})