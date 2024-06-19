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
        protein: 56,
        calorie: 2000,
        fruitVeg: 400,
        emptyCalorie: 400,
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