// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    updateIdText()
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  function updateIdText() {
      document.getElementById("text").textContent = "This is really cool!";
  }