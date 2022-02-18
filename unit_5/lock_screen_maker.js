// link to project: https://studio.code.org/projects/applab/eQfTH2wKXvW3c2UDBEZ_E2r5-F66YwsxFrAhFLz0Ies

// List of icons to randomly choose between
var iconsList = ["icon://fa-heart", 
                 "icon://fa-music", 
                 "icon://fa-smile-o", 
                 "icon://fa-globe", 
                 "icon://fa-tree", 
                 "icon://fa-bolt", 
                 "icon://fa-moon-o",
                 "icon://fa-star"];

// make stuff show up in beginning
set_colors();
set_locations();
set_shapes();

// changes colors on click
onEvent("colorsButton", "click", function( ){
  set_colors();
  playSound("sound://category_collect/vibrant_game_coin_1.mp3", false);
});

// changes locations on click
onEvent("locationsButton", "click", function( ){
  set_locations();
  playSound("sound://category_collect/vibrant_game_coin_1.mp3", false);
});

// changes shapes on click
onEvent("shapesButton", "click", function( ){
  set_shapes();
  playSound("sound://category_collect/vibrant_game_coin_1.mp3", false);
});

// stuff to run to set colors
function set_colors(){
  setProperty("homeScreen", "background-color", rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255)));
  for(var i = 0; i < 20; i++) {
    setProperty("icon" + i, "icon-color",rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255)));
  } 
}

// stuff to run to set locations
function set_locations(){
  for(var i = 0 ; i < 20; i++) {
    setProperty("icon" + i , "x", randomNumber(0,320));
    setProperty("icon" + i, "y", randomNumber(0,450));
    var size = randomNumber(20,200);
    setProperty("icon" + i, "width", size);
    setProperty("icon" + i, "height", size);
  } 
}

// stuff to run to set shapes
function set_shapes(){
  var shape = iconsList[randomNumber(0, iconsList.length - 1)];
  for(var i = 0; i < 20; i++ ){
    setProperty("icon" + i, "image", shape);
  }
}

