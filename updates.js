function updateAverageToUse() {
  averageToUse = document.querySelector('input[name="average"]:checked').value
  calculateEmissionsPerKcal(nutritional_data);
  calculateLandusePerKcal(nutritional_data);
  updateProteinPerCalorieSupply();
}

function updateProteinSupply() {
  proteinInput.value = proteinInput.value;
  updateProteinPerCalorieSupply();
}

function updateCalorieSupply() {
  calorieInput.value = calorieInput.value;
  updateProteinPerCalorieSupply();
}

function updateEmptyCalorieSupply() {
  emptycalorieInput.value = emptycalorieInput.value;
  updateProteinPerCalorieSupply();
}

function updateFruitVegSupply() {
  fruitVegInput.value = fruitVegInput.value;
  updateProteinPerCalorieSupply();
}

function updateProteinPerCalorieSupply() {
  proteinPerCalorieSupply.innerHTML = String((100 * 4 * (proteinInput.value - fruitVegInput.value*5/400) / (calorieInput.value - emptycalorieInput.value - fruitVegInput.value)).toFixed(2)) + "%";
  displayProteinFoods();
}

var radioButtons = document.querySelectorAll('input[name="average"]');
radioButtons.forEach (radio => {
  radio.addEventListener("change", updateAverageToUse)
});

proteinInput.onblur = function () {
  updateProteinSupply();
}

calorieInput.onblur = function () {
  updateCalorieSupply();
}

emptycalorieInput.onblur = function () {
  updateEmptyCalorieSupply();
}

fruitVegInput.onblur = function () {
  updateFruitVegSupply();
}

proteinInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    this.blur();
  }
});

calorieInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    this.blur();
  }
});

emptycalorieInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    this.blur();
  }
});

fruitVegInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    this.blur();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 37) {
    changeTable(-1)
  } else if (event.keyCode === 39) {
    changeTable(1)
  }
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    document.getElementById('overlay').style.display = 'none';
  }
});