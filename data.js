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
      lower: NaN,
      mean: NaN,
      median: NaN,
      upper: NaN,
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
      lower: NaN,
      mean: NaN,
      median: NaN,
      upper: NaN,
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
    protein: 9.4, // per 100g
    kcal: 265, // per 100g
  },
  Corn: {
    protein: 9.42, // per 100g
    kcal: 365, // per 100g
  },
  Oats: {
    protein: 16.89, // per 100g
    kcal: 389, // per 100g
  },
  Rice: {
    protein: 2.69, // per 100g
    kcal: 130, // per 100g (cooked)
  },
  Potatoes: {
    protein: 2.02, // per 100g
    kcal: 77, // per 100g (cooked)
  },
  Cassava: {
    protein: 1.36, // per 100g
    kcal: 160, // per 100g
  },
  "Mixed Pulses": {
    protein: 7.63, // per 100g (cooked mixed pulses)
    kcal: 114, // per 100g (cooked mixed pulses)
  },
  Peas: {
    protein: 5.42, // per 100g (cooked)
    kcal: 81, // per 100g (cooked)
  },
  "Mixed Nuts": {
    protein: 20.99, // per 100g (mixed nuts)
    kcal: 607, // per 100g (mixed nuts)
  },
  Peanuts: {
    protein: 25.8, // per 100g
    kcal: 567, // per 100g
  },
  Tofu: {
    protein: 8.15, // per 100g
    kcal: 76, // per 100g
  },
  "Beef (dairy herd)": {
    protein: 26.04, // per 100g (cooked)
    kcal: 250, // per 100g (cooked)
  },
  "Beef (beef herd)": {
    protein: 26.04, // per 100g (cooked)
    kcal: 250, // per 100g (cooked)
  },
  Lamb: {
    protein: 25.6, // per 100g (cooked)
    kcal: 282, // per 100g (cooked)
  },
  Pork: {
    protein: 21.43, // per 100g (cooked)
    kcal: 242, // per 100g (cooked)
  },
  Chicken: {
    protein: 25.98, // per 100g (cooked)
    kcal: 239, // per 100g (cooked)
  },
  Cheese: {
    protein: 24.99, // per 100g
    kcal: 402, // per 100g
  },
  Eggs: {
    protein: 12.58, // per 100g
    kcal: 155, // per 100g
  },
  "Farmed Fish": {
    protein: 18.76, // per 100g (salmon, farmed)
    kcal: 206, // per 100g (salmon, farmed)
  },
  "Farmed Shrimp": {
    protein: 20.03, // per 100g (shrimp)
    kcal: 83, // per 100g (shrimp)
  },
  "Quorn vegan pieces*": {
    protein: 15.3,
    kcal: 94,
  },
  "Planted chicken*": {
    protein: 24,
    kcal: 151
  },
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
  "Peanuts",
  "Tofu",
  "Mixed Pulses",
  "Peas",
  "Mixed Nuts",
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
  "Bread",
  "Potatoes",
  "Corn",
  "Cassava",
  "Oats",
  "Rice",
  // "Peanuts",
  // "Mixed Nuts",
];
