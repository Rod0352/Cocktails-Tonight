$("#btn-search").click(function() {
    //retrieve text from textbox
    var cocktailText  = $("#random-cocktail").text();
    //pass the given text into the getCocktails function
    var cocktailsResult = getDrinkByIngred(cocktailText);
    //display the results in the console
    console.log(cocktailsResult);
 });


function getRandomCocktail() {
    
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

  function getDrinkByIngred(ingredient) {

  var apiUrlIngredients ="https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka" + ingredient;

   fetch(apiUrlIngredients).then(function(response){
       response.json().then(function(res){
            console.log(res);
            jsonData = res;
           const data = res[0];
            console.log(res[0]);
         });
     });
 };

 function displayCocktails(drinks) {
     // TO DO: add logic to display cocktails to page.
 }

//this executes on page load
getRandomCocktails(); 

