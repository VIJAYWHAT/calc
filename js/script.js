function calculatePercentage() {
    let percent = parseFloat(document.getElementById('percent1').value);
    let of = parseFloat(document.getElementById('of1').value);
    if (!percent || !of) return;
    let result = (percent / 100) * of;
    document.getElementById('result1').textContent = `= ${result}`;
}

function calculateWhatPercent() {
    let whole = parseFloat(document.getElementById('whole').value);
    let part = parseFloat(document.getElementById('part').value);
    if (!whole || !part) return;
    let result = (part / whole) * 100;
    document.getElementById('result2').textContent = `= ${result.toFixed(2)}%`;
}

function calculateIncreaseDecrease() {
    let start = parseFloat(document.getElementById('start').value);
    let end = parseFloat(document.getElementById('end').value);
    if (!start || !end) return;
    let result = ((end - start) / start) * 100;
    document.getElementById('result3').textContent = `= ${result.toFixed(2)}%`;
}

function calculatePips() {
    let assetType = document.getElementById("assetType").value;
    let buyPrice = parseFloat(document.getElementById("buyPrice").value);
    let sellPrice = parseFloat(document.getElementById("sellPrice").value);

    if (isNaN(buyPrice) || isNaN(sellPrice)) {
        document.getElementById("resultPips").innerText = "Please enter valid prices.";
        return;
    }

    let pips = 0;
    switch (assetType) {
        case "BTCUSD": pips = sellPrice - buyPrice; break;
        case "XAUUSD": pips = (sellPrice - buyPrice) * 10; break;
        case "USDJPY": pips = (sellPrice - buyPrice) * 100; break;
        case "EURUSD": pips = (sellPrice - buyPrice) * 10000; break;
        case "US30": pips = sellPrice - buyPrice; break;
        default:
            document.getElementById("resultPips").innerText = "Invalid asset type. Please select a valid option.";
            return;
    }
    document.getElementById("resultPips").innerText = `Pips Value: ${pips.toFixed(2)} pips`;
}
