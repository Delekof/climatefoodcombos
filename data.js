const data_dict = {
  Bread: {
    FU: "100g protein",
    land_use: {
      lower: 1.1,
      mean: 3.9,
      median: 2.7,
      upper: 7.9,
    },
    emissions: {
      lower: 0.8,
      mean: 1.6,
      median: 1.3,
      upper: 2.3,
    },
    nutrient_density: 94 // kcal kg–1
  },
  Corn: {
    FU: "1000kcal",
    land_use: {
      lower: 1.1,
      mean: 2.9,
      median: 1.8,
      upper: 5.7,
    },
    emissions: {
      lower: 0.7,
      mean: 1.7,
      median: 1.2,
      upper: 2.3,
    },
    nutrient_density: 4165 // kcal kg–1
  },
  Oats: {
    FU: "1000kcal",
    land_use: {
      lower: 2.9,
      mean: 7.6,
      median: 7.7,
      upper: 12.9,
    },
    emissions: {
      lower: 0.9,
      mean: 2.5,
      median: 2.6,
      upper: 4.1,
    },
    nutrient_density: 2605 // kcal kg–1
  },
  Rice: {
    FU: "1000kcal",
    land_use: {
      lower: 1.1,
      mean: 2.8,
      median: 2.2,
      upper: 6.2,
    },
    emissions: {
      lower: 1.5,
      mean: 4.5,
      median: 3.7,
      upper: 8.8,
    },
    nutrient_density: 3685 // kcal kg–1
  },
  Potatoes: {
    FU: "1000kcal",
    land_use: {
      lower: 0.4,
      mean: 0.9,
      median: 0.8,
      upper: 1.4,
    },
    emissions: {
      lower: 0.2,
      mean: 0.5,
      median: 0.5,
      upper: 0.6,
    },
    nutrient_density: 730 // kcal kg–1
  },
  Cassava: {
    FU: "1000kcal",
    land_use: {
      lower: 0.8,
      mean: 1.8,
      median: 1.3,
      upper: 3.2,
    },
    emissions: {
      lower: 0.4,
      mean: 1.3,
      median: 1.1,
      upper: 2.1,
    },
    nutrient_density: 975 // kcal kg–1
  },
  "Mixed Pulses": {
    FU: "100g protein",
    land_use: {
      lower: 9.9,
      mean: 15.6,
      median: 12.2,
      upper: 41.3,
    },
    emissions: {
      lower: 1.0,
      mean: 1.8,
      median: 1.4,
      upper: 3.8,
    },
    nutrient_density: 220 // g kg–1
  },
  Peas: {
    FU: "100g protein",
    land_use: {
      lower: 2.8,
      mean: 7.5,
      median: 6.7,
      upper: 14.2,
    },
    emissions: {
      lower: 0.6,
      mean: 1.0,
      median: 0.8,
      upper: 1.7,
    },
    nutrient_density: 215 // g kg–1
  },
  "Mixed Nuts": {
    FU: "100g protein",
    land_use: {
      lower: 4.5,
      mean: 13.0,
      median: 8.7,
      upper: 26.6,
    },
    emissions: {
      lower: -3.7,
      mean: 0.4,
      median: -1.3,
      upper: 3.8,
    },
    nutrient_density: 160 // g kg–1
  },
  Peanuts: {
    FU: "100g protein",
    land_use: {
      lower: 4.7,
      mean: 9.1,
      median: 7.9,
      upper: 15.4,
    },
    emissions: {
      lower: 1.6,
      mean: 3.2,
      median: 3.3,
      upper: 5.8,
    },
    nutrient_density: 260 // g kg–1
  },
  Tofu: {
    FU: "100g protein",
    land_use: {
      lower: 1.8,
      mean: 3.5,
      median: 3.4,
      upper: 4.9,
    },
    emissions: {
      lower: 1.6,
      mean: 3.2,
      median: 2.6,
      upper: 5.6,
    },
    nutrient_density: 160 // g kg–1
  },
  "Beef (beef herd)": {
    FU: "100g protein",
    land_use: {
      lower: 82.8,
      mean: 326.2,
      median: 170.4,
      upper: 735.1,
    },
    emissions: {
      lower: 40.4,
      mean: 99.5,
      median: 60.4,
      upper: 209.9,
    },
    nutrient_density: 200 // g kg–1
  },
  "Beef (dairy herd)": {
    FU: "100g protein",
    land_use: {
      lower: 14.4,
      mean: 43.2,
      median: 25.9,
      upper: 106.4,
    },
    emissions: {
      lower: 17.9,
      mean: 33.3,
      median: 34.1,
      upper: 56.7,
    },
    nutrient_density: 200 // g kg–1
},
  Lamb: {
    FU: "100g protein",
    land_use: {
      lower: 60.1,
      mean: 369.8,
      median: 127.4,
      upper: 442.3,
    },
    emissions: {
      lower: 24.5,
      mean: 39.7,
      median: 40.6,
      upper: 54.4,
    },
    nutrient_density: 200 // g kg–1
  },
  Pork: {
    FU: "100g protein",
    land_use: {
      lower: 7.8,
      mean: 17.4,
      median: 13.4,
      upper: 31.1,
    },
    emissions: {
      lower: 7.4,
      mean: 12.3,
      median: 10.6,
      upper: 22.3,
    },
    nutrient_density: 160 // g kg–1
  },
  Chicken: {
    FU: "100g protein",
    land_use: {
      lower: 6.7,
      mean: 12.2,
      median: 11.0,
      upper: 16.0,
    },
    emissions: {
      lower: 4.2,
      mean: 9.9,
      median: 7.5,
      upper: 20.1,
    },
    nutrient_density: 175 // g kg–1
  },
  Cheese: {
    FU: "100g protein",
    land_use: {
      lower: 9.6,
      mean: 87.8,
      median: 20.2,
      upper: 239.2,
    },
    emissions: {
      lower: 10.9,
      mean: 23.9,
      median: 18.6,
      upper: 39.3,
    },
    nutrient_density: 225 // g kg–1
  },
  Eggs: {
    FU: "100g protein",
    land_use: {
      lower: 4.4,
      mean: 6.3,
      median: 5.7,
      upper: 8.8,
    },
    emissions: {
      lower: 2.9,
      mean: 4.7,
      median: 4.2,
      upper: 8.4,
    },
    nutrient_density: 110 // g kg–1
  },
  "Farmed Fish": {
    FU: "100g protein",
    land_use: {
      lower: 0.8,
      mean: 8.4,
      median: 5.6,
      upper: 10.5,
    },
    emissions: {
      lower: 5.7,
      mean: 13.6,
      median: 7.9,
      upper: 26.5,
    },
    nutrient_density: 230 // g kg–1
  },
  "Farmed Shrimp": {
    FU: "100g protein",
    land_use: {
      lower: 0.6,
      mean: 3.0,
      median: 0.8,
      upper: 5.2,
    },
    emissions: {
      lower: 8.0,
      mean: 26.9,
      median: 14.7,
      upper: 52.1,
    },
    nutrient_density: 150 // g kg–1
  },
  "Quorn vegan pieces*": {
    FU: "100g protein",
    land_use: {
      lower: 3,
      mean: 3,
      median: 3,
      upper: 3,
    },
    emissions: {
      lower: 1.5,
      mean: 1.5,
      median: 1.5,
      upper: 1.5,
    },
    nutrient_density: 100 // value not provided
  },
  "Planted chicken*": {
    FU: "100g protein",
    land_use: {
      lower: 3,
      mean: 3,
      median: 3,
      upper: 3,
    },
    emissions: {
      lower: 0.68,
      mean: 0.68,
      median: 0.68,
      upper: 0.68,
    },
    nutrient_density: 100 // value not provided
  },
};

