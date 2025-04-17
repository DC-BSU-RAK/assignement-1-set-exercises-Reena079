document.getElementById("calculate-btn").addEventListener("click", function () {
    const costPerLiter = parseFloat(document.getElementById("cost-per-liter").value);
    const liters = parseFloat(document.getElementById("liters-purchased").value);

    if (!isNaN(costPerLiter) && !isNaN(liters)) {
        const total = costPerLiter * liters;
        document.getElementById("total-cost").textContent = `Total Cost: $${total.toFixed(2)}`;
    }
});

document.getElementById("clear-btn").addEventListener("click", function () {
    document.getElementById("cost-per-liter").value = "";
    document.getElementById("liters-purchased").value = "";
    document.getElementById("total-cost").textContent = "Total Cost: $0";
});

