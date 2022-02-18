// link to project: https://studio.code.org/projects/applab/9OmGSWnYq8gJkk0kFg-yCc1x3-F5oneAenj73NRQhFM

// Gets all the data into lists
var forcast_num = getColumn("Daily Weather", "Forecast Number");
var city = getColumn("Daily Weather", "City");
var high= getColumn("Daily Weather", "High Temperature");
var low = getColumn("Daily Weather", "Low Temperature");
var condition = getColumn("Daily Weather", "Condition Description");
var icon = getColumn("Daily Weather", "Icon");
var num;

// When button is clicked gets random cities forecast for the next day
onEvent("forecastButton", "click", function ( ){
  num = randomNumber(0, forcast_num.length - 1);
  if(forcast_num[num] == 1 ){
    num = num + 1;
  }
  else{
    num = (num +2) - forcast_num[num];
  }
  // Sets the info on the screen to the random cities forecast for the next day
  function update_screen (){
    setText("cityOutput", city[num]);
    setText("highTempOutput", high[num]);
    setText("lowTempOutput", low[num]);
    setText("conditionOutput", condition[num]);
    setProperty("iconOutput","image", icon[num]); 
  }
  update_screen();
});

