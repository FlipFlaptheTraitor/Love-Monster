const signupBtn = document.getElementById('signup-btn');
const logoutBtn = document.getElementById('no-btn')

async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/user/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/api/chat-routes');
      } else {
        alert(response.statusText);
      }
    }
}
  
async function signupFormHandler(event) {
    // event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/user-routes', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        document.location.replace('/api/monsterQs');
      } else {
        alert(response.statusText);
      }
    }
}

//Event Listeners
signupBtn.addEventListener('click', ()=>{
      signupFormHandler();
})

// document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
// document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