const nutritional_data = {
  Bread: {
    protein: 9.4, // per 100g cooked
    kcal: 265, // per 100g cooked
    portion: {
      grams: 30, // typical portion size in grams
      description: "slice" // description of the portion
    }
  },
  Corn: {
    protein: 4.4, // per 100g cooked (assuming typical preparation like tortilla)
    kcal: 200, // per 100g cooked (assuming typical preparation like tortilla)
    portion: {
      grams: 32, // typical portion size in grams
      description: "tortilla" // description of the portion
    }
  },
  Oats: {
    protein: 1.89, // per 100g cooked
    kcal: 71, // per 100g cooked
    portion: {
      grams: 150, // typical portion size in grams
      description: "cup" // description of the portion
    }
  },
  Rice: {
    protein: 2.69, // per 100g cooked
    kcal: 130, // per 100g cooked
    portion: {
      grams: 150, // typical portion size in grams
      description: "cup" // description of the portion
    }
  },
  Potatoes: {
    protein: 1.87, // per 100g cooked
    kcal: 87, // per 100g cooked
    portion: {
      grams: 150, // typical portion size in grams
      description: "medium potatoe" // description of the portion
    }
  },
  Cassava: {
    protein: 1.36, // per 100g cooked
    kcal: 160, // per 100g cooked
    portion: {
      grams: 150, // typical portion size in grams
      description: "cup" // description of the portion
    }
  },
  "Mixed Pulses": {
    protein: 7.63, // per 100g cooked
    kcal: 114, // per 100g cooked
    portion: {
      grams: 150, // typical portion size in grams
      description: "cup" // description of the portion
    }
  },
  Peas: {
    protein: 5.42, // per 100g cooked
    kcal: 80, // per 100g cooked
    portion: {
      grams: 160, // typical portion size in grams
      description: "cup" // description of the portion
    }
  },
  "Mixed Nuts": {
    protein: 20.99, // per 100g cooked
    kcal: 607, // per 100g cooked
    portion: {
      grams: 30, // typical portion size in grams
      description: "handful" // description of the portion
    }
  },
  Peanuts: {
    protein: 24.35, // per 100g cooked (assuming typical preparation)
    kcal: 567, // per 100g cooked (assuming typical preparation)
    portion: {
      grams: 30, // typical portion size in grams
      description: "handful" // description of the portion
    }
  },
  Tofu: {
    protein: 13, // per 100g cooked (assuming firm to extra firm and cooked)
    kcal: 140, // per 100g cooked (assuming firm to extra firm and cooked)
    portion: {
      grams: 200, // typical portion size in grams
      description: "block" // description of the portion
    }
  },
  "Beef (dairy herd)": {
    protein: 21.57, // per 100g cooked (average of beef types)
    kcal: 250, // per 100g cooked (average of beef types)
    portion: {
      grams: 100, // typical portion size in grams
      description: "100g unit" // description of the portion
    }
  },
  "Beef (beef herd)": {
    protein: 21.57, // per 100g cooked (average of beef types)
    kcal: 250, // per 100g cooked (average of beef types)
    portion: {
      grams: 100, // typical portion size in grams
      description: "100g unit" // description of the portion
    }
  },
  "Lamb": {
    protein: 20.56, // per 100g cooked
    kcal: 282, // per 100g cooked
    portion: {
      grams: 100, // typical portion size in grams
      description: "100g unit" // description of the portion
    }
  },
  "Pork": {
    protein: 21.14, // per 100g cooked
    kcal: 242, // per 100g cooked
    portion: {
      grams: 100, // typical portion size in grams
      description: "100g unit" // description of the portion
    }
  },
  "Chicken": {
    protein: 25.98, // per 100g cooked (average of chicken types)
    kcal: 239, // per 100g cooked (average of chicken types)
    portion: {
      grams: 100, // typical portion size in grams
      description: "100g unit" // description of the portion
    }
  },
  Cheese: {
    protein: 24.99, // per 100g cooked
    kcal: 402, // per 100g cooked
    portion: {
      grams: 25, // typical portion size in grams
      description: "slice" // description of the portion
    }
  },
  Eggs: {
    protein: 12.58, // per 100g cooked
    kcal: 155, // per 100g cooked
    portion: {
      grams: 50, // typical portion size in grams
      description: "large egg" // description of the portion
    }
  },
  "Farmed Fish": {
    protein: 18.76, // per 100g cooked
    kcal: 206, // per 100g cooked
    portion: {
      grams: 100, // typical portion size in grams
      description: "100g unit" // description of the portion
    }
  },
  "Farmed Shrimp": {
    protein: 20.03, // per 100g cooked
    kcal: 83, // per 100g cooked
    portion: {
      grams: 100, // typical portion size in grams
      description: "100g unit" // description of the portion
    }
  },
  "Quorn vegan pieces*": {
    protein: 15.3, // per 100g cooked
    kcal: 94, // per 100g cooked
    portion: {
      grams: 100, // typical portion size in grams
      description: "100g unit" // description of the portion
    }
  },
  "Planted chicken*": {
    protein: 24, // per 100g cooked
    kcal: 151, // per 100g cooked
    portion: {
      grams: 100, // typical portion size in grams
      description: "100g unit" // description of the portion
    }
  },
};

