let oneCard = random();
let seconCard = random();
let total = oneCard + seconCard;
let sum = [oneCard, seconCard];
let BlackJack = false;
let isaAlive = true;
let message = "";
let SumEl = document.getElementById("Sum");
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards");
let player = {
  name: "per",
  chips: 130,
};

document.getElementById("player").textContent =
  player.name + ": " + "$" + player.chips;

function random() {
  let random = Math.floor(Math.random() * 13) + 1;
  if (random > 10) {
    return 10;
  } else if (random === 1) {
    return 11;
  } else {
    return random;
  }
}

function StartGame() {
  SumEl.textContent = "Sum: " + total;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < sum.length; i++) {
    cardsEl.textContent += sum[i] + " , ";
  }
  if (total <= 20) {
    message = "do you want to draw a new card?";
  } else if (total === 21) {
    message = "wohoo! You've got BlackJack";
    BlackJack = true;
  } else {
    message = "You're out of the game";
    isaAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isaAlive === true && BlackJack === false) {
    let card = random();
    total += card;
    sum.push(card);
    StartGame();
  }
}
