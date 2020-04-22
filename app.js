var basicPrice = document.getElementById("basic-price");
var proPrice = document.getElementById("pro-price");
var masterPrice = document.getElementById("master-price");

var toggler = document.querySelector("input[type=checkbox]");

function checkAndUncheck() {
  toggler.checked = false;
}

function togglePrices() {
  if (this.checked) {
    basicPrice.innerHTML = "$19.99";
    proPrice.innerHTML = "$24.99";
    masterPrice.innerHTML = "$39.99";
  } else {
    basicPrice.innerHTML = "$199.99";
    proPrice.innerHTML = "$249.99";
    masterPrice.innerHTML = "$399.99";
  }
}

checkAndUncheck();
toggler.addEventListener("change", togglePrices, false);
toggler.addEventListener("keydown", togglePrices, true);
