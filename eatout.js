var apiKey = "bb0cfd0345318ff737b874e211c6bcbb";
var zipCode; //undefined
var restName = "";
var restAddress = "";
var restWebsite = "";
var restPhone = "";
var restPrice = "";

//console.log(zipCode);



function zipApi() {

    $("#search-btn").on("click", function (event) {
        event.preventDefault();
        zipCode = $("#zip-code").val().trim(); //defined variable
        console.log(zipCode);

        fetch(`https://api.documenu.com/v2/restaurants/zip_code/${zipCode}?key=${apiKey}`)
            .then(response => response.json())
            .then(({ data }) => {
                //console.log(data);
                data.map(function (restaurant) {
                    //test data
                    // console.log(restaurant.restaurant_name);
                    // console.log(restaurant.address.formatted);
                    // console.log(restaurant.restaurant_phone);
                    // console.log(restaurant.restaurant_website);

                    restName = restaurant.restaurant_name;
                    restWebsite = restaurant.address.formatted;
                    restPhone = restaurant.restaurant_phone;
                    restWebsite = restaurant.restaurant_website;

                    //console.log(restName);

                    var card = ('<div>This worked!</div>');
                    $(card).addClass("restaurantCard");
                    //$(card).attr('id', 'restaurantInfo')

                    $("#displayRest").append(card);
                });

            })
        $("#zip-code").val("");
    });

};

zipApi();

// function zipApi() {

//     $("#search-btn").on("click", function (event) {
//         event.preventDefault();
//         zipCode = $("#zip-code").val().trim(); //defined variable
//         console.log(zipCode);

//         fetch(`https://api.documenu.com/v2/restaurants/zip_code/${zipCode}?key=${apiKey}`)
//             .then(response => response.json())
//             .then(({ data }) => {
//                     console.log(data);
//                     console.log(data.restaurant_name);

//                     for(i = 0; i < 5; i++){

//                     }

//             })
//         $("#zip-code").val("");
//     });

// };

// zipApi();




//would like to use geolocation 

//create cards in using html/bulma to show info
//name
//phone number
//address
//website link if there
//price rating if there
//can we get distance away?

//link cuisine drop down?