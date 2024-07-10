function createChart(chartId, data, labels, colors, title) {
    const ctx = document.getElementById(chartId).getContext('2d');
    return new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                // borderColor: colors.map(color => color.replace('0.2', '1')),
                // borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            rotation: -90,
            maintainAspectRatio: false,
            plugins: {
                title:{
                    display: true,
                    text: title
                },
                legend: {
                    display: false // Hide individual legends
                },
                tooltip: {
                    mode: 'index',
                    intersect: true,
                }
            }
        }
    });
}

function generateLegend(labels, colors) {
    const legendContainer = document.getElementById('legend');
    legendContainer.innerHTML = ''; // Clear existing legend items

    labels.forEach((label, index) => {
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';

        const legendColor = document.createElement('span');
        legendColor.className = 'legend-color';
        legendColor.style.backgroundColor = colors[index];

        const legendText = document.createElement('span');
        legendText.textContent = label;

        legendItem.appendChild(legendColor);
        legendItem.appendChild(legendText);
        legendContainer.appendChild(legendItem);
    });
}

const initialData1 = [10, 20];
const initialLabels1 = ['Red', 'Green'];
const initialData2 = [15, 25];
const initialLabels2 = ['Red', 'Green'];
const colors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
];

// Create the initial charts
let caloriesPieChart = createChart('caloriesPieChart', initialData1, initialLabels1, colors, "calories");
let amountsPieChart = createChart('amountsPieChart', initialData2, initialLabels2, colors, "amounts");

generateLegend(initialLabels1, colors);
updateCharts("Peas", "Corn", 0.2)

function updateCharts(carbFood, proteinFood, kappa=kappa) {
    let carbFoodaux = carbFood
    if (carbFood == "Self") {
        carbFoodaux = proteinFood
    }
    let proteinRatio = calculateProteinRatio(proteinFood, carbFoodaux, kappa)
    let emissionRatio = calculateRatioEmissions(proteinFood, carbFoodaux, proteinRatio);
    
    if (carbFood =="Self") {
        proteinRatio = 1
    }

    const newData1 = [proteinRatio.toFixed(3), (1-proteinRatio).toFixed(3), fruitVegInput.value/(calorieInput.value - emptycalorieInput.value)];
    const newLabels = [proteinFood, carbFoodaux, "fruit/veg"];

    let totalCalories = (calorieInput.value - emptycalorieInput.value - fruitVegInput.value)
    let vegWeight = (fruitVegInput.value)/.4
    const newData2 = [
        (100*totalCalories*(proteinRatio/nutritional_data[proteinFood].kcal)).toFixed(0),
        (100*totalCalories*((1-proteinRatio)/nutritional_data[carbFoodaux].kcal)).toFixed(0),
        (vegWeight).toFixed(0),
    ];

    const newColors = [
        'rgba(235, 0, 0, 0.2)',
        'rgba(245, 245, 0, 0.3)',
        'rgba(0, 255, 0, 0.3)',
    ];

    // Update first chart data
    caloriesPieChart.data.labels = newLabels;
    caloriesPieChart.data.datasets[0].data = newData1;
    caloriesPieChart.data.datasets[0].backgroundColor = newColors;
    // caloriesPieChart.data.datasets[0].borderColor = newColors.map(color => color.replace('0.2', '1'));
    caloriesPieChart.update();

    // Update second chart data
    amountsPieChart.data.labels = newLabels;
    amountsPieChart.data.datasets[0].data = newData2;
    amountsPieChart.data.datasets[0].backgroundColor = newColors;
    // amountsPieChart.data.datasets[0].borderColor = newColors.map(color => color.replace('0.2', '1'));
    amountsPieChart.update();

    // Update shared legend
    generateLegend(newLabels, newColors);

    //update overlay text
    let kcal_per_meal = (calorieInput.value - emptycalorieInput.value)*.375
    let vegServings = (fruitVegInput.value*.375/4).toFixed(0)
    let proteinServings = kcal_per_meal*100*(proteinRatio/nutritional_data[proteinFood].kcal) / nutritional_data[proteinFood].portion.grams
    let carbServings = kcal_per_meal*100*((1-proteinRatio)/nutritional_data[carbFoodaux].kcal) / nutritional_data[carbFoodaux].portion.grams
    proteinServings = Math.round(proteinServings*5)/5
    carbServings = Math.round(carbServings*5)/5
    if (carbFood == "Self"){
        document.getElementById('overlay_meal').innerText = `A meal in this combo would be: ${carbServings}x${nutritional_data[carbFoodaux].portion.description}s of ${carbFoodaux} and ${vegServings}0g of fruit/veg for a total of ${kcal_per_meal.toFixed(0)}kcal`;
    } else {
        document.getElementById('overlay_meal').innerText = `A meal in this combo would be: ${proteinServings}x${nutritional_data[proteinFood].portion.description}s of ${proteinFood} with ${carbServings}x${nutritional_data[carbFoodaux].portion.description}s of ${carbFoodaux} and ${vegServings}0g of fruit/veg  for a total of ${kcal_per_meal.toFixed(0)}kcal`;
    }

    document.getElementById('overlayBalancedBox').style.backgroundColor = getColorForProteinRatio(proteinRatio)[0];
    document.getElementById('overlayBalancedText').innerText = "on meal balance"

    document.getElementById('overlayEmissionsBox').style.backgroundColor = getColorForEmissionRatio(emissionRatio)[0];
    document.getElementById('overlayEmissionsText').textContent = "on emissions"

    let landuseRatio = calculateRatioLanduse(proteinFood, carbFoodaux, proteinRatio);
    document.getElementById('overlayLanduseBox').style.backgroundColor = getColorForLanduseRatio(landuseRatio)[0];
    document.getElementById('overlayLanduseText').textContent = "on land use"

    let ethicalScore = sustainabilityData[proteinFood].ethical*sustainabilityData[carbFoodaux].ethical
    if (proteinRatio == 0){
        ethicalScore = sustainabilityData[carbFoodaux].ethical*2
    }
    document.getElementById('overlayEthicalBox').style.backgroundColor = getColorForEthicalScore(ethicalScore);
    document.getElementById('overlayEthicalText').innerText = "on ethics";

    let sustainabilityScore = sustainabilityData[proteinFood].ecologicallySustainable*sustainabilityData[carbFoodaux].ecologicallySustainable;
    if (proteinRatio == 0){
        sustainabilityScore = sustainabilityData[carbFoodaux].ecologicallySustainable*2
    }
    document.getElementById('overlaySustainableBox').style.backgroundColor = getColorForEthicalScore(sustainabilityScore);
    document.getElementById('overlaySustainableText').textContent = "on sustainability"

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
    document.getElementById('overlaySalvadorscoreBox').style.backgroundColor = getColorForEthicalScore(salvadorScore*4/18);
    document.getElementById('overlaySalvadorscoreText').textContent = "overall score"
}

function foodComboPopout(carbFood, proteinFood) {
    console.log(`${carbFood}-${proteinFood} button clicked`);
    updateCharts(carbFood, proteinFood, kappa)
}