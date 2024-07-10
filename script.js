var kappa

function displayProteinFoods() {
  kappa = (proteinInput.value - fruitVegInput.value * 5 / 400) / (calorieInput.value - emptycalorieInput.value - fruitVegInput.value);
  
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
      carbHeaderRow.appendChild(th);
      th.textContent = carbFood
      // th.addEventListener('click', () => {
      //   console.log(`${carbFood} button clicked`);
      //   document.getElementById('overlayTitle').innerText = carbFood;
      //   document.getElementById('overlay').style.display = 'flex';
      // });
    });

    cells[tableIndex] = [];

    proteinFoods.forEach((proteinFood, proteinIndex) => {
      let row = tableBody.insertRow();
      let cell = row.insertCell(0);
      cell.style.backgroundColor = "#00796b"
      cell.textContent = proteinFood
      cell.style.color = "white"

      // cell.addEventListener('click', () => {
      //   console.log(`${proteinFood} button clicked`);
      //   document.getElementById('overlayTitle').innerText = proteinFood;
      //   document.getElementById('overlay').style.display = 'flex';
      // });

      cells[tableIndex][proteinIndex] = [];

      carbFoods.forEach((carbFood, carbIndex) => {
        let cell = row.insertCell(carbIndex + 1);
        cell.addEventListener('click', () => {
          foodComboPopout(carbFood, proteinFood);
          if (carbFood == "Self"){
            document.getElementById('overlayTitle').innerText = `${proteinFood} by itself`;
          } else {
            document.getElementById('overlayTitle').innerText = `${proteinFood} with ${carbFood}`;
          };
          document.getElementById('overlay').style.display = 'flex';
        });

        cells[tableIndex][proteinIndex][carbIndex] = cell;
        
      });
    });

    tableIndex += 1;
  }

  proteinFoods.forEach((proteinFood, proteinIndex) => {
    carbFoods.forEach((carbFood, carbIndex) => {
      carbFoodaux = carbFood
      if (carbFood == "Self") {
        carbFoodaux = proteinFood
      }
      tables.forEach((table, tableIndex) => {
        let cell = cells[tableIndex][proteinIndex][carbIndex];

        let proteinRatio = calculateProteinRatio(proteinFood, carbFoodaux, kappa);
        let footnoteMarker = ""
        if (proteinRatio == 0) {
          footnoteMarker="†"
        }

        if (isNaN(proteinRatio)) {
          cell.textContent = "F";
          cell.style.backgroundColor = `rgba(123, 123, 123,1)`;
        } else {
          let emissionRatio = calculateRatioEmissions(proteinFood, carbFoodaux, proteinRatio);
          if (tableIndex === 0) {
            cell.textContent = String((100 * proteinRatio).toFixed(0)) + "%"+footnoteMarker;
            cell.style.backgroundColor = getColorForProteinRatio(proteinRatio)[0];
          }

          if (tableIndex === 1) {
            cell.style.backgroundColor = getColorForEmissionRatio(emissionRatio)[0];
            cell.textContent = String(emissionRatio.toFixed(2))+footnoteMarker;
          }

          if (tableIndex === 2) {
            let landuseRatio = calculateRatioLanduse(proteinFood, carbFoodaux, proteinRatio);
            cell.style.backgroundColor = getColorForLanduseRatio(landuseRatio)[0];
            cell.textContent = String(landuseRatio.toFixed(2))+footnoteMarker;
          }

          if (tableIndex === 3) {
            let ethicalScore = sustainabilityData[proteinFood].ethical*sustainabilityData[carbFoodaux].ethical
            if (proteinRatio == 0){
              ethicalScore = sustainabilityData[carbFoodaux].ethical*2
            }
            cell.style.backgroundColor = getColorForEthicalScore(ethicalScore);
            cell.textContent = String(ethicalScore)+footnoteMarker
          }

          if (tableIndex === 4) {
            let sustainabilityScore = sustainabilityData[proteinFood].ecologicallySustainable*sustainabilityData[carbFoodaux].ecologicallySustainable;
            if (proteinRatio == 0){
              sustainabilityScore = sustainabilityData[carbFoodaux].ecologicallySustainable*2
            }
            cell.style.backgroundColor = getColorForEthicalScore(sustainabilityScore);
            cell.textContent = String(sustainabilityScore)+footnoteMarker
          }

          if (tableIndex === 5) {
            let emissionRatio = calculateRatioEmissions(proteinFood, carbFoodaux, proteinRatio);
            let landuseRatio = calculateRatioLanduse(proteinFood, carbFoodaux, proteinRatio);
            let emissionRatioScore = getColorForEmissionRatio(emissionRatio)[1];
            let proteinRatioScore = getColorForProteinRatio(proteinRatio)[1];
            let landuseRatioScore = getColorForLanduseRatio(landuseRatio)[1];
            let salvadorScore
            if (proteinRatio == 0){
              let ethicalScore = sustainabilityData[carbFoodaux].ethical*2
              let sustainabilityScore = sustainabilityData[carbFoodaux].ecologicallySustainable*2;
              salvadorScore = (emissionRatioScore*10 + landuseRatioScore*4 + proteinRatioScore + ethicalScore*2 + sustainabilityScore*2)/4
            } else{
              let ethicalScore = sustainabilityData[proteinFood].ethical*sustainabilityData[carbFoodaux].ethical
              let sustainabilityScore = sustainabilityData[proteinFood].ecologicallySustainable*sustainabilityData[carbFoodaux].ecologicallySustainable;
              salvadorScore = (emissionRatioScore*10 + landuseRatioScore*4 + proteinRatioScore + ethicalScore*2 + sustainabilityScore*2)/4
            }
            cell.style.backgroundColor = getColorForEthicalScore(salvadorScore*4/18);
            cell.textContent = String(salvadorScore)+footnoteMarker
          }
        }
      });
    });
  });
}

var radioButtons = document.querySelectorAll('input[name="average"]');
var averageToUse = document.querySelector('input[name="average"]:checked').value;

var proteinInput = document.getElementById("proteinInput");

var calorieInput = document.getElementById("calorieInput");

var emptycalorieInput = document.getElementById("emptycalorieInput");

var fruitVegInput = document.getElementById("fruitVegInput");

var proteinPerCalorieSupply = document.getElementById("proteinpercalorieSupply");

proteinPerCalorieSupply.innerHTML = String((100 * 4 * (proteinInput.value - fruitVegInput.value * 5 / 400) / (calorieInput.value - emptycalorieInput.value - fruitVegInput.value)).toFixed(2)) + "%";

let currentTableIndex = 2;
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

document.getElementById('closeOverlayBtn').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'none';
});

// Optional: Close the overlay when clicking outside of the content area
document.getElementById('overlay').addEventListener('click', function(event) {
  if (event.target === this) {
      this.style.display = 'none';
  }
});