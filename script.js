var eatIn = "#eat-in"
var apiKey = "300a7d2cc57843cd8827b55f1a6ceab1"
// var apiUrl = "https://api.spoonacular.com/recipes/findByIngredients"

// fetch(apiUrl);
// greated get recipes function 
var getRecipes = function() {
    fetch('https://api.spoonacular.com/recipes/complexSearch?key${apiKey}');
    
    console.log("function was called");
};

getRecipes();