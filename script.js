function redirectToLogin() {
    window.location.href = 'login.html';
  }
  
  function redirectToSignUp() {
    window.location.href = 'signup.html';
  }
  
  function validateLogin(event) {
    event.preventDefault();
  
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
  
    const storedUser = localStorage.getItem(userId);
  
    if (storedUser) {
      const storedPassword = JSON.parse(storedUser).password;
  
      if (password === storedPassword) {
        alert('Login successful!');
        window.location.href = 'translate.html';
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else {
      alert('User does not exist. Please sign up.');
    }
  }
  
  function registerUser(event) {
    event.preventDefault();
  
    const newUserId = document.getElementById('newUserId').value;
    const newPassword = document.getElementById('newPassword').value;
  
    if (localStorage.getItem(newUserId)) {
      alert('User already exists. Please log in.');
    } else {
      localStorage.setItem(newUserId, JSON.stringify({ password: newPassword }));
      alert('Registration successful! You can now log in.');
      window.location.href = 'login.html';
    }
  }
// styles.js

const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

toggleDarkMode(isDarkMode);

function toggleDarkMode(isDarkMode) {
  const body = document.body;

  if (isDarkMode) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}

function toggleDarkModePreference() {
  const body = document.body;
  const isDarkMode = body.classList.toggle('dark-mode');

  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}
  
