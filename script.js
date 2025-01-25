// Select DOM Elements
const itemsList = document.getElementById("items-list");
const form = document.getElementById("grocery-form");
const alarmSound = new Audio("alarm.mp3");
let items = JSON.parse(localStorage.getItem("items")) || [];

// Calculate Days Left for Expiry
function calculateDaysLeft(expiryDate) {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diff = expiry - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// Render Items to the List
function renderList() {
    itemsList.innerHTML = "";
    items.forEach((item, index) => {
        const daysLeft = calculateDaysLeft(item.expiryDate);
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ${daysLeft} day(s) left`;

        // Apply color coding based on days left
        if (daysLeft <= 2) {
            listItem.classList.add("red");
        } else if (daysLeft <= 4) {
            listItem.classList.add("yellow");
        } else {
            listItem.classList.add("default");
        }

        // Add delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.marginLeft = "10px";
        deleteButton.addEventListener("click", () => deleteItem(index));
        listItem.appendChild(deleteButton);

        itemsList.appendChild(listItem);
    });
}

// Save Items to Local Storage
function saveToLocalStorage() {
    localStorage.setItem("items", JSON.stringify(items));
}

// Add New Item
function addItem(e) {
    e.preventDefault();
    const name = document.getElementById("item-name").value;
    const expiryDate = document.getElementById("expiry-date").value;
    items.push({ name, expiryDate });
    saveToLocalStorage();
    renderList();
    form.reset();
}

// Delete Item
function deleteItem(index) {
    items.splice(index, 1);
    saveToLocalStorage();
    renderList();
}

// Play Alarm if an Item is Expiring Tomorrow
function playAlarmIfNecessary() {
    items.forEach(item => {
        const daysLeft = calculateDaysLeft(item.expiryDate);
        if (daysLeft === 1) {
            alarmSound.play();
        }
    });
}

// Fetch Recipes from API
function fetchRecipes(ingredient) {
    const apiKey = "YOUR_API_KEY"; // Replace with your Spoonacular API key
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=5&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const recipeList = document.getElementById("recipe-list");
            recipeList.innerHTML = "";
            data.forEach(recipe => {
                const listItem = document.createElement("li");
                listItem.textContent = recipe.title;
                recipeList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching recipes:", error));
}

// Initial Render and Event Listeners
form.addEventListener("submit", addItem);
renderList();
setInterval(playAlarmIfNecessary, 86400000); // Check daily
