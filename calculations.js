// Assuming nutritional_data is already defined and imported

function calculateProteinPerKcal(data) {
    for (let food in data) {
      let protein = data[food].protein;
      let kcal = data[food].kcal;
      data[food].protein_per_kcal = parseFloat((protein / kcal).toFixed(2));
    }
}
  
  
  function calculateEmissionsPerKcal(data) {
    for (let food in data) {
      let emissions = data_dict[food].emissions[averageToUse];
      if (data_dict[food].FU == "1000kcal"){
        data[food].emissions_per_kcal = parseFloat((emissions / data_dict[food].nutrient_density).toFixed(5));
      } else if (data_dict[food].FU == "100g protein"){
        data[food].emissions_per_kcal = parseFloat((data[food].protein_per_kcal*emissions / data_dict[food].nutrient_density).toFixed(5));
      }
    }
  }

  function calculateLandusePerKcal(data) {
    for (let food in data) {
      let land_use = data_dict[food].land_use[averageToUse];
      if (data_dict[food].FU == "1000kcal"){
        data[food].landuse_per_kcal = parseFloat((land_use / data_dict[food].nutrient_density).toFixed(5));
      } else if (data_dict[food].FU == "100g protein"){
        data[food].landuse_per_kcal = parseFloat((data[food].protein_per_kcal*land_use / data_dict[food].nutrient_density).toFixed(5));
      }
    }
  }
  
  function calculateProteinRatio(proteinFood, carbFood, kappa) {
    let kappac = nutritional_data[carbFood].protein_per_kcal;
    let kappap = nutritional_data[proteinFood].protein_per_kcal;
    if (kappac>kappa){
      return 0;
    } else if (kappap>kappa) {
      return ((kappa - kappac) / (kappap - kappac));
    } else {
      return NaN
    }
  }
  
  function calculateRatioEmissions(proteinFood, carbFood, kappa) {
    let calories = (calorieRange.value - emptycalorieRange.value - fruitVegRange.value)
    let protein_emissions = kappa*calories * nutritional_data[proteinFood].emissions_per_kcal
    let carb_emissions = (1-kappa)*calories * nutritional_data[carbFood].emissions_per_kcal
    //other to be included to account for fruit/veg and empty calorie emissions
    let other_emissions = (fruitVegRange.value* 0.6/1000 + emptycalorieRange.value* 0.6/1000)*0
    return (protein_emissions + carb_emissions + other_emissions)*365/1000
  }

  function calculateRatioLanduse(proteinFood, carbFood, kappa) {
    let calories = (calorieRange.value - emptycalorieRange.value - fruitVegRange.value)
    if (isNaN(nutritional_data[proteinFood].landuse_per_kcal)==false && isNaN(nutritional_data[carbFood].landuse_per_kcal)==false){
        let protein_landuse = kappa*calories * nutritional_data[proteinFood].landuse_per_kcal
        let carb_landuse = (1-kappa)*calories * nutritional_data[carbFood].landuse_per_kcal
        //other to be included to account for fruit/veg and empty calorie landuse
        let other_landuse = (fruitVegRange.value* 0.6/10000 + emptycalorieRange.value* 0.6/10000)*0
        return (protein_landuse + carb_landuse + other_landuse)*365/10000
    } else {
        return NaN
    }
  }