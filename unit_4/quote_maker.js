// link to project: https://studio.code.org/projects/applab/B6ZVZO-cEKdfL8YFmOLi-xz1PxgFgGcLZ-7Im6KM0J8

//Make global vars
var quote ="";
var font;
var color;
var font_size;

//define function to set css and feedbackOutput
function screen(){ 
  setText("quoteOutput", quote);
  setStyle("quoteOutput","font-size:" + font_size);
  setStyle("colorOutput", "background-color:" + color);
  setStyle("quoteOutput", "font-family:" + font);
  if (color == "lightgreen;"){
    setText("feedbackOutput", "Looking fresh!");
  }
  else if (font == "Comic;"){
    setText("feedbackOutput", "Best Font!");
  }
  else{
    setText("feedbackOutput", "Nice design!");
  }
}

//When change is made to quoteInput
onEvent( "quoteInput", "input", function ( ){
  quote = getText("quoteInput");
  screen();
  console.log(quote);
});
//When change is made to fontFamilyInput
onEvent("fontFamilyInput", "input" , function ( ){
  font = getText("fontFamilyInput") + ";" ;
  screen();
  console.log(font);
});
//When change is made to colorInput
onEvent ("colorInput", "input", function ( ){
  color = getText("colorInput") + ";";
  screen();
  console.log(color);
});
//When change is made to fontSizeInput
onEvent("fontSizeInput", "input", function( ){
	font_size = getNumber("fontSizeInput") + "px;";
	screen();
	console.log(font_size);
});

