// Mapping ingredients to relevant recipes
const ingredientRecipeMapping = {
    "milk": ["Banana Bread", "Grilled Cheese Sandwich", "Pancakes", "Pasta Carbonara"],
    "tomato": ["Tomato Soup", "Vegetable Stir Fry", "Pasta with Pesto", "Shakshuka"],
    "chicken": ["Chicken Salad", "Chicken Curry", "Chicken Quesadilla", "Grilled Chicken"],
    "cheese": ["Grilled Cheese Sandwich", "Cheese Fondue", "Cheese Pizza", "Cheese Quesadilla"],
    "egg": ["Omelette", "Egg Salad", "Shakshuka", "Fried Rice"],
    "avocado": ["Avocado Toast", "Chicken Salad", "Shakshuka", "Vegetarian Chili"],
    "onion": ["French Onion Soup", "Caramelized Onion Tart", "Beef Stir Fry", "Onion Rings"],
    "potato": ["Mashed Potatoes", "French Fries", "Potato Salad", "Baked Potato"],
    "carrot": ["Carrot Cake", "Vegetable Soup", "Carrot Salad", "Roasted Carrots"],
    "garlic": ["Garlic Bread", "Garlic Shrimp", "Garlic Chicken", "Pasta Aglio e Olio"],
    "spinach": ["Spinach Salad", "Spinach and Cheese Stuffed Chicken", "Spinach Dip", "Vegetable Stir Fry"],
    "butter": ["Butter Chicken", "Buttered Corn", "Buttermilk Pancakes", "Shortbread Cookies"],
    "flour": ["Pizza Dough", "Pancakes", "Bread", "Pastry"],
    "salt": ["Salted Caramel Brownies", "Salted Pretzels", "Classic Potato Chips", "Caesar Salad"],
    "sugar": ["Chocolate Cake", "Sugar Cookies", "Panna Cotta", "Lemonade"],
    "bacon": ["Bacon-Wrapped Asparagus", "Bacon Cheeseburger", "Bacon and Eggs", "Bacon Salad"],
    "lemon": ["Lemon Meringue Pie", "Lemon Chicken", "Lemonade", "Lemon Risotto"],
    "beef": ["Beef Wellington", "Beef Stir Fry", "Beef Tacos", "Spaghetti Bolognese"],
    "pork": ["Pork Schnitzel", "Pulled Pork Sandwiches", "Pork Stir Fry", "Pork Chops"],
    "fish": ["Fish and Chips", "Salmon Fillets", "Fish Tacos", "Grilled Fish"],
    "shrimp": ["Shrimp Scampi", "Shrimp Tacos", "Shrimp Cocktail", "Shrimp Fried Rice"],
    "rice": ["Fried Rice", "Chicken and Rice", "Paella", "Rice Pudding"],
    "bread": ["Grilled Cheese Sandwich", "Bread Pudding", "Garlic Bread", "French Toast"],
    "pasta": ["Spaghetti Bolognese", "Mac and Cheese", "Pasta Primavera", "Lasagna"],
    "olive oil": ["Salad Dressing", "Pasta Aglio e Olio", "Olive Tapenade", "Grilled Vegetables"],
    "cucumber": ["Cucumber Salad", "Cucumber Sandwiches", "Tzatziki", "Greek Salad"],
    "tomato sauce": ["Spaghetti with Marinara", "Pizza Margherita", "Chicken Parmesan", "Lasagna"],
    "chili": ["Chili Con Carne", "Chili Dogs", "Vegetarian Chili", "Chili Mac"],
    "corn": ["Corn on the Cob", "Cornbread", "Sweet Corn Soup", "Mexican Street Corn"],
    "mushroom": ["Mushroom Risotto", "Stuffed Mushrooms", "Mushroom Soup", "Vegetable Stir Fry"],
    "zucchini": ["Zucchini Fritters", "Zucchini Noodles", "Grilled Zucchini", "Zucchini Bread"],
    "cabbage": ["Cabbage Rolls", "Coleslaw", "Sautéed Cabbage", "Cabbage Soup"],
    "peanut butter": ["Peanut Butter Cookies", "Peanut Butter Banana Sandwich", "Peanut Butter Smoothie", "Peanut Butter Sauce"],
    "jam": ["Peanut Butter and Jelly Sandwich", "Jam Tarts", "Jam Cake", "Jam-filled Croissants"],
    "cream": ["Whipped Cream", "Creamy Pasta Sauce", "Chocolate Mousse", "Creamed Spinach"],
    "yogurt": ["Greek Yogurt Parfait", "Yogurt Smoothie", "Tzatziki Sauce", "Yogurt Marinated Chicken"],
    "tortilla": ["Chicken Quesadilla", "Fish Tacos", "Taco Salad", "Wraps"],
    "basil": ["Pesto", "Caprese Salad", "Tomato Basil Soup", "Pasta with Basil"],
    "parsley": ["Tabbouleh", "Garlic Parsley Shrimp", "Parsley Potatoes", "Parsley Salad"],
    "rosemary": ["Roast Chicken with Rosemary", "Rosemary Focaccia", "Rosemary Potatoes", "Lamb with Rosemary"],
    "thyme": ["Lamb Roast with Thyme", "Chicken Soup", "Vegetable Stew", "Thyme Roasted Potatoes"],
    "oregano": ["Pizza Margherita", "Greek Salad", "Tomato Sauce", "Pasta Primavera"],
    "bay leaf": ["Beef Stew", "Chicken Soup", "Rice Pilaf", "Tomato Sauce"],
    "cinnamon": ["Cinnamon Rolls", "Apple Pie", "Cinnamon Sugar Toast", "Cinnamon Oatmeal"],
    "nutmeg": ["Eggnog", "Pumpkin Pie", "Sweet Potato Casserole", "Bechamel Sauce"],
    "clove": ["Gingerbread Cookies", "Spiced Wine", "Clove-studded Ham", "Indian Spice Mix"],
    "paprika": ["Paprika Chicken", "Hungarian Goulash", "Potato Paprika Soup", "Eggplant Paprikash"],
    "ginger": ["Gingerbread", "Ginger Tea", "Ginger Chicken Stir Fry", "Ginger Cookies"],
    "turmeric": ["Chicken Curry", "Vegetable Curry", "Turmeric Rice", "Golden Milk"],
    "cumin": ["Chili Con Carne", "Cumin Roasted Carrots", "Hummus", "Lamb Kebabs"],
    "coriander": ["Coriander Chicken", "Coriander Rice", "Spicy Coriander Sauce", "Coriander Soup"],
    "cardamom": ["Cardamom Buns", "Spiced Tea", "Cardamom Rice Pudding", "Baklava"],
    "vanilla": ["Vanilla Ice Cream", "Vanilla Cupcakes", "Vanilla Pudding", "Vanilla Smoothie"],
    "chocolate": ["Chocolate Cake", "Chocolate Chip Cookies", "Chocolate Mousse", "Chocolate Milkshake"],
    "coconut": ["Coconut Curry", "Coconut Rice", "Coconut Macaroons", "Piña Colada"],
    "almonds": ["Almond Cake", "Almond Butter", "Almond Milk Smoothie", "Chocolate Almond Biscotti"],
    "walnuts": ["Walnut Brownies", "Walnut Bread", "Walnut Salad", "Maple Walnut Syrup"],
    "raisins": ["Oatmeal Raisin Cookies", "Raisin Bread", "Rice Pudding", "Raisin Salad"],
    "cherries": ["Cherry Pie", "Cherry Jam", "Chocolate Covered Cherries", "Cherry Smoothie"],
    "blueberries": ["Blueberry Muffins", "Blueberry Pancakes", "Blueberry Pie", "Blueberry Smoothie"],
    "strawberries": ["Strawberry Shortcake", "Strawberry Jam", "Strawberry Salad", "Strawberry Smoothie"],
    "raspberries": ["Raspberry Sorbet", "Raspberry Jam", "Raspberry Smoothie", "Raspberry Tart"],
    "blackberries": ["Blackberry Pie", "Blackberry Jam", "Blackberry Smoothie", "Blackberry Sauce"],
    "kiwi": ["Kiwi Smoothie", "Kiwi Salad", "Kiwi Tart", "Kiwi Sorbet"],
    "apple": ["Apple Pie", "Apple Crisp", "Caramelized Apples", "Apple Salad"],
    "pear": ["Pear Tart", "Poached Pears", "Pear Salad", "Pear and Almond Cake"],
    "peach": ["Peach Cobbler", "Peach Jam", "Peach Smoothie", "Peach Crisp"],
    "plum": ["Plum Jam", "Plum Tart", "Grilled Plums", "Plum Smoothie"],
    "pineapple": ["Pineapple Upside-Down Cake", "Pineapple Smoothie", "Grilled Pineapple", "Pineapple Salsa"],
    "mango": ["Mango Salsa", "Mango Smoothie", "Mango Sorbet", "Mango Lassi"]
};

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
        const recipeSuggestions = ingredientRecipeMapping[item.innerHTML.split(' - ')[0].toLowerCase()];
        if (recipeSuggestions) {
            for (let recipe of recipeSuggestions) {
                const li = document.createElement('li');
                li.innerHTML = recipe;
                recipeList.appendChild(li);
            }
        }
    }
}
