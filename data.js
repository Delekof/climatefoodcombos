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
  },
  Barley: {
    FU: "1000kcal",
    land_use: {
      lower: 0.3,
      mean: 1.1,
      median: 0.9,
      upper: 2.4,
    },
    emissions: {
      lower: 0.7,
      mean: 1.2,
      median: 1.2,
      upper: 1.6,
    },
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
  },
  Beef: {
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
  Barley: {
    protein: 2.3, // per 100g (beer)
    kcal: 43, // per 100g (beer)
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
  Beef: {
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
};

const proteinFoods = [
  "Beef",
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
  "Mixed Nuts"
];

const carbFoods = [
  "Bread",
  "Corn",
  "Barley",
  "Oats",
  "Rice",
  "Potatoes",
  "Cassava",
];

