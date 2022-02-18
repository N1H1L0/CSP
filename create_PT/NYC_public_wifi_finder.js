// link to project: https://studio.code.org/projects/applab/LYxcnuNFyPko57QOvGfAwUDgfr7v3mFGcVninoEnsxk

// gets input from Enter your postal code here! box when the user presses enter and runs find_wifi using their input as the parameter then sets output box to result.
onEvent("postal_code_input", "change",function ( ){
  setText("address_output", find_wifi(getText("postal_code_input")));
});

// NYC Public Wifi Locations data set was provided by code.org
var nyc_postal_codes = getColumn("NYC Public Wifi Locations", "Postal Code");
var nyc_locations = getColumn("NYC Public Wifi Locations", "Location");
var nyc_access_locations = getColumn("NYC Public Wifi Locations", "Access Location");
var nyc_provider = getColumn("NYC Public Wifi Locations", "Provider");

// finds out if there is free wifi in the postal_code paramenter that find_wifi needs and returns info about the wifi acess point if there is free wifi in the postal_code.
function find_wifi (postal_code){
  var location_indexes = [];
  // checks if the entered postal code is a valid postal code and 
  // if it isn't alerts the user and helps them fix it by telling them the error
  if (isNaN(postal_code)){
    return "Please enter a Postal Code. A Postal Code is numeric and five characters in length.";
  }
  else if (postal_code.length < 5){
    return "Please enter a Postal Code. You need to add " + (5 - postal_code.length) + " more numbers to make a Postal Code.";
  }
  else if (postal_code.length > 5){
    return "Please enter a Postal Code. You need to subtract " + (postal_code.length - 5) + " numbers to make a Postal Code.";
  }
  // checks if the entered postal code matches with any postal codes on the 
  // nyc_postal_codes list and appends them to the locations_indexes list
  else
    for(var i = 0; i < nyc_postal_codes.length; i++){
      if (postal_code == nyc_postal_codes[i]){
        appendItem(location_indexes, i);
      }
    }
    // creates output message containing info for all entries in location_indexes and 
    // if there where no matches to nyc_posta_codes list it returns a string telling 
    // you "There are no postal codes in your current area."
    var near_wifi = "";
    for(var j = 0; j < location_indexes.length; j++){
      near_wifi += "Location " + j+1 + "\n    Address: " + nyc_locations[location_indexes[j]] + "\n" + "    Access Location: " + nyc_access_locations[location_indexes[j]] + "\n    Provider: " + nyc_provider[location_indexes[j]] + "\n";
    }
    if (near_wifi == ""){
      return "There are no Public Wifi Locations in your current area.";
    }
    return near_wifi;
}