const sustainabilityData = {
  "Beef (beef herd)": { 
    ethical: 0, // Ethical concerns: High animal welfare issues, significant land and water use
    ecologicallySustainable: 0 // High land use, deforestation, overgrazing, and methane emissions
  },
  "Beef (dairy herd)": { 
    ethical: 0, // Ethical concerns: Animal welfare issues, significant land and water use
    ecologicallySustainable: 0 // Similar concerns as beef herd
  },
  "Lamb": { 
    ethical: 0, // Ethical concerns: High animal welfare issues, significant land and water use
    ecologicallySustainable: 0 // High land use, overgrazing, and methane emissions
  },
  "Farmed Shrimp": { 
    ethical: 0, // Ethical concerns: Poor working conditions, habitat destruction
    ecologicallySustainable: 0 // Destruction of mangroves, pollution
  },
  "Cheese": { 
    ethical: 0, // Ethical concerns: Animal welfare issues, high land and water use
    ecologicallySustainable: 0 // High land and water use, impacts of dairy farming
  },
  "Farmed Fish": { 
    ethical: 0, // Ethical concerns: Depletion of wild fish stocks for feed, disease spread
    ecologicallySustainable: 0 // Overfishing of feed, pollution, disease spread to wild fish
  },
  "Pork": { 
    ethical: 0, // Ethical concerns: Animal welfare issues, significant land and water use
    ecologicallySustainable: 0 // High feed conversion ratio, waste management issues
  },
  "Chicken": { 
    ethical: 0, // Ethical concerns: Animal welfare issues, significant land and water use
    ecologicallySustainable: 1 // Less impactful than beef, but still concerns with feed and waste
  },
  "Eggs": { 
    ethical: 0, // Ethical concerns: Animal welfare issues, significant land and water use
    ecologicallySustainable: 1 // Similar concerns as chicken, but somewhat lower impact
  },
  "Tofu": { 
    ethical: 2, // Ethical: Plant-based, generally considered humane
    ecologicallySustainable: 2 // Low impact, but dependent on sustainable soybean farming practices
  },
  "Mixed Pulses": { 
    ethical: 2, // Ethical: Plant-based, generally considered humane
    ecologicallySustainable: 2 // Generally low impact, nitrogen-fixing benefits for soil
  },
  "Peas": { 
    ethical: 2, // Ethical: Plant-based, generally considered humane
    ecologicallySustainable: 2 // Low impact, nitrogen-fixing benefits for soil
  },
  "Quorn vegan pieces*": { 
    ethical: 2, // Ethical: Plant-based, generally considered humane
    ecologicallySustainable: 2 // Low impact, fungal protein source
  },
  "Planted chicken*": { 
    ethical: 2, // Ethical: Plant-based, generally considered humane
    ecologicallySustainable: 2 // Plant-based, low impact
  },
  "Bread": { 
    ethical: 2, // Ethical: Plant-based, generally considered humane
    ecologicallySustainable: 2 // Depends on agricultural practices, pesticide use, soil health
  },
  "Potatoes": { 
    ethical: 2, // Ethical: Plant-based, generally considered humane
    ecologicallySustainable: 2 // Generally low impact, efficient use of land
  },
  "Corn": { 
    ethical: 2, // Ethical: Plant-based, generally considered humane
    ecologicallySustainable: 2 // Concerns with monocropping, pesticide use, soil depletion
  },
  "Cassava": { 
    ethical: 2, // Ethical: Plant-based, generally considered humane
    ecologicallySustainable: 2 // Generally low impact, resilient crop
  },
  "Oats": { 
    ethical: 2, // Ethical: Plant-based, generally considered humane
    ecologicallySustainable: 2 // Generally low impact, good for soil health
  },
  "Rice": { 
    ethical: 2, // Ethical: Plant-based, generally considered humane
    ecologicallySustainable: 1 // Varies widely; water use and methane emissions are concerns
  },
  "Mixed Nuts": { 
    ethical: 2, // Ethical: Plant-based, generally considered humane
    ecologicallySustainable: 1 // Varies by type; some nuts have high water use, potential habitat destruction
  },
  "Peanuts": { 
    ethical: 2, // Ethical: Plant-based, generally considered humane
    ecologicallySustainable: 2 // Generally low impact, nitrogen-fixing benefits for soil
  }
};

const proteinFoods = [
  "Beef (beef herd)",
  "Beef (dairy herd)",
  "Lamb",
  "Farmed Shrimp",
  "Cheese",
  "Farmed Fish",
  "Pork",
  "Chicken",
  "Eggs",
  // "Peanuts",
  "Tofu",
  "Mixed Pulses",
  "Peas",
  // "Mixed Nuts",
  "Quorn vegan pieces*",
  "Planted chicken*",
];

// const carbFoods = [
//   "Bread",
//   "Corn",
//   "Barley",
//   "Oats",
//   "Rice",
//   "Potatoes",
//   "Cassava",
// ];

const carbFoods = [
  "Self",
  "Bread",
  "Potatoes",
  "Corn",
  "Cassava",
  "Oats",
  "Rice",
  "Mixed Nuts",
  "Peanuts",
];
