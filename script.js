function displayProteinFoods() {
  let kappa = (proteinRange.value - fruitVegRange.value * 5 / 400) / (calorieRange.value - emptycalorieRange.value - fruitVegRange.value);
  
  let tables = [
    "#ratiosTable tbody",
    '#emissionsTable tbody',
    '#landuseTable tbody',
    '#ethicalTable tbody',
    '#sustainabilityTable tbody',
    '#salvadorScoreTable tbody',
  ];

  let headerRows = [
    'carbHeaderRow1',
    'carbHeaderRow2',
    'carbHeaderRow3',
    'carbHeaderRow4',
    'carbHeaderRow5',
    'carbHeaderRow6',
  ];

  let tableIndex = 0;
  let cells = [];

  for (let table of tables) {
    let tableBody = document.querySelector(table);
    let carbHeaderRow = document.getElementById(headerRows[tableIndex]);
    tableBody.innerHTML = ''; // Clear previous rows

    // Clear and rebuild the header row
    carbHeaderRow.innerHTML = '<th></th>';
    carbFoods.forEach(carbFood => {
      let th = document.createElement('th');
      th.textContent = carbFood;
      carbHeaderRow.appendChild(th);
    });

    cells[tableIndex] = [];

    proteinFoods.forEach((proteinFood, proteinIndex) => {
      let row = tableBody.insertRow();
      let cell = row.insertCell(0);
      cell.textContent = proteinFood;
      cell.style.backgroundColor = "#00796b"
      cell.style.color = "white"
      
      cells[tableIndex][proteinIndex] = [];

      carbFoods.forEach((carbFood, carbIndex) => {
        let cell = row.insertCell(carbIndex + 1);
        cells[tableIndex][proteinIndex][carbIndex] = cell;
      });
    });

    tableIndex += 1;
  }

  proteinFoods.forEach((proteinFood, proteinIndex) => {
    carbFoods.forEach((carbFood, carbIndex) => {
      tables.forEach((table, tableIndex) => {
        let cell = cells[tableIndex][proteinIndex][carbIndex];

        let proteinRatio = calculateProteinRatio(proteinFood, carbFood, kappa);
        let footnoteMarker = ""
        if (proteinRatio == 0) {
          footnoteMarker="†"
        }

        if (isNaN(proteinRatio)) {
          cell.textContent = "F";
          cell.style.backgroundColor = `rgba(123, 123, 123,1)`;
        } else {
          let emissionRatio = calculateRatioEmissions(proteinFood, carbFood, proteinRatio);
          cell.textContent = String((100 * proteinRatio).toFixed(0)) + "%"+footnoteMarker;
          cell.style.backgroundColor = getColorForProteinRatio(proteinRatio)[0];

          if (tableIndex === 1) {
            cell.style.backgroundColor = getColorForEmissionRatio(emissionRatio)[0];
            cell.textContent = String(emissionRatio.toFixed(2))+footnoteMarker;
          }

          if (tableIndex === 2) {
            let landuseRatio = calculateRatioLanduse(proteinFood, carbFood, proteinRatio);
            cell.style.backgroundColor = getColorForLanduseRatio(landuseRatio)[0];
            cell.textContent = String(landuseRatio.toFixed(2))+footnoteMarker;
          }

          if (tableIndex === 3) {
            let ethicalScore = sustainabilityData[proteinFood].ethical*sustainabilityData[carbFood].ethical
            if (proteinRatio == 0){
              ethicalScore = sustainabilityData[carbFood].ethical*2
            }
            cell.style.backgroundColor = getColorForEthicalScore(ethicalScore);
            cell.textContent = String(ethicalScore)+footnoteMarker
          }

          if (tableIndex === 4) {
            let sustainabilityScore = sustainabilityData[proteinFood].ecologicallySustainable*sustainabilityData[carbFood].ecologicallySustainable;
            if (proteinRatio == 0){
              sustainabilityScore = sustainabilityData[carbFood].ecologicallySustainable*2
            }
            cell.style.backgroundColor = getColorForEthicalScore(sustainabilityScore);
            cell.textContent = String(sustainabilityScore)+footnoteMarker
          }

          if (tableIndex === 5) {
            let emissionRatio = calculateRatioEmissions(proteinFood, carbFood, proteinRatio);
            let landuseRatio = calculateRatioLanduse(proteinFood, carbFood, proteinRatio);
            let emissionRatioScore = getColorForEmissionRatio(emissionRatio)[1];
            let proteinRatioScore = getColorForProteinRatio(proteinRatio)[1];
            let landuseRatioScore = getColorForLanduseRatio(landuseRatio)[1];
            if (proteinRatio == 0){
              let ethicalScore = sustainabilityData[carbFood].ethical*2
              let sustainabilityScore = sustainabilityData[carbFood].ecologicallySustainable*2;
              let salvadorScore = (emissionRatioScore*10 + landuseRatioScore*4 + proteinRatioScore + ethicalScore*2 + sustainabilityScore*2)/4
              cell.style.backgroundColor = getColorForEthicalScore(salvadorScore*4/18);
              cell.textContent = String(salvadorScore)+footnoteMarker
            } else{
              let ethicalScore = sustainabilityData[proteinFood].ethical*sustainabilityData[carbFood].ethical
              let sustainabilityScore = sustainabilityData[proteinFood].ecologicallySustainable*sustainabilityData[carbFood].ecologicallySustainable;
              let salvadorScore = (emissionRatioScore*10 + landuseRatioScore*4 + proteinRatioScore + ethicalScore*2 + sustainabilityScore*2)/4
              cell.style.backgroundColor = getColorForEthicalScore(salvadorScore*4/18);
              cell.textContent = String(salvadorScore)+footnoteMarker
            }
          }
        }
      });
    });
  });
}


