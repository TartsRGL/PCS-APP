function adjustIngredients() {
    let servings = parseInt(document.getElementById("servings").value, 10);
    const ingredientsList = document.getElementById("ingredients-list");

    const ingredients = [
        { name: "Mouka", amount: 200, unit: "g" },
        { name: "Mléko", amount: 300, unit: "ml" },
        { name: "Vejce", amount: 2, unit: "ks" },
        { name: "Sůl", amount: 1, unit: "špetka" }
    ];

    if (servings < 1 || isNaN(servings)) {
        alert("Počet porcí musí být minimálně 1!");
        servings = 1;
        document.getElementById("servings").value = 1;
    }

    ingredientsList.innerHTML = ""; // Vymazání starého seznamu

    ingredients.forEach(ingredient => {
        let adjustedAmount = ingredient.amount * (servings / 4);
        adjustedAmount = ingredient.unit === "ks" ? Math.round(adjustedAmount) : parseFloat(adjustedAmount.toFixed(1));

        // Vytvoření položky seznamu s pevně oddělenými hodnotami
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span>${ingredient.name}</span><span>${adjustedAmount} ${ingredient.unit}</span>`;
        listItem.style.display = "flex";
        listItem.style.justifyContent = "space-between";
        listItem.style.padding = "5px 0";

        ingredientsList.appendChild(listItem);
    });
}

// Resetovací funkce - nastaví zpět na 4 porce a zavolá adjustIngredients()
function resetIngredients() {
    document.getElementById("servings").value = 4;
    adjustIngredients();
}

// Spouštění funkce při změně vstupu
document.getElementById("servings").addEventListener("input", adjustIngredients);
document.querySelector("button").addEventListener("click", resetIngredients);

// Spuštění při načtení stránky
window.onload = adjustIngredients;
