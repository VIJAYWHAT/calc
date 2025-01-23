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
        case "BTCUSD": // .00
            pips = (sellPrice - buyPrice);
            break;
        case "XAUUSD": // .000
            pips = (sellPrice - buyPrice) * 10;
            break;
        case "USDJPY": // .000
            pips = (sellPrice - buyPrice) * 100;
            break;
        case "EURUSD": // .00000
            pips = (sellPrice - buyPrice) * 10000;
            break;
        case "US30": // .00
            pips = (sellPrice - buyPrice);
            break;
        default:
            document.getElementById('result').innerText = "Invalid asset type. Please select a valid option.";
            return;
    }

    document.getElementById('result').innerText = `Pips Value: ${pips.toFixed(2)} pips`;
}