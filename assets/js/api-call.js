var getCocktails = function(drinks) {
    //format cocktail api url
    var apiURL = "www.thecocktaildb.com/api/json/v1/1/random.php";

    //request to the API URL
    fetch(apiURL).then(function(response){
        response.json().then(function(data) {
            console.log(data);
        });
    });      
       
};

getCocktails("random");