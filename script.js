var eatIn = "#eat-in";
var apiKey = "300a7d2cc57843cd8827b55f1a6ceab1";
var recipeId = [];
// var apiUrl = "https://api.spoonacular.com/recipes/findByIngredients";
// https://api.spoonacular.com/recipes/visualizeRecipe
// fetch(apiUrl);
// greated get recipes function 
var getRecipes = function(event) {
    event.preventDefault()
    // define API URL
    var userInput = document.querySelectorAll(".ingredients");
    console.log(userInput)
    var search =""
    for (let i = 0; i < userInput.length; i++ ) {
        if (userInput[i].checked){
            console.log(userInput[i].name)
            search += `,+${userInput[i].name}`
        }
    }
    console.log(search)
    // create variable to select IDs from HTML
    // fetch API https://api.spoonacular.com/recipes/{id}/information and include variable that selects IDs in place of ID
    // var apiUrl = "https://api.spoonacular.com/recipes/findByIngredients";
    // fetch(`https://api.spoonacular.com/recipes/findByIngredients?key=${apiKey}`);
    // https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
    // var apiURL =`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${search}&number=5`

    // //change API
    // var apiURL = `https://api.spoonacular.com/recipes/665734/information?apiKey=${apiKey}`
    // console.log(apiURL)

    var ingredients, recipes;
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${search}&number=5`)
    .then(function(response) {

        return response.json();

    }).then(function (data) {
        console.log(data);

        // ingredients = data;
        // console.log(ingredients);

        for (var i=0; i<data.length; i++) {
            var id = data[i].id;
        // var id = ingredients.id;
         console.log(data[i].id);
         recipeId.push(id);
         console.log(recipeId);   

        }
        
    //     return fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)


    // }).then(function (response) {
    //     return response.json();
    // }).then(function (data) {
    //     console.log(data);

    //     recipes = data;
        

    //     // if (response.ok) {
    //     //      response.json().then(function(data) {
    //     //         console.log("API",data);
    //              displayRecipes(recipes);
    //     //      })
    //     //    }
    // })
  

    console.log("function was called");
});



document.getElementById("searchBtn").addEventListener("click",getRecipes)

function displayRecipes(data) {
    var htmlCode = "";
    for (let i=0; i<data.length; i++) {
        htmlCode += `
        <div class="tile is-parent">
        <article data-id=${data[i].id} class="tile is-child notification is-info">
          <p class="title">${data[i].title}</p>
          <p class="subtitle">Likes:${data[i].spoonacularScore}</p>
          <figure class="image is-4by3">
            <img src="${data[i].image}">
          </figure>
        </article>
      </div>
        `
        console.log(data[i]);
    }
    console.log(htmlCode)
    document.getElementById("card").innerHTML = htmlCode
}
