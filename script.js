// Sign up form validation
const signupForm = document.getElementById('signup-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const signUpButton = document.getElementById('sign-up-button');

confirmPasswordInput.addEventListener('input', () => {
    if (passwordInput.value === confirmPasswordInput.value) {
        signUpButton.disabled = false;
    } else {
        signUpButton.disabled = true;
    }
});

// Handle form submissions (you'll need to replace this with your backend logic)
signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    // Here, you'd send the signup data to your backend server
    // ...
    // After successful signup, redirect to the login page
    window.location.href = 'index.html';
});

// Login form handling
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Here, you'd send the login data to your backend server
    // ...
    // After successful login, redirect to the dashboard
    window.location.href = 'dashboard.html';
});