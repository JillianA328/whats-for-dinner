$(document).ready(function () {
    var apiKey = "bb0cfd0345318ff737b874e211c6bcbb";
    var zipCode; //undefined
    var card;
    var restName = "";
    var restAddress = "";
    var restWebsite = "";
    var restPhone = "";
    var cities = [];
    //function to find zip and populate restaurant info
    
    function loadPage() {
        var storageCities = localStorage.getItem('cities');
        console.log(storageCities);
        if (storageCities) {
            cities = storageCities.split(",")
            cities.forEach((city) => {
                $("#displayRest").append(`<li class = 'list-group-item no-show'>${city}</li>`); // this renders the list of search value
            })
            var lastIndex = cities.length -1;
            zipApi(cities[lastIndex])
        }
    }
  
    function zipApi(zipCode) { // I created the function with the input ID as a parameter
    
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
                        //variables to name data.map()
                        restName = restaurant.restaurant_name;
                        restAddress = restaurant.address.formatted;
                        restPhone = restaurant.restaurant_phone;
                        restWebsite = restaurant.restaurant_website;
                        //console.log(restName);
                        //card elements
                        card = $('<div>').addClass('card column is-4 m-1 has-background-orange').attr('id', 'restaurantInfo');
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
                        console.log(card);
                    });
                })
            $("#zip-code").val("");
            //should I add same thing for displayRest to clear info?
        // });
    };
    $("#search-btn").on("click", function(event){ // removed the event listener as its own function
             event.preventDefault();
            zipCode = $("#zip-code").val();
            cities = [...cities, zipCode] // cloning the array here lookup the ... known as a spread operator
            localStorage.setItem("cities", zipCode);
            zipApi(zipCode);
            console.log(zipCode);
    })
    loadPage(); // This runs every time the page loads

    
});

