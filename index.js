// checkout page

const nosShoeItem = document.getElementById("shoesNumber");
const nosBagItem = document.getElementById("bagNumber");
const totalCost = document.querySelector("#totalCost");
var bagValue = parseInt(document.getElementById("bagNumber").value);
var shoeValue = parseInt(document.getElementById("shoesNumber").value);

// let overAllCost = "$" + Number(nosShoeItem.value * 74.99) ;

function addBag() {
  bagValue = isNaN(bagValue) ? 0 : bagValue;
  bagValue++;
  document.getElementById("bagNumber").value = bagValue;
  let overAllCost =
    "$" +
    parseFloat(
      Number(bagValue * 54.99) + Number(shoeValue * 74.99) + 19
    ).toFixed(2);
  totalCost.innerHTML = overAllCost;
}

function minusBag() {
  bagValue = isNaN(bagValue) ? 0 : bagValue;
  bagValue < 1 ? (bagValue = 1) : "";
  bagValue--;
  document.getElementById("bagNumber").value = bagValue;
  let overAllCost =
    "$" +
    parseFloat(
      Number(bagValue * 54.99) + Number(shoeValue * 74.99) + 19
    ).toFixed(2);
  totalCost.innerHTML = overAllCost;
}

function addShoes() {
  shoeValue = isNaN(shoeValue) ? 0 : shoeValue;
  shoeValue++;
  document.getElementById("shoesNumber").value = shoeValue;
  let overAllCost =
    "$" +
    parseFloat(
      Number(shoeValue * 74.99) + Number(bagValue * 54.99) + 19
    ).toFixed(2);
  totalCost.innerHTML = overAllCost;
  console.log(overAllCost);
}

function minusShoes() {
  shoeValue = isNaN(shoeValue) ? 0 : shoeValue;
  shoeValue < 1 ? (shoeValue = 1) : "";
  shoeValue--;
  document.getElementById("shoesNumber").value = shoeValue;
  let overAllCost =
    "$" +
    parseFloat(
      Number(shoeValue * 74.99) + Number(bagValue * 54.99) + 19
    ).toFixed(2);
  totalCost.innerHTML = overAllCost;
  console.log(overAllCost);
}
