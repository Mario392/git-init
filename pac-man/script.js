function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumber").innerHTML = "Numero generato: " + randomNumber;
  }
  