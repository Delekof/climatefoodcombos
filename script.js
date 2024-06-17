// Assuming nutritional_data is already defined and imported

function calculateProteinPerKcal(data) {
  for (let food in data) {
    let protein = data[food].protein;
    let kcal = data[food].kcal;
    data[food].protein_per_kcal = parseFloat((protein / kcal).toFixed(2));
  }
}
// Ensure external data is processed correctly before any other operations
calculateProteinPerKcal(nutritional_data);

function calculateEmissionsPerKcal(data) {
  for (let food in data) {
    let emissions = data_dict[food].emissions.median;
    if (data_dict[food].FU == "1000kcal"){
      data[food].emissions_per_kcal = parseFloat((emissions / 1000).toFixed(5));
    } else if (data_dict[food].FU == "100g protein"){
      data[food].emissions_per_kcal = parseFloat((data[food].protein_per_kcal*emissions / 100).toFixed(5));
    }
  }
  console.log(data);
}
calculateEmissionsPerKcal(nutritional_data);

function calculateProteinRatio(proteinFood, carbFood, kappa) {
  let kappac = nutritional_data[carbFood].protein_per_kcal;
  let kappap = nutritional_data[proteinFood].protein_per_kcal;
  if (kappap>kappac){
    return ((kappa - kappac) / (kappap - kappac));
  } else {
    return ((kappa - kappap) / (kappac - kappap));
  }
}

function displayProteinFoods() {
  let kappa = (proteinRange.value / (calorieRange.value - emptycalorieRange.value - fruitVegRange.value));
  let tableBody = document.querySelector('#ratiosTable tbody');
  let carbHeaderRow = document.getElementById('carbHeaderRow');

  tableBody.innerHTML = ''; // Clear previous rows

  // Clear and rebuild the header row
  carbHeaderRow.innerHTML = '<th>Protein/Carb</th>';
  carbFoods.forEach(carbFood => {
    let th = document.createElement('th');
    th.textContent = carbFood;
    carbHeaderRow.appendChild(th);
  });

  proteinFoods.forEach(proteinFood => {
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    cell1.textContent = proteinFood;

    carbFoods.forEach(carbFood => {
      let cell = row.insertCell();
      let proteinRatio = calculateProteinRatio(proteinFood, carbFood, kappa);

      if (isNaN(proteinRatio) || proteinRatio > 1) {
        cell.textContent = "F";
        cell.style.backgroundColor = `rgba(123, 123, 123,1)`;
      } else if (proteinRatio < 0) {
      	cell.textContent = "0%";
        cell.style.backgroundColor = `rgba(123, 123, 123,0)`;
      } else {
        cell.textContent = String((100 * proteinRatio).toFixed(0)) + "%";
        let colorValue = Math.round(proteinRatio * 100);
        cell.style.backgroundColor = `rgba(0, 123, 107, ${colorValue / 100})`; // Greenish color
      }
    });
  });
}

var proteinRange = document.getElementById("proteinRange");
var proteinInput = document.getElementById("proteinInput");

var calorieRange = document.getElementById("calorieRange");
var calorieInput = document.getElementById("calorieInput");

var emptycalorieRange = document.getElementById("emptycalorieRange");
var emptycalorieInput = document.getElementById("emptycalorieInput");

var fruitVegRange = document.getElementById("fruitVegRange");
var fruitVegInput = document.getElementById("fruitVegInput");

var proteinPerCalorieSupply = document.getElementById("proteinpercalorieSupply");

proteinPerCalorieSupply.innerHTML = String((100 * 4 * (proteinRange.value - fruitVegRange.value*5/400) / ((calorieRange.value - emptycalorieRange.value - fruitVegRange.value))).toFixed(2)) + "%";

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

function setPreset(preset) {
  const presets = {
    highIncome: {
      protein: 115,
      calorie: 3500,
      fruitVeg: 215,
      emptyCalorie: 1350,
    },
    unitedStates: {
      protein: 124,
      calorie: 3900,
      fruitVeg: 220,
      emptyCalorie: 1715,
    },
    china: {
      protein: 125,
      calorie: 3400,
      fruitVeg: 440,
      emptyCalorie: 605,
    },
    india: {
      protein: 70,
      calorie: 2570,
      fruitVeg: 160,
      emptyCalorie: 590,
    },
    health: {
      protein: 120,
      calorie: 2500,
      fruitVeg: 500,
      emptyCalorie: 0,
    },
    guidelines: {
      protein: 100,
      calorie: 2500,
      fruitVeg: 400,
      emptyCalorie: 500,
    }
  };

  const selectedPreset = presets[preset];

  proteinRange.value = selectedPreset.protein;
  proteinInput.value = selectedPreset.protein;

  calorieRange.value = selectedPreset.calorie;
  calorieInput.value = selectedPreset.calorie;

  emptycalorieRange.value = selectedPreset.emptyCalorie;
  emptycalorieInput.value = selectedPreset.emptyCalorie;

  fruitVegRange.value = selectedPreset.fruitVeg;
  fruitVegInput.value = selectedPreset.fruitVeg;

  updateProteinPerCalorieSupply();
  displayProteinFoods();
}

// Initial display on page load
displayProteinFoods();

