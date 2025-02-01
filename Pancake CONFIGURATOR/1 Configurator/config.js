function adjustIngredients() {
    let servings = document.getElementById("servings").value;
    const ingredientsList = document.getElementById("ingredients-list");

    // Základní ingredience pro 4 porce
    const ingredients = [
        { name: "Mouka", amount: 200, unit: "g" },
        { name: "Mléko", amount: 300, unit: "ml" },
        { name: "Vejce", amount: 2, unit: "ks" },
        { name: "Sůl", amount: 1, unit: "špetka" }
    ];

    // Ochrana proti neplatným hodnotám
    if (servings < 1) {
        alert("Počet porcí musí být minimálně 1!");
        document.getElementById("servings").value = 1;
        servings = 1;
    }

    ingredientsList.innerHTML = ""; // Vymazání starého seznamu

    // Přepočet ingrediencí
    ingredients.forEach(ingredient => {
        let adjustedAmount = ingredient.amount * (servings / 4);
        
        // Zaokrouhlení
        if (ingredient.unit === "ks") {
            adjustedAmount = Math.round(adjustedAmount);
        } else {
            adjustedAmount = parseFloat(adjustedAmount.toFixed(1));
        }

        // Vložení do seznamu
        const listItem = document.createElement("li");
        listItem.textContent = `${ingredient.name} - ${adjustedAmount} ${ingredient.unit}`;
        ingredientsList.appendChild(listItem);
    });
}

// Spouštění funkce i při změně vstupu (bez nutnosti klikání)
document.getElementById("servings").addEventListener("input", adjustIngredients);

function resetIngredients() {
    document.getElementById("servings").value = 4;
    adjustIngredients();
}

