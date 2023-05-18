// selecting necessary DOM elements
const captchaTextbox = document.querySelector(".captcha_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector('#ip');
const message = document.querySelector(".msg");
const submitButton = document.querySelector(".button");

// variable to store generated captcha
let captchaText = null

// Function to generate captcha
const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
  
    console.log(randomString);
    console.log(captchaInputBox);
    captchaInputBox.value=randomString;
};

// Generate a captcha when the page loads
generateCaptcha();