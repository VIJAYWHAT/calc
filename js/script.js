// Pips Calculation function
function calculatePips() {
    let assetType = document.getElementById('assetType').value;
    let buyPrice = parseFloat(document.getElementById('buyPrice').value);
    let sellPrice = parseFloat(document.getElementById('sellPrice').value);
    
    if (isNaN(buyPrice) || isNaN(sellPrice)) {
        document.getElementById('result').innerText = "Please enter valid prices.";
        return;
    }

    let pips = 0;

    switch (assetType) {
        case "FOREX":
            pips = (sellPrice - buyPrice) * 10000;
            break;
        case "XAUUSD":
            pips = (sellPrice - buyPrice) * 10;
            break;
        case "BTCUSD":
            pips = (sellPrice - buyPrice);
            break;
        case "GBPJPY":
            pips = (sellPrice - buyPrice) * 100;
            break;
        case "USDCAD":
            pips = (sellPrice - buyPrice) * 10000;
            break;
        case "NAS100":
            pips = (sellPrice - buyPrice) * 10;
            break;
        default:
            document.getElementById('result').innerText = "Invalid asset type. Please select a valid option.";
            return;
    }

    document.getElementById('result').innerText = `Pips Value: ${pips.toFixed(2)} pips`;
}