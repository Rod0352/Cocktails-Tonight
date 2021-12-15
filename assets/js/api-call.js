$("#random-cocktail").click(function () {
    //retrieve text from textbox
    var cocktailText = $("#random-cocktail-text").text();
    //pass the given text into the getRandomCocktails function
    //display the results in the console
    console.log(cocktailsResult);
    console.log('Htest');
});


function getRandomCocktail() {

    //format cocktail api url
    var apiUrlRandomDrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    //request to the API URL
    fetch(apiUrlRandomDrink).then(function (response) {
        response.json().then(function (res) {
            $('textarea:eq(0)').text(res.drinks[0].strDrink);

        });
    });

};

getRandomCocktail();

$("#recipe-btn").click(function () {
    //retrieve text from textbox
    //pass the given text into the getRandomRecipe function
    var recipeResult = getRandomRecipe();
    //display the results in the console
    console.log(recipeResult);
});

function getRandomRecipe() {

    //format recipe api url
    var apiUrlRandomRecipe = "https://www.themealdb.com/api/json/v1/1/random.php";

    //request to the API URL
    fetch(apiUrlRandomRecipe).then(function (response) {
        response.json().then(function (res) {
            $('textarea:eq(1)').text(res.meals[0].strMeal);
        });
    });
};

