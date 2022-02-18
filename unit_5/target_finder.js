// link to project: https://studio.code.org/projects/applab/YDhIm5x_1ZORjGFBmjQ5oPlwIUUXYs-Y6RefgVLCvQU

var city = getColumn("Target Store Locations", "City");
var state = getColumn("Target Store Locations", "State");
var adress = getColumn("Target Store Locations", "Address");
var postal_adress = getColumn("Target Store Locations", "Postal Code");
var targets_near = [];

// move to home screen
onEvent("find_back", "click", function( ){
  setScreen("home");
});
onEvent("random_back", "click", function ( ){
  setScreen("home");
});

// move to find by postal code screen
onEvent("move_to_postal", "click", function ( ){ 
  setScreen("find");
});

// move to random screen
onEvent("random_target", "click", function( ){
  setScreen("random");
});

// find targets in postal_adress 
onEvent("find_target","click", function( ){
  if (getText("find_input").length == 5 && getText("find_input") != isNaN){
    // filter
    for(var i = 0; i < city.length; i++){
      if (postal_adress[i] == getNumber("find_input")){
        appendItem(targets_near, i);
      }
    }
    // print adress, city, state not doing right now
    if (targets_near.length === 0 ){
      setText("find_output", "There are no Targets near you!");
    }
    else{
      for(var j = 0; j < targets_near.length; j++){
        setText("find_output", adress[targets_near[j]] + ", " + city[targets_near[j]] + ", " + state[targets_near[j]]);
      }
    }
  }
  // display if entry is not a postal adress
  else{
    setText("find_output", "Please enter a postal adress.");
  }
  for(var v = 0; v < targets_near.length; v++){
    removeItem(targets_near, v);
  }
});

// find random target
onEvent("random_button", "click", function ( ){
  var ran = randomNumber(0, city.length - 1);
  setText("random_output", adress[ran] + ", " + city[ran] + ", " + state[ran]);
});

