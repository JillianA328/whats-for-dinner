{/* <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div> */}

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

        fetch("https://api.documenu.com/v2/restaurants/zip_code/${zipCode}?key=${apiKey}")
            .then(response => response.json())
            .then(({ data }) => {
                console.log(data);
                data.map(function (restaurant) {
                    console.log(restaurant.restaurant_name);
                    console.log(restaurant.address.formatted);
                    console.log(restaurant.restaurant_phone);
                    console.log(restaurant.restaurant_website);


                });


            })
        $("#zip-code").val("");
    });

};

zipApi();