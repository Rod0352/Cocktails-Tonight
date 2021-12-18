
var ingredient = ["white rum", "sugar syrup", "lime juice", "orange juice", "pineapple juice",
    "apple juice", "sweet vermouth", "bourbon whiskey", "tequila (repososada)", "pomegrnate", "Egg white",
    "Orange Bitters", "Cranberry Juice", "Grand Marnier liqueur",
    "soda(club soda)", "cream", "Blended Scotch", "fresh Mint", "Campri Bitter", "Amaretto Liqueur", "milk",
    "Black raspberry", "milk", "Runny Hunny", "Benedictine", "Aged Rum", "Cherry brand", "Almond", "Cachaca"
];

$(document).ready(function () {
    $("#dropdown").hide();
});

$("#random-btn").click(function () {
    console.log("This works A.");
});

var ingredients = "";
var selectOptions = function (custom) {
    
    for (var i = 0; i < ingredients.length; i++) {
        var opt = select.options[i].text;
        var include = document.createElement('select');
        include.textContent = ingredients;
        selectOptions.appendChild(include);
        

    };
};

var custom = document.getElementById("choice");


// custom button displays options

$("#custom-btn").click(function () {
     console.log("This works.");
    $("#drinkOptions").css("display", "block");

});

 var custom = $(document).ready(function () {
     $("#drinkSelection").click(function (myFunction) {
         $("#drinkOptions").css("display", "none");
         $("#random-btn").innerHtml("display", "none");
     });
 });
 function to store values selcted
   // get references to select list and display text box
const element = document.getElementById("drinks");
const checkValue = element.option[element.selectedIndex].value;
const checkText = element.option[element.selectedIndex].text;
 var select = $(document).ready(function(){
     $(option).click(function(){
         console.log(value);
     }
     )
 }
 )
