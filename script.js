function calculateProteinPerKcal(data) {
    for (let food in data) {
      let protein = data[food].protein;
      let kcal = data[food].kcal;
      data[food].protein_per_kcal = parseFloat((protein / kcal).toFixed(2));
    }
  }
  
  function displayProteinFoods() {
    let proteinRatio = calculateProteinRatio("Tofu", "Bread", (proteinRange.value / (calorieRange.value - emptycalorieRange.value)));
    document.getElementById('demo1').innerHTML = String((100 * proteinRatio).toFixed(0)) + "%";
  }
  
  function displayCarbFoods() {
    let carbRatio = 1 - calculateProteinRatio("Tofu", "Bread", (proteinRange.value / (calorieRange.value - emptycalorieRange.value)));
    document.getElementById('demo2').innerHTML = String((100 * carbRatio).toFixed(0)) + "%";
  }
  
  var proteinRange = document.getElementById("proteinRange");
  var proteinInput = document.getElementById("proteinInput");
  
  var calorieRange = document.getElementById("calorieRange");
  var calorieInput = document.getElementById("calorieInput");
  
  var emptycalorieRange = document.getElementById("emptycalorieRange");
  var emptycalorieInput = document.getElementById("emptycalorieInput");
  
  var proteinPerCalorieSupply = document.getElementById("proteinpercalorieSupply");
  
  proteinPerCalorieSupply.innerHTML = String((100 * 4 * proteinRange.value / (calorieRange.value - emptycalorieRange.value)).toFixed(2)) + "%";
  
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
  
  function updateProteinPerCalorieSupply() {
    proteinPerCalorieSupply.innerHTML = String((100 * 4 * proteinRange.value / (calorieRange.value - emptycalorieRange.value)).toFixed(2)) + "%";
  }
  
  proteinRange.oninput = debounce(updateProteinSupply, 300);
  calorieRange.oninput = debounce(updateCalorieSupply, 300);
  emptycalorieRange.oninput = debounce(updateEmptyCalorieSupply, 300);
  
  proteinInput.onblur = function() {
    proteinRange.value = this.value;
    updateProteinSupply();
  };
  
  calorieInput.onblur = function() {
    calorieRange.value = this.value;
    updateCalorieSupply();
  };
  
  emptycalorieInput.onblur = function() {
    emptycalorieRange.value = this.value;
    updateEmptyCalorieSupply();
  };
  
  proteinInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      this.blur();
    }
  });
  
  calorieInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      this.blur();
    }
  });
  
  emptycalorieInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      this.blur();
    }
  });
  
  function calculateProteinRatio(proteinFood, carbFood, kappa) {
    let kappac = nutritional_data[carbFood].protein_per_kcal;
    let kappap = nutritional_data[proteinFood].protein_per_kcal;
    console.log(kappac, kappap, kappa);
    return ((kappa - kappac) / (kappap - kappac));
  }
  
  // Debounce function to limit the rate at which a function can fire
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  
  // Ensure external data is processed correctly
  calculateProteinPerKcal(nutritional_data);
  