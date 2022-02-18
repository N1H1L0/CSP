// link to project: https://studio.code.org/projects/applab/yuv23sABggFCZPV_2WKLaLmRdxJfxkNONovsBXuBVik

var operation = "";

onEvent("xInput", "input", function ( ){
  updateScreen();
});
onEvent("yInput", "input", function ( ){ // when something is inputed in the y box these things are done
  updateScreen();   
});

onEvent("Operation1", "click", function ( ){ // when button displaying question is click does these things 
  operation = "division";
  updateScreen();
  operation = "";
});

function updateScreen(){ // function updates the stuff on screen preventing you from having to copy and paste the things called in the fuction every time you want to run it
  // gets the numbers you inputed
  var num1 = getNumber("xInput");
  var num2 = getNumber("yInput");
  //function that makes displaying answer better
  function answer (rem, YorN) { 
      setText("answerOutput", "Result: \n The answer to your equation is " + num1/num2 + rem + "\nThis equation results in " + YorN);
    }

  // updates the button based on different cases
  if (isNaN(num1) && isNaN(num2)){
    setText("Operation1","Click to find out if X divided by Y results in a remainder?");
  }
  else if(isNaN(num2)){
    setText("Operation1", "Click to find out if " + num1 + " divided by Y results in a remainder?");

  }
  else if(isNaN(num1)){
    setText("Operation1","Click to find out if X divided by " + num2 + " results in a remainder?");
  }
  else{
    setText("Operation1", "Click to find out if " + num1 + " divided by " + num2 + " results in a remainder?");
  }
  
  // finds if all fields are filled then if there is a remainder or not
  if (operation == "division" && (isNaN(num1) || isNaN(num2))){
    setText("answerOutput", "Result: \n You need to enter numbers in both boxes in order to calculate.");
  }
  else if (operation == "division" && num2 == 0){
    setText("answerOutput", "Result: \n This operation is undefined!");
  }
  else if (operation == "division") { 
    var calculate = num1 % num2;
    if (calculate != 0){
      answer(" with a remainder of " + calculate + "!", "a remainder!"); 
    }
    else {
      answer("!", "no remainders!");
    }
  }
}

