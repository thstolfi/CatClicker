var catImage = document.getElementById("catimage")
let clicks = 0;
let clickValue = 1;

catImage.addEventListener("click", function() {
  catImage.src = "images/catopen.jpg";
  setTimeout(function() {
    catImage.src = "images/catclose.jpg";
  }, 100);
  calcularClicks()
});

function atualizarClicks() {
  const clicksTotal = document.getElementById('clicks');
  clicksTotal.textContent = clicks; 
}

function calcularClicks() {
  clicks += clickValue;
  atualizarClicks();
  if (clicks > 1000) {
    alert("Você conseguiu 1000 pontos!");
    clicks = 0;
    atualizarClicks();
  }
}

var upgrade10pts = document.getElementById("10pts");
var upgrade50pts = document.getElementById("50pts");
var upgrade100pts = document.getElementById("100pts");

function comprarUpgrade(upgradePontos, upgradeValue) {
  if (clicks >= upgradePontos) {
      clicks -= upgradePontos;
      clickValue += upgradeValue;
      atualizarClicks();
  } else {
      alert("Pontos insuficientes");
  }
}

upgrade10pts.addEventListener("click", function() {
  comprarUpgrade(10, 1);
});

upgrade50pts.addEventListener("click", function() {
  comprarUpgrade(50, 8);
});

upgrade100pts.addEventListener("click", function() {
  comprarUpgrade(100, 16);
});
