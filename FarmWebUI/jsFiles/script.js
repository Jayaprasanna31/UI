// Function to calculate the score for the credentials (username and password)
function scoreCredentials(username, password) {
    const usernameScore = calculateUsernameScore(username);
    const passwordScore = calculatePasswordScore(password);
  
    // Display the score to the user
    const messageElement = document.getElementById("message");
    messageElement.textContent = "Username Score: " + usernameScore + ", Password Score: " + passwordScore;
  
    // Decide whether to allow login based on scores (You can define your own criteria)
    const totalScore = usernameScore + passwordScore;
    const minimumTotalScore = 10; // Define your minimum score here
    if (totalScore >= minimumTotalScore) {
      messageElement.textContent += " - Strong credentials!";
    } else {
      messageElement.textContent += " - Weak credentials!";
    }
  
    return totalScore;
  }

  // toggle buttons
  function toggleForm() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const formTitle = document.getElementById("formTitle");
  
    if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
      signupForm.style.display = "none";
      formTitle.textContent = "Login";
    } else {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
      formTitle.textContent = "Signup";
    }
  }
  
  // ... Other JavaScript functions and event listeners ...
  
  // Function to calculate the score for the username
  function calculateUsernameScore(username) {
    // Define your criteria for a strong username here and calculate the score accordingly
    // Example: Longer usernames get higher scores
    const minLength = 5;
    const maxLength = 15;
    const usernameLength = username.length;
    const scorePerCharacter = 2;
    return Math.min(Math.max(usernameLength, minLength), maxLength) * scorePerCharacter;
  }
  
  // Function to calculate the score for the password
  function calculatePasswordScore(password) {
    // Define your criteria for a strong password here and calculate the score accordingly
    // Example: Longer passwords and presence of special characters get higher scores
    const minLength = 8;
    const passwordLength = password.length;
    const scorePerCharacter = 2;
    const scoreForSpecialCharacters = 10;
    let score = Math.min(passwordLength, minLength) * scorePerCharacter;
  
    // Check for the presence of special characters
    const specialCharactersRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (specialCharactersRegex.test(password)) {
      score += scoreForSpecialCharacters;
    }
  
    return score;
  }
  
  // Function to show the Login form and hide the Sign Up form
  function showLogin() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const formTitle = document.getElementById("formTitle");
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    formTitle.textContent = "Login";
  }
  
  // Function to show the Sign Up form and hide the Login form
  function showSignUp() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const formTitle = document.getElementById("formTitle");
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    formTitle.textContent = "Signup";
  }
  
  // Event listener for the "Login" form submission
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    scoreCredentials(username, password);
  });
  
  // Event listener for the "Sign Up" form submission
  const signupForm = document.getElementById("signupForm");
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
  
    // Perform sign-up logic here (e.g., create a new account)
    // For demonstration purposes, we'll just display the new username and password score.
    const newUserScore = scoreCredentials(newUsername, newPassword);
    const messageElement = document.getElementById("message");
    messageElement.textContent = "New User Score: " + newUserScore;
  });
  