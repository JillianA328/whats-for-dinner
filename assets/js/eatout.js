$(document).ready(function () {

    var apiKey = "";
    var zipCode; //undefined
    var restName = "";
    var restAddress = "";
    var restWebsite = "";
    var restPhone = "";

    //var restArray = [];

    //getData();
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
                        console.log(restaurant);
                        // console.log(restaurant.restaurant_name);
                        // console.log(restaurant.address.formatted);
                        // console.log(restaurant.restaurant_phone);
                        //console.log(restaurant.restaurant_website);

                        //local storage set-up
                        localStorage.setItem("restKey", JSON.stringify(restaurant));


                        //variables to name data.map()
                        restName = restaurant.restaurant_name;
                        restAddress = restaurant.address.formatted;
                        restPhone = restaurant.restaurant_phone;
                        restWebsite = restaurant.restaurant_website;

                        //console.log(restName);

                        //card elements
                        var card = $('<div>').addClass('card column is-3 m-1 has-background-orange').attr('id', 'restaurantInfo');
                        var cardBody = $('<div>').addClass('card-content');
                        var cardTitle = $('<p>').addClass('title is-size-2-mobile').text(restName);
                        var cardMap = $('<iframe>').addClass('subtitle').attr('src', `https://www.google.com/maps?q=${restAddress}&output=embed`);
                        //var cardSub = $('<p>').addClass('subtitle is-size-4-mobile').text(restAddress);
                        var cardFooter = $('<footer>').addClass('card-footer');
                        var cardNum = $('<a>').addClass('card-footer-item is-size-4-mobile').attr('href', `tel:${restPhone}`).text(`${restPhone}`);
                        var cardUrl = $('<a>').addClass('card-footer-item is-size-4-mobile').attr('href', `${restWebsite}`).html(`Website`);
                        $("a").attr("target", "_blank");

                        //add info to card

                        cardFooter.append(cardNum, cardUrl);
                        cardBody.append(cardTitle, cardMap, cardFooter);
                        card.append(cardBody);
                        $("#displayRest").append(card);


                    });


                })
            $("#zip-code").val("");
            //should I add same thing for displayRest to clear info?
        });

    };

    zipApi();
    // function getData() {
    //     var getRest = localStorage.getItem("restKey")
    //     if (getRest) {
    //         restArray = JSON.parse(getRest);
    //     }
    //     console.log(restArray);
    //     zipApi();
    // };

    function reset() {
        $("#clear-btn").on("click", function () {
            $("#displayRest").val("");
        })
    };

    reset();


    //end of document ready function
});
