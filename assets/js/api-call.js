$("#btn-search").click(function() {
    //retrieve text from textbox
    var cocktailText  = $("#random-cocktail").text();
    //pass the given text into the getRandomCocktails function
    var cocktailsResult = getDrinkByIngred(cocktailText);
    //display the results in the console
    console.log(cocktailsResult);
 });


function getRandomCocktail() {
    
    //format cocktail api url
    var apiUrlRandomDrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    //request to the API URL
        fetch(apiUrlRandomDrink).then(function(response) {
        console.log(response);
        response.json().then(function(res) {
            console.log(res);
            jsonData = res;
            const data = res[0];
        });
    });      
       
};

 function displayCocktails(drinks) {
     // TO DO: add logic to display cocktails to page.
 }

//this executes on page load (w/ button click ?)
getRandomCocktails(); 

// *****************************************************************************************
$("#btn-search").click(function() {
    //retrieve text from textbox
    var recipeText  = $("#random-recipe").text();
    //pass the given text into the getRandomRecipe function
    var recipeResult = getDrinkByIngred(cocktailText);
    //display the results in the console
    console.log(recipeResult);
 });

function getRandomRecipe() {
    
    //format cocktail api url
    var apiUrlRandomRecipe = "https://www.themealdb.com/api/json/v1/1/random.php";

    //request to the API URL
        fetch(apiUrlRandomRecipe).then(function(response) {
        console.log(response);
        response.json().then(function(res) {
            console.log(res);
            jsonData = res;
            const data = res[0];
            
        });
    });             
};


 function displayRecipe(drinks) {
     // TO DO: add logic to display cocktails to page.
 };

//this executes on page load (w/ button click ?)
getRandomRecipe(); 