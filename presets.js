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
        calorie: 2000,
        fruitVeg: 300,
        emptyCalorie: 200,
      },
      guidelines: {
        protein: 56,
        calorie: 2000,
        fruitVeg: 250,
        emptyCalorie: 600,
      }
    };
  
    const selectedPreset = presets[preset];
  
    proteinInput.value = selectedPreset.protein;
  
    calorieInput.value = selectedPreset.calorie;
  
    emptycalorieInput.value = selectedPreset.emptyCalorie;
  
    fruitVegInput.value = selectedPreset.fruitVeg;
  
    updateProteinPerCalorieSupply();
    displayProteinFoods();
}