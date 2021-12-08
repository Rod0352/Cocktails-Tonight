var ingredients = ["white rum", "sugar syrup", "lime juice", "orange juice", "pineapple juice", "apple juice", "sweet vermouth", "bourbon whiskey", "tequila (repososada)", "pomegrnate", "Egg white", "Orange Bitters", "Cranberry Juice", "Grand Marnier liqueur", 
"soda(club soda)", "cream", "Blended Scotch", "fresh Mint", "Campri Bitter", "Amaretto Liqueur", "milk", "Black raspberry", "milk", "Runny Hunny", "Benedictine", "Aged Rum", "Cherry brand", "Almond", "Cachaca" ];

$(document).ready(function() {
    $("#dropdown").hide();
});

$("#random-btn").click(function() {
    console.log("This works A.");
}); 

$("#custom-btn").click(function() {
    $("#dropdown").toggle();
    console.log("This works.");
});



