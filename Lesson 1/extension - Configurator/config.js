function adjustIngredients() {
    let servings = parseInt(document.getElementById("servings").value, 10);
    const ingredientsList = document.getElementById("ingredients-list");

    const ingredients = [
        { name: "Mouka", amount: 150, unit: "g" },
        { name: "Mléko", amount: 225, unit: "ml" },
        { name: "Vejce", amount: 2, unit: "ks" },
        { name: "Sůl", amount: 0.8, unit: "špetka" }
    ];

    if (isNaN(servings) || servings < 1) {
        alert("Počet porcí musí být minimálně 1!");
        document.getElementById("servings").value = 1;
        servings = 1;
    }

    ingredientsList.innerHTML = ""; // Vymazání starého seznamu

    ingredients.forEach(ingredient => {
        let adjustedAmount = ingredient.amount * (servings / 3);
        adjustedAmount = ingredient.unit === "ks" ? Math.round(adjustedAmount) : adjustedAmount.toFixed(1);

        // Vytvoření položky seznamu s pevně oddělenými hodnotami
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span>${ingredient.name}</span><span>${adjustedAmount} ${ingredient.unit}</span>`;
        listItem.style.display = "flex";
        listItem.style.justifyContent = "space-between";
        listItem.style.padding = "5px 0";

        ingredientsList.appendChild(listItem);
    });
}

function resetIngredients() {
    document.getElementById("servings").value = 3;
    adjustIngredients();
}

// Události pro vstup a tlačítko
window.onload = () => {
    document.getElementById("servings").addEventListener("input", adjustIngredients);
    document.querySelector("button").addEventListener("click", resetIngredients);
    adjustIngredients();
};
