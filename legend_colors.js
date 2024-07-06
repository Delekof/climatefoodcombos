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