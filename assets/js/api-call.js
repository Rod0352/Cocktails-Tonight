$("#random-cocktail-text").click(function () {
    
    //retrieve text from textbox
      var cocktailsResult = getRandomCocktail();
    
      //log the displayed result
    console.log(cocktailsResult);
    
});


function getRandomCocktail() {

    //format cocktail api url
    var apiUrlRandomDrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    //request to the API URL
    fetch(apiUrlRandomDrink).then(function (response) {
        response.json().then(function (res) {
            $('textarea:eq(0)').text(res.drinks[0].strDrink);
            return res.drinks[0].strDrink;

        });
    });

};

//getRandomCocktail();

$("#recipe-btn").click(function () {
    //retrieve text from textbox
    //pass the given text into the getRandomRecipe function
    var recipeResult = getRandomRecipe();
    console.log(getRandomRecipe);
    
});

function getRandomRecipe() {

    //format recipe api url
    var apiUrlRandomRecipe = "https://www.themealdb.com/api/json/v1/1/random.php";

    //request to the API URL
    fetch(apiUrlRandomRecipe).then(function (response) {
        response.json().then(function (res) {
            $('textarea:eq(1)').text(res.meals[0].strMeal);
            $('#link-youtube').attr('href', res.meals[0].strYoutube);
            console.log(res.meals[0].strYoutube);
            return res.meals[0].strMeal;
            
        });
    });
};


