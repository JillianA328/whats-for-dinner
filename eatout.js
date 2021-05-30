var apiKey = "bb0cfd0345318ff737b874e211c6bcbb";
var zipCode; //undefined
var restName = "";
var restAddress = "";
var restWebsite = "";
var restPhone = "";
var restPrice = "";

//console.log(zipCode);


//function to find zip and populate restaurant info
function zipApi() {

    $("#search-btn").on("click", function (event) {
        event.preventDefault();
        zipCode = $("#zip-code").val().trim(); //defined variable
        //console.log(zipCode);

        fetch(`https://api.documenu.com/v2/restaurants/zip_code/${zipCode}?key=${apiKey}`)
            .then(response => response.json())
            .then(({ data }) => {
                console.log(data);
                data.map(function (restaurant) {
                    //tested data
                    // console.log(restaurant.restaurant_name);
                    // console.log(restaurant.address.formatted);
                    // console.log(restaurant.restaurant_phone);
                    //console.log(restaurant.restaurant_website);

                    //variables to name data.map()
                    restName = restaurant.restaurant_name;
                    restAddress = restaurant.address.formatted;
                    restPhone = restaurant.restaurant_phone;
                    restWebsite = restaurant.restaurant_website;

                    //console.log(restName);

                    //card elements
                    var card = $('<div>').addClass('card column is-4 p-1 m-1 has-background-orange').attr('id', 'restaurantInfo');
                    var cardBody = $('<div>').addClass('card-content');
                    var cardTitle = $('<p>').addClass('title is-size-1-mobile has-text-white').text(restName);
                    var cardSub = $('<p>').addClass('subtitle is-size-3-mobile has-text-white').text(restAddress);
                    var cardFooter = $('<footer>').addClass('card-footer');
                    var cardNum = $('<a>').addClass('card-footer-item is-size-4-mobile').attr('href', `tel:${restPhone}`).text(`${restPhone}`);
                    var cardUrl = $('<a>').addClass('card-footer-item is-size-4-mobile').attr('href', `https://${restName}.com`).html(`Website`);

                    //add info to card

                    cardFooter.append(cardNum, cardUrl);
                    cardBody.append(cardTitle, cardSub, cardFooter);
                    card.append(cardBody);
                    $("#displayRest").append(card);
                });

            })
        $("#zip-code").val("");
        //should I add same thing for displayRest to clear info?
    });

};

zipApi();
