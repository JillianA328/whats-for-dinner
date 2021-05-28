var apiKey = "bb0cfd0345318ff737b874e211c6bcbb";
var zipCode; //undefined
var restName = "";
var websiteUrl = "";
var phoneNumber = "";
var priceRating = "";

//console.log(zipCode);



function zipApi() {

    $("#search-btn").on("click", function (event) {
        event.preventDefault();
        zipCode = $("#zip-code").val().trim(); //defined variable
        console.log(zipCode);

        fetch(`https://api.documenu.com/v2/restaurants/zip_code/${zipCode}?key=${apiKey}`)
            .then(response => response.json())
            .then(({ data }) => {
                console.log(data);
                data.map(function (restaurant) {
                    console.log(restaurant.restaurant_name);
                    console.log(restaurant.address.formatted);
                });
            })
        $("#zip-code").val("");
    });

};

zipApi();



//would like to use geolocation 

//create cards in using html/bulma to show info
//name
//phone number
//address
//website link if there
//price rating if there
//can we get distance away?

//link cuisine drop down?