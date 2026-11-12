
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const gas = document.getElementById("gas");
const flame = document.getElementById("flame");
const houseStatus = document.getElementById("houseStatus");
const activity = document.getElementById("activity");

function updateDashboard() {

    // Demonstration readings only
    const temp = Math.floor(Math.random() * 8) + 29;
    const hum = Math.floor(Math.random() * 15) + 50;
    const gasValue = Math.floor(Math.random() * 500) + 300;

    temperature.textContent = temp + " °C";
    humidity.textContent = hum + " %";
    gas.textContent = gasValue;

    flame.textContent = "NORMAL";
    houseStatus.textContent = "● NORMAL";
    houseStatus.style.color = "#4ade80";
    activity.textContent =
        "Simulated sensor readings updated successfully.";

    // This is a demonstration threshold, not a calibrated
    // real-world fire or gas detection threshold.
    if (temp >= 35 || gasValue >= 700) {

        houseStatus.textContent = "● WARNING";
        houseStatus.style.color = "#fbbf24";

        activity.textContent =
            "SIMULATION: Warning condition generated.";
    }
}

updateDashboard();
setInterval(updateDashboard, 3000);
