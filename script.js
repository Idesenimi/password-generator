//declare variables
var password = document.getElementById("password-El") ;

var copiedEl = document.getElementById("copied-El");


//function to generate password
function generate() {
  copiedEl.textContent = " ";
  let charset = "0123456789@#$&%-QWERTYUIOPLKHJGFDSAZXCVBNMqwertyuiopkjhgfdsazxcvbnm" ;
  let passwordLength = 10;
  let password = " ";
  
  for (let i = 0; i <= passwordLength; i++) {
    randomIndex = Math.floor(Math.random() * charset.length) 
    password += charset.substring(randomIndex, randomIndex +1)
  } 
  document.getElementById("password-El").value = password;
} 


//function to copy text
function copy() {
  let copyText = document.getElementById("password-El");
  copyText.select();
  document.execCommand("copy");
  copiedEl.textContent = "Password Copied";
} 


