var eatIn = "#eat-in";
var apiKey = "300a7d2cc57843cd8827b55f1a6ceab1";
var recipeId = [];

if (localStorage) {
    
}

// greated get recipes function 
var getRecipes = function (event) {
    event.preventDefault()
    // define API URL
    var userInput = document.querySelectorAll(".ingredients");
    console.log(userInput)
    var search = ""
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i].checked) {
            console.log(userInput[i].name)
            search += `,+${userInput[i].name}`
        }
        console.log(search)
        // website()

    }


    // var ingredients, recipes;
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${search}&number=5`)
        .then(function (response) {

            //     return response.json();
            // }).then(function (data) {
            // console.log(response);
            if (response.ok) {
                response.json().then(function (data) {
                    console.log("API", data);

                    localStorage.setItem("recipeKey", JSON.stringify(data));
                    displayRecipes(data);
                    // website(data);
                    for (var i = 0; i < data.length; i++) {
                        var id = data[i].id;
                        //  var id = ingredients.id;
                        console.log(data[i].id);
                        recipeId.push(id);
                    }
                    console.log("recipeId", recipeId);
                    console.log(id)
                    // website(recipeId)
                })
            }

            console.log("function was called");
        });
}

document.getElementById("searchBtn").addEventListener("click", getRecipes)

function displayRecipes(data) {
    // var id = data.id;
    var htmlCode = "";
    var getStorage = localStorage.getItem("recipeKey");
    var parseStorage = JSON.parse(getStorage); 
    
    // console.log(parseStorage)
    // console.log(getStorage)

    for (let i = 0; i < data.length; i++) {
        console.log("Data", data)
        var recipe = data[i];

        console.log('recipe', recipe, data)
        htmlCode += `
        <div class="tile is-parent">
        <article data-id=${data[i].id} class="tile is-child notification is-info" id="recipe-card">
          <p class="title">${data[i].title}</p>
          <p class="subtitle">Likes:${data[i].likes}</p>
          
            <img src="${data[i].image}">
         
          <div id=${data[i].id}>
          </div>
          <button id="searchBtn" onClick="website(\`${recipe.id}\`)">View Recipe</button>
        </article>
      </div>
        `
    }

    // <button class="data-url" data-id=${data[i].id}>View Recipie
    //       </button>
    console.log(htmlCode)
    document.getElementById("card").innerHTML = htmlCode
    
    getStorage()
    console.log(getStorage)


    function reset() {
        $("#clear-btn").on("click", function () {
            $(displayRecipes).val("");
        })

    };
    // have just a clear button with clear local storage command inside instead of reset function
    reset();

}

function website(id) {
    //  var id = data.id
    // believe id variable needs altering
    console.log("website-id", id);

    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log("recipe", data);

            recipes = data;

            // document.querySelector("a").addEventListener("click", data.sourceUrl)
            window.open(data.sourceUrl, "_blank")
            console.log(data.sourceUrl)
            // window.location = "data.sourceUrl

        })
    // console.log(id)
}

// website();
