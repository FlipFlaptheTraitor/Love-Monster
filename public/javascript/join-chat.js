  
const joinChat = document.querySelectorAll('.join-btn')[0];

console.log(joinChat);

joinChat.addEventListener('click', () =>{
    console.log('Work!')
    location.replace('/api/chat')
})