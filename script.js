var eatIn = "#eat-in";
var apiKey = "300a7d2cc57843cd8827b55f1a6ceab1";
// var apiUrl = "https://api.spoonacular.com/recipes/findByIngredients";

// fetch(apiUrl);
// greated get recipes function 
var getRecipes = function(event) {
    event.preventDefault()
    // define API URL
    var userInput = document.querySelectorAll(".ingredients");
    console.log(userInput)
    var search =""
    for (let i = 0; i < userInput.length; i++ ){
        if (userInput[i].checked){
            console.log(userInput[i].name)
            search += `,+${userInput[i].name}`
        }
    }
    console.log(search)
    
    var apiUrl = "https://api.spoonacular.com/recipes/findByIngredients";
    // fetch(`https://api.spoonacular.com/recipes/findByIngredients?key=${apiKey}`);
    // https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
    var apiURL =`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${search}&number=5`
    console.log(apiURL)
    fetch(apiURL).then(function(response) {

        if (response.ok) {
            response.json().then(function(data) {
                console.log("API",data);
                displayRecipes(data);
            })
        }
    })

    
    console.log("function was called");
};

document.getElementById("searchBtn").addEventListener("click",getRecipes)

function displayRecipes(data) {
    var htmlCode = "";
    for (let i=0; i<data.length; i++) {
        htmlCode += `
        <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <p class="title">Middle tile</p>
          <p class="subtitle">With an image</p>
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png">
          </figure>
        </article>
      </div>
        `
    }
}


// getRecipes();