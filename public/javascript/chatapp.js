  
const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

// sets up a name to dispay in chat only used temp to check chat function
// will be replace with users data later 
// I always picture Howard re-enacting the scence from Mommy Deariest screaming "No window prompts!"
const name = prompt('What is your name?')
appendMessage('You joined')
socket.emit('new-user', name)

//sends message to append to html 
socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`)
})
//recieves data from chat msg event 
socket.on('user-connected', name => {
  appendMessage(`${name} connected`)
})
//
socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`)
})

//stops chat from refreshing
messageForm.addEventListener('submit', e => {
  e.preventDefault()
  //takes data from webpage  
  const message = messageInput.value
  appendMessage(`You: ${message}`)
  //sends date from  client to server
  socket.emit('send-chat-message', message)
  //empties out input box on webpage
  messageInput.value = ''
})


//appends messages to html file
function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}