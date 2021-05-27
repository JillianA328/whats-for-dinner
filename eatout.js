var apiKey = "bb0cfd0345318ff737b874e211c6bcbb";
var zipCode = "08049";



function getApi() {
    fetch(`https://api.documenu.com/v2/restaurant/4072702673999819?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
};

getApi();

function zipApi() {
    fetch(`https://api.documenu.com/v2/restaurants/zip_code/${zipCode}size=50?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
};

zipApi();