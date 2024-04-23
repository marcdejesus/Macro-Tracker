document.addEventListener('DOMContentLoaded', function() {
    // Adding event listeners to each input field to trigger addition on pressing Enter
    const inputFields = document.querySelectorAll('input[type="text"]');
    inputFields.forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent the default form submission on pressing Enter
                addProtein();
                addCarbs();
                addFat();
            }
        });
    });
});

function addProtein() {
    const proteinInput = document.getElementById("protein");
    const proteinTotal = document.getElementById("totalProtein");
    const proteinValue = parseFloat(proteinInput.value) || 0;  // Converts input to number, defaults to 0 if invalid
    proteinTotal.textContent = parseFloat(proteinTotal.textContent) + proteinValue;
    proteinInput.value = '';  // Clear input field after adding
}

function addCarbs() {
    const carbsInput = document.getElementById("carbs");
    const carbsTotal = document.getElementById("totalCarbs");
    const carbsValue = parseFloat(carbsInput.value) || 0;
    carbsTotal.textContent = parseFloat(carbsTotal.textContent) + carbsValue;
    carbsInput.value = '';  // Clear input field after adding
}

function addFat() {
    const fatInput = document.getElementById("fat");
    const fatTotal = document.getElementById("totalFat");
    const fatValue = parseFloat(fatInput.value) || 0;
    fatTotal.textContent = parseFloat(fatTotal.textContent) + fatValue;
    fatInput.value = '';  // Clear input field after adding
}

function calculateMacros() {
    const bodyWeight = parseFloat(document.getElementById('bodyWeight').value);
    const goal = document.getElementById('goal').value;

    let proteinPerKg, carbsPerKg, fatsPerKg;

    switch (goal) {
        case 'gain':
            proteinPerKg = 1.2;
            carbsPerKg = 3;
            fatsPerKg = .35;
            break;
        case 'lose':
            proteinPerKg = .8;
            carbsPerKg = 1.75;
            fatsPerKg = 0.20;
            break;
        case 'maintain':
        default:
            proteinPerKg = 0.8;
            carbsPerKg = 2.5;
            fatsPerKg = 0.25;
            break;
    }

    const goalProtein = Math.round(proteinPerKg * bodyWeight);
    const goalCarbs = Math.round(carbsPerKg * bodyWeight);
    const goalFat = Math.round(fatsPerKg * bodyWeight);

    document.getElementById('goalProtein').textContent = goalProtein;
    document.getElementById('goalCarbs').textContent = goalCarbs;
    document.getElementById('goalFat').textContent = goalFat;
}
