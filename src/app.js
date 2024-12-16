window.onload = function() {
  let cardNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let palo = ["Diamantes", "Picas", "Corazones", "Treboles"];
  let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  let randomPaloNumber = Math.floor(Math.random() * palo.length);
  let finalPalo = palo[randomPaloNumber];

  document.getElementById("cardContent").innerHTML =
    cardNumber[randomCardNumber];
  document.getElementById("Card").className = "";
  document.getElementById("Card").classList.add("card");
  document.getElementById("Card").classList.add(getPalo(finalPalo));
};

function getPalo(palo) {
  switch (palo) {
    case "Diamantes":
      return "card-diamantes";
    case "Picas":
      return "card-picas";
    case "Corazones":
      return "card-corazones";
    case "Treboles":
      return "card-treboles";
  }
}
