function displayProteinFoods() {
  let kappa = (proteinRange.value - fruitVegRange.value * 5 / 400) / (calorieRange.value - emptycalorieRange.value - fruitVegRange.value);
  let tableBody = document.querySelector('#ratiosTable tbody');
  let carbHeaderRow = document.getElementById('carbHeaderRow');

  let tableBody2 = document.querySelector('#emissionsTable tbody');
  let carbHeaderRow2 = document.getElementById('carbHeaderRow2');
  
  let tableBody3 = document.querySelector('#landuseTable tbody');
  let carbHeaderRow3 = document.getElementById('carbHeaderRow3');

  tableBody.innerHTML = ''; // Clear previous rows
  tableBody2.innerHTML = ''; // Clear previous rows
  tableBody3.innerHTML = ''; // Clear previous rows

  // Clear and rebuild the header row
  carbHeaderRow.innerHTML = '<th>Protein/Carb</th>';
  carbFoods.forEach(carbFood => {
    let th = document.createElement('th');
    th.textContent = carbFood;
    carbHeaderRow.appendChild(th);
  });

  // Clear and rebuild the header row
  carbHeaderRow2.innerHTML = '<th>Protein/Carb</th>';
  carbFoods.forEach(carbFood => {
    let th = document.createElement('th');
    th.textContent = carbFood;
    carbHeaderRow2.appendChild(th);
  });

  carbHeaderRow3.innerHTML = '<th>Protein/Carb</th>';
  carbFoods.forEach(carbFood => {
    let th = document.createElement('th');
    th.textContent = carbFood;
    carbHeaderRow3.appendChild(th);
  });

  proteinFoods.forEach(proteinFood => {
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    cell1.textContent = proteinFood;

    let row2 = tableBody2.insertRow();
    let cell2 = row2.insertCell(0);
    cell2.textContent = proteinFood;

    let row3 = tableBody3.insertRow();
    let cell3 = row3.insertCell(0);
    cell3.textContent = proteinFood;

    carbFoods.forEach(carbFood => {
      let cell = row.insertCell();
      let cell2 = row2.insertCell();
      let cell3 = row3.insertCell();
      let proteinRatio = calculateProteinRatio(proteinFood, carbFood, kappa);

      if (isNaN(proteinRatio)) {
        cell.textContent = "F";
        cell.style.backgroundColor = `rgba(123, 123, 123,1)`;
        cell2.textContent = "F";
        cell2.style.backgroundColor = `rgba(123, 123, 123,1)`;
        cell3.textContent = "F";
        cell3.style.backgroundColor = `rgba(123, 123, 123,1)`;
      } else {
        let emissionRatio = calculateRatioEmissions(proteinFood, carbFood, proteinRatio);
        cell.textContent = String((100 * proteinRatio).toFixed(0)) + "%";
        let colorValue = Math.round(proteinRatio * 100);
        cell.style.backgroundColor = `rgba(0, 123, 107, ${colorValue / 100})`; // Greenish color
        cell2.style.backgroundColor = getColorForEmissionRatio(emissionRatio);
        cell2.textContent = emissionRatio.toFixed(2);

        let landuseRatio = calculateRatioLanduse(proteinFood, carbFood, proteinRatio);
        cell3.style.backgroundColor = getColorForLanduseRatio(landuseRatio);
        cell3.textContent = landuseRatio.toFixed(2);
      }
    });
  });
}

function getColorForEmissionRatio(emissionRatio) {
  const globalPerCapitaEmissions = 5;
  const requiredPerCapitaEmissions2050 = 1.3;
  if (isNaN(emissionRatio)) {
    return `grey`
  } else if (emissionRatio > globalPerCapitaEmissions) {
    return 'rgba(255, 0, 0, 0.5)';
  } else if (emissionRatio.toFixed(2) > 2 * requiredPerCapitaEmissions2050) {
    return 'rgba(255, 165, 0, 0.5)';
  } else if (emissionRatio.toFixed(2) > requiredPerCapitaEmissions2050) {
    return 'rgba(255, 255, 0, 0.5)';
  } else if (emissionRatio.toFixed(2) > requiredPerCapitaEmissions2050 / 2) {
    return 'rgba(0, 128, 0, 0.5)';
  } else {
    return 'rgba(64, 128, 192, 0.5)';
  }
}

function getColorForLanduseRatio(emissionRatio) {
  const globalPerCapitaEmissions = .61;
  if (isNaN(emissionRatio)) {
    return `grey`
  } else if (emissionRatio.toFixed(2) > globalPerCapitaEmissions) {
    return 'rgba(255, 0, 0, 0.5)';
  } else if (emissionRatio.toFixed(2) > globalPerCapitaEmissions*.75) {
    return 'rgba(255, 165, 0, 0.5)';
  } else if (emissionRatio.toFixed(2) > globalPerCapitaEmissions*.5) {
    return 'rgba(255, 255, 0, 0.5)';
  } else if (emissionRatio.toFixed(2) > globalPerCapitaEmissions*.25) {
    return 'rgba(0, 128, 0, 0.5)';
  } else {
    return 'rgba(64, 128, 192, 0.5)';
  }
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

proteinPerCalorieSupply.innerHTML = String((100 * 4 * (proteinRange.value - fruitVegRange.value * 5 / 400) / (calorieRange.value - emptycalorieRange.value - fruitVegRange.value)).toFixed(2)) + "%";

let currentTableIndex = 0;
const tables = document.querySelectorAll('.table-wrapper');

function toggleLegend() {
  // const colorLegend = document.querySelector('.color-legend');
  // if (currentTableIndex == 1){
  //   colorLegend.style.visibility = 'visible';
  // } else {
  //   colorLegend.style.visibility = 'hidden';
  // }
}

toggleLegend()

function changeTable(direction) {
  tables[currentTableIndex].classList.remove('active');
  currentTableIndex += direction;

  if (currentTableIndex < 0) {
    currentTableIndex = tables.length - 1;
  } else if (currentTableIndex >= tables.length) {
    currentTableIndex = 0;
  }

  toggleLegend()

  tables[currentTableIndex].classList.add('active');
}

function updateButtons() {
  document.getElementById('prevBtn').disabled = false;
  document.getElementById('nextBtn').disabled = false;
}

// Initial display
tables[currentTableIndex].classList.add('active');
updateButtons();

// Initial display on page load
// Ensure external data is processed correctly before any other operations
calculateProteinPerKcal(nutritional_data);
calculateEmissionsPerKcal(nutritional_data);
calculateLandusePerKcal(nutritional_data);
displayProteinFoods();
setPreset('unitedStates')