function getColorForEmissionRatio(emissionRatio) {
  const globalPerCapitaEmissions = 5;
  const requiredPerCapitaEmissions2050 = 1.3;
  if (isNaN(emissionRatio)) {
    return `grey`
  } else if (emissionRatio > globalPerCapitaEmissions) {
    return ['rgba(255, 0, 0, 0.5)',0];
  } else if (emissionRatio.toFixed(2) > 2 * requiredPerCapitaEmissions2050) {
    return ['rgba(255, 165, 0, 0.5)',2];
  } else if (emissionRatio.toFixed(2) > requiredPerCapitaEmissions2050) {
    return ['rgba(255, 255, 0, 0.5)',2];
  } else if (emissionRatio.toFixed(2) > requiredPerCapitaEmissions2050 / 2) {
    return ['rgba(0, 128, 0, 0.5)',3];
  } else {
    return ['rgba(64, 128, 192, 0.5)',4];
  }
}

function getColorForLanduseRatio(landuseRatio) {
  const globalPerCapitaEmissions = .61;
  if (isNaN(landuseRatio)) {
    return `grey`
  } else if (landuseRatio.toFixed(2) > globalPerCapitaEmissions) {
    return ['rgba(255, 0, 0, 0.5)',0];
  } else if (landuseRatio.toFixed(2) > globalPerCapitaEmissions*.75) {
    return ['rgba(255, 165, 0, 0.5)',1];
  } else if (landuseRatio.toFixed(2) > globalPerCapitaEmissions*.5) {
    return ['rgba(255, 255, 0, 0.5)',2];
  } else if (landuseRatio.toFixed(2) > globalPerCapitaEmissions*.25) {
    return ['rgba(0, 128, 0, 0.5)',3];
  } else {
    return ['rgba(64, 128, 192, 0.5)',4];
  }
}

function getColorForProteinRatio(proteinRatio) {
  if (isNaN(proteinRatio)) {
    return `grey`;
  } else if (Math.abs(proteinRatio - 0.3) < .2) {
    return ['rgba(0, 128, 0, 0.5)',2]; // Green
  } else if (Math.abs(proteinRatio - 0.3) < .3) {
    return ['rgba(255, 255, 0, 0.5)',1]; // Yellow
  } else if (Math.abs(proteinRatio - 0.3) >= .3) {
    return ['rgba(255, 0, 0, 0.5)',0]; // Red
  }
}

function getColorForEthicalScore(ethicalScore) {
  if (isNaN(ethicalScore)) {
    return `grey`;
  } else if (ethicalScore >= 4) {
    return 'rgba(64, 128, 192, 0.5)'; // Blue
  } else if (ethicalScore >= 3) {
    return 'rgba(0, 128, 0, 0.5)'; // Green
  } else if (ethicalScore >= 2) {
    return 'rgba(255, 255, 0, 0.5)'; // Yellow
  } else if (ethicalScore >= 1) {
    return 'rgba(255, 165, 0, 0.5)'; // Orange
  } else {
    return 'rgba(255, 0, 0, 0.5)'; // Red
  }
}

var radioButtons = document.querySelectorAll('input[name="average"]');
var averageToUse = document.querySelector('input[name="average"]:checked').value;

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
const legends = document.querySelectorAll('.color-legend');

function changeTable(direction) {
  tables[currentTableIndex].classList.remove('active');
  legends[currentTableIndex].classList.remove('active');
  currentTableIndex += direction;

  if (currentTableIndex < 0) {
    currentTableIndex = tables.length - 1;
  } else if (currentTableIndex >= tables.length) {
    currentTableIndex = 0;
  }

  tables[currentTableIndex].classList.add('active');
  legends[currentTableIndex].classList.add('active');
  updateIndicators()
}

function updateButtons() {
  document.getElementById('prevBtn').disabled = false;
  document.getElementById('nextBtn').disabled = false;
}

// Initial display
tables[currentTableIndex].classList.add('active');
legends[currentTableIndex].classList.add('active');
updateButtons();

// Initial display on page load
// Ensure external data is processed correctly before any other operations
calculateProteinPerKcal(nutritional_data);
calculateEmissionsPerKcal(nutritional_data);
calculateLandusePerKcal(nutritional_data);
displayProteinFoods();
setPreset('unitedStates')

const totalItems = 6
function createIndicators() {
  const indicatorContainer = document.getElementById('indicatorContainer');
  indicatorContainer.innerHTML = '';
  for (let i = 0; i < totalItems; i++) {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      indicator.addEventListener('click', () => setTableIndex(i));
      indicatorContainer.appendChild(indicator);
  }
  updateIndicators();
}

function setTableIndex(index) {
  tables[currentTableIndex].classList.remove('active');
  legends[currentTableIndex].classList.remove('active');
  currentTableIndex = index;
  tables[currentTableIndex].classList.add('active');
  legends[currentTableIndex].classList.add('active');
  updateIndicators();
}

function updateIndicators() {
  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, index) => {
      if (index === currentTableIndex) {
          indicator.classList.add('active');
      } else {
          indicator.classList.remove('active');
      }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createIndicators();
});