let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeScoreCount = 0;
let guestScoreCount = 0;

function homeScorePlus1() {
  homeScoreCount += 1;
  homeScore.textContent = homeScoreCount;
  highlightWinner();
}
function homeScorePlus2() {
  homeScoreCount += 2;
  homeScore.textContent = homeScoreCount;
  highlightWinner();
}
function homeScorePlus3() {
  homeScoreCount += 3;
  homeScore.textContent = homeScoreCount;
  highlightWinner();
}
function guestScorePlus1() {
  guestScoreCount += 1;
  guestScore.textContent = guestScoreCount;
  highlightWinner();
}
function guestScorePlus2() {
  guestScoreCount += 2;
  guestScore.textContent = guestScoreCount;
  highlightWinner();
}

function guestScorePlus3() {
  guestScoreCount += 3;
  guestScore.textContent = guestScoreCount;
  highlightWinner();
}

function resetScore() {
  homeScore.textContent = 0;
  guestScore.textContent = 0;
  homeScoreCount = 0;
  guestScoreCount = 0;
  highlightWinner();
}

function highlightWinner() {
  let minutesElement = document.getElementById("minutes");
  let secondsElement = document.getElementById("seconds");
  if (homeScoreCount > guestScoreCount) {
    homeScore.style.color = "green";
    guestScore.style.color = "red";
  } else if (guestScoreCount > homeScoreCount) {
    homeScore.style.color = "red";
    guestScore.style.color = "green";
  } else {
    homeScore.style.color = "#fafafa";
    guestScore.style.color = "#fafafa";
  }
}

document
  .getElementById("home-score-1")
  .addEventListener("click", homeScorePlus1);

document
  .getElementById("home-score-2")
  .addEventListener("click", homeScorePlus2);
document
  .getElementById("home-score-3")
  .addEventListener("click", homeScorePlus3);

document
  .getElementById("guest-score-1")
  .addEventListener("click", guestScorePlus1);
document
  .getElementById("guest-score-2")
  .addEventListener("click", guestScorePlus2);
document
  .getElementById("guest-score-3")
  .addEventListener("click", guestScorePlus3);

document.getElementById("reset-button").addEventListener("click", resetScore);
