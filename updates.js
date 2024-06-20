function updateAverageToUse() {
  averageToUse = document.querySelector('input[name="average"]:checked').value
  calculateEmissionsPerKcal(nutritional_data);
  calculateLandusePerKcal(nutritional_data);
  updateProteinPerCalorieSupply();
}

function updateProteinSupply() {
  proteinInput.value = proteinRange.value;
  updateProteinPerCalorieSupply();
}

function updateCalorieSupply() {
  calorieInput.value = calorieRange.value;
  updateProteinPerCalorieSupply();
}

function updateEmptyCalorieSupply() {
  emptycalorieInput.value = emptycalorieRange.value;
  updateProteinPerCalorieSupply();
}

function updateFruitVegSupply() {
  fruitVegInput.value = fruitVegRange.value;
  updateProteinPerCalorieSupply();
}

function updateProteinPerCalorieSupply() {
  proteinPerCalorieSupply.innerHTML = String((100 * 4 * (proteinRange.value - fruitVegRange.value*5/400) / (calorieRange.value - emptycalorieRange.value - fruitVegRange.value)).toFixed(2)) + "%";
  displayProteinFoods();
}

var radioButtons = document.querySelectorAll('input[name="average"]');
radioButtons.forEach (radio => {
  radio.addEventListener("change", updateAverageToUse)
});
proteinRange.oninput = updateProteinSupply;
calorieRange.oninput = updateCalorieSupply;
emptycalorieRange.oninput = updateEmptyCalorieSupply;
fruitVegRange.oninput = updateFruitVegSupply;

proteinInput.onblur = function () {
  proteinRange.value = this.value;
  updateProteinSupply();
}

calorieInput.onblur = function () {
  calorieRange.value = this.value;
  updateCalorieSupply();
}

emptycalorieInput.onblur = function () {
  emptycalorieRange.value = this.value;
  updateEmptyCalorieSupply();
}

fruitVegInput.onblur = function () {
  fruitVegRange.value = this.value;
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