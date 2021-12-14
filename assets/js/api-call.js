var getCocktails = function(drinks) {
    
    //format cocktail api url
    var apiUrlRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    //request to the API URL
    fetch(apiUrlRandom).then(function(response) {
        console.log(response);
        response.json().then(function(res) {
            console.log(res);
            jsonData = res;
            const data = res[0];
            console.log(res[0]);
        });
    });      
       
};

var displayCocktails = function(drinks) {
    console.log(drinks);
    console.log(displayCocktails);
};

// Two ID names on this button??
//$("#btn-search").click(function() {
//     var getRandomCocktail = $("#random-cocktail").text();
//     getCocktails(getRandomCocktails);
// });

var getDrinkByIngred = function() {

    var apiUrlIngredients ="https:/www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka";

    fetch(apiUrlIngredients).then(function(response){
        response.json().then(function(res){
            console.log(res);
            jsonData = res;
            const data = res[0];
            console.log(res[0]);
        });
    });
};

// Not sure about some of the ID names here??
//$("#custom-btn").click(function() {
//     var getCustomDrink =$()
// })

getCocktails();