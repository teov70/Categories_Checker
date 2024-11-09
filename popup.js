
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("checkButton").addEventListener("click", function() {
    const textInput = document.getElementById("textInput").value;

    let assignedText = textInput;

    console.log("Assigned Text:", assignedText);

    alert("Text assigned: " + assignedText);
  });
});