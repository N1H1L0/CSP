// link to project: https://studio.code.org/projects/applab/RbhMUTYJUHovQTk9WPeE8al-7QXU5peVrD94P4Am9gY

// Create Variables
var day; 
var age;
var discount_code;
var price;
var ticket;

// To Do when Create My Ticket is clicked 
onEvent("calculateButton", "click", function() {
  // Update Variables
  day = getText ("dayDropdown");
  age = getText ("ageDropdown");
  discount_code = getText ("discountInput");
  
  // Check the value of variables to decide the price to set
  if ((day == "Saturday" || day == "Sunday") && age <=10 && discount_code == "FAMILYTIME"){//Checks to see if weekend and age and discount_code for family time discount
    price = 0;
  }
  else if (day == "Friday" && discount_code == "FREEFRIDAY") { //Checks to see if friday and for discount code
    price = 0;
  }
  else if (age >= 65){//Checks if senior and if senior gives senior pricing
    price = 5;
  }
  else if (age <= 18 && day != "Saturday" && day != "Sunday"){ //otherwise checks if age is less than 18 and is a weekday 
    price = 5;
  }
  else{//if none of above are true does this
    price = 10;
  }
  // Create the text for the ticket
   ticket ="Day: " + day + "\n" + "Age: " + age + "\n" + "Price: $" + price;
  
  // Set the text on the screen
  setText("ticketOutput", ticket);
});

