var eatIn = "#eat-in";
var apiKey = "300a7d2cc57843cd8827b55f1a6ceab1";
// var apiUrl = "https://api.spoonacular.com/recipes/findByIngredients";

// fetch(apiUrl);
// greated get recipes function 
var getRecipes = function() {
    // define API URL
    var apiUrl = "https://api.spoonacular.com/recipes/findByIngredients";
    // fetch(`https://api.spoonacular.com/recipes/findByIngredients?key=${apiKey}`);
    // https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
    var apiURL =`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=apples,+flour,+sugar&number=5`
    fetch(apiURL).then(function(response) {

        if (response.ok) {
            response.json().then(function(data) {
                console.log("API",data);
                displayIssues(data);
            })
        }
    })
    
    console.log("function was called");
};

getRecipes();