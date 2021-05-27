var apiKey = "bb0cfd0345318ff737b874e211c6bcbb";
var zipCode = "08049";


function zipApi() {
    fetch(`https://api.documenu.com/v2/restaurants/zip_code/${zipCode}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
};

zipApi();