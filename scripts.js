// Predefined Recipe Names
const recipeNames = [
    "Tomato Soup", "Vegetable Stir Fry", "Banana Bread", "Spaghetti Bolognese", "Caesar Salad",
    "Grilled Cheese Sandwich", "Chocolate Cake", "Lentil Soup", "Chicken Salad", "Fruit Salad",
    "Chicken Curry", "Mushroom Risotto", "Tacos", "Pasta Primavera", "Sushi",
    "Beef Wellington", "Peking Duck", "Fish and Chips", "Falafel", "Pizza Margherita",
    "Shakshuka", "Eggplant Parmesan", "Vegetarian Chili", "Pork Schnitzel", "Ramen",
    "Fried Rice", "Chicken Quesadilla", "Vegetable Curry", "Grilled Salmon", "Baked Ziti",
    "Pulled Pork Sandwiches", "Beef Tacos", "Shrimp Scampi", "Lamb Chops", "Paella",
    "Buttermilk Pancakes", "Blueberry Muffins", "Apple Pie", "Pumpkin Soup", "Chili Con Carne",
    "Sausage Rolls", "Crab Cakes", "Bangers and Mash", "Chicken Pot Pie", "Lasagna",
    "Buffalo Wings", "Mozzarella Sticks", "Bacon-Wrapped Asparagus", "Crispy Tofu Stir Fry", "Egg Salad",
    "Tom Yum Soup", "Pasta Carbonara", "Beef Empanadas", "Chicken Parmesan", "Coconut Curry",
    "Falafel Wrap", "Cheese Fondue", "Bruschetta", "Beef Tacos", "Vegetable Samosas",
    "Garlic Bread", "Shawarma", "Steak Frites", "Cheeseburger", "Chicken Korma",
    "Pasta with Pesto", "Steak Salad", "Hot Wings", "Lamb Tagine", "Tandoori Chicken",
    "Chickpea Salad", "Caprese Salad", "Beef Stir Fry", "Clam Chowder", "Baked Chicken",
    "Grilled Veggie Skewers", "Chicken Fried Rice", "Omelette", "Lamb Shawarma", "Cheese Quesadilla",
    "Lobster Bisque", "French Toast", "Crab Linguine", "Eggplant Stir Fry", "Tuna Salad",
    "Chicken Fajitas", "Baked Cod", "Lamb Burger", "Vegetable Lasagna", "Steak and Potatoes",
    "Chicken Kiev", "Corn on the Cob", "Zucchini Fritters", "Sweet and Sour Chicken", "Honey Garlic Shrimp",
    "Turkey Sandwich", "Pork Belly", "Beef Stir Fry", "Pasta with Meatballs", "Cabbage Rolls",
    "Cheese and Ham Toastie", "Chicken Shawarma", "Stuffed Peppers", "Lemon Meringue Pie", "Cheese Pizza",
    "Greek Salad", "Lentil Dahl", "Avocado Toast", "Vegetable Soup", "Gourmet Grilled Cheese",
    "Mushroom Tacos", "Duck Breast", "Chicken Salad Sandwich", "Fish Tacos", "Prawn Risotto"
];

// Predefined Food Facts
const foodFacts = [
    "Honey never spoils. It has been found in tombs thousands of years old.",
    "The longest pizza ever made was 1.15 miles long.",
    "An apple is more effective at waking you up in the morning than coffee.",
    "Tomatoes were once thought to be poisonous in Europe.",
    "Peanuts are not nuts, they are legumes.",
    "The average person eats about 35 tons of food in their lifetime.",
    "Bananas are radioactive due to the potassium content.",
    "Avocados are technically a berry.",
    "Chili peppers get their heat from a compound called capsaicin.",
    "The most expensive coffee in the world comes from beans eaten and excreted by civet cats.",
    "Watermelons are 92% water.",
    "Chocolate was once used as currency by the Aztecs.",
    "A peanut is not actually a nut, but a legume.",
    "Apples float on water because 25% of their volume is air.",
    "Potatoes were the first food grown in space."
];

// Add Item to List
function addItem() {
    const itemName = document.getElementById('item-name').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const quantity = document.getElementById('quantity').value;

    if (itemName && expiryDate && quantity) {
        const itemList = document.getElementById('food-items');
        const li = document.createElement('li');
        const expiry = new Date(expiryDate);
        const today = new Date();
        const diffInDays = Math.ceil((expiry - today) / (1000 * 3600 * 24));

        // Highlight based on expiry
        let className = "normal";
        if (diffInDays <= 2) className = "red";
        else if (diffInDays <= 4) className = "yellow";

        li.className = className;
        li.innerHTML = `${itemName} - Expiry: ${expiryDate} - Quantity: ${quantity} - Days to Expire: ${diffInDays}`;
        itemList.appendChild(li);

        // Clear input fields
        document.getElementById('item-name').value = '';
        document.getElementById('expiry-date').value = '';
        document.getElementById('quantity').value = '';

        // Generate Recipe Suggestions based on expiring items
        generateRecipeSuggestions();
    }
}

// Generate Random Fact
function generateRandomFact() {
    const randomFact = foodFacts[Math.floor(Math.random() * foodFacts.length)];
    document.getElementById('fact').innerHTML = randomFact;
}

// Generate Recipe Suggestions
function generateRecipeSuggestions() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';
    const expiringItems = document.getElementById('food-items').getElementsByClassName('red');
    for (let item of expiringItems) {
        const recipeIndex = Math.floor(Math.random() * recipeNames.length);
        const li = document.createElement('li');
        li.innerHTML = recipeNames[recipeIndex];
        recipeList.appendChild(li);
    }
}
