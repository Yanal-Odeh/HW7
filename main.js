var info = "";
var cur = ["dollar", "dinar", "nis"];
for (var i = 0; i < cur.length; i++) {
  info += `<option > ${cur[i]}</option>`;
}
document.querySelector("select").innerHTML = info;
//////
var formreg = document.querySelector(".registerForm");
var para = document.querySelector("p");
formreg.onsubmit = function (e) {
  e.preventDefault();
  var element = e.target.elements;
  var price = {
    mony: element["amount"].value,
  };
};
formreg.onsubmit = function (e) {
  e.preventDefault();
  var element = e.target.elements;

  var price = {
    moneyType: element["amount"].value,
    seltype: element["exchange"].value,
  };
  var exchangeRate;
  switch (price.seltype) {
    case "dollar":
      exchangeRate = 0.27; // dollar
      break;
    case "dinar":
      exchangeRate = 0.19; // dinar
      break;
    case "nis":
      exchangeRate = 1; // nis (no change)
      break;
    default:
      para.textContent = "Invalid currency type";
      return;
  }
  // display
  var result = price.moneyType * exchangeRate;
  para.textContent = `Converted amount: ${result} `;
};
