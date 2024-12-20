function adjustIngredients() {
    const servings = document.getElementById("servings").value;
    const ingredientsList = document.getElementById("ingredients-list");
    
    // Default ingredient amounts for 4 servings
    const ingredients = [
        { name: "Mouka", amount: 200, unit: "g" },
        { name: "Mléko", amount: 300, unit: "ml" },
        { name: "Vejce", amount: 2, unit: "ks" },
        { name: "Sůl", amount: 1, unit: "špetka" }
    ];

    ingredientsList.innerHTML = ""; // Clear current ingredients

    // Adjust ingredient amounts based on servings
    ingredients.forEach(ingredient => {
        const adjustedAmount = ingredient.amount * (servings / 4); // Assuming 4 is the base servings
        const listItem = document.createElement("li");
        listItem.textContent = `${ingredient.name} - ${adjustedAmount} ${ingredient.unit}`;
        ingredientsList.appendChild(listItem);
    });
}